const fs = require("fs");
const path = require("path");

let started = false;

module.exports = async(discordBot) => {
    if(started) return;

    const logger = discordBot.getLogger();
    const config = discordBot.getConfig();
    const client = discordBot.getClient();

    // Configuration
    const channelId = config.DoorCameraChannelId;
    const CAPTURE_DIR = config.DoorCameraCaptureDirectory;
    const MAX_FILE_SIZE = config.DoorCameraMaxFileSizeMB * 1024 * 1024;
    const POLL_INTERVAL_MS = config.DoorCameraPollIntervalMs;
    const BATCH_DELAY_MS = config.DoorCameraBatchDelayMs;
    const RETRY_DELAY_MS = config.DoorCameraRetryDelayMs;

    // Validate configuration
    const requiredSettings = {
        DoorCameraChannelId: channelId,
        DoorCameraCaptureDirectory: CAPTURE_DIR,
        DoorCameraMaxFileSizeMB: config.DoorCameraMaxFileSizeMB,
        DoorCameraPollIntervalMs: POLL_INTERVAL_MS,
        DoorCameraBatchDelayMs: BATCH_DELAY_MS,
        DoorCameraRetryDelayMs: RETRY_DELAY_MS
    };

    for(const [name, value] of Object.entries(requiredSettings)) {
        if(value === undefined || value === null || value === "") {
            logger.error(`Door camera: Missing configuration setting ${name}.`);
            return;
        }
    }

    if(
        typeof CAPTURE_DIR !== "string" ||
        !Number.isFinite(MAX_FILE_SIZE) || MAX_FILE_SIZE <= 0 ||
        !Number.isInteger(POLL_INTERVAL_MS) || POLL_INTERVAL_MS <= 0 ||
        !Number.isInteger(BATCH_DELAY_MS) || BATCH_DELAY_MS < 0 ||
        !Number.isInteger(RETRY_DELAY_MS) || RETRY_DELAY_MS <= 0
    ) {
        logger.error("Door camera: Invalid configuration values.");
        return;
    }

    started = true;

    const seen = new Set();
    const stableFiles = new Map();
    const pending = new Map();

    let lastNewFileAt = 0;
    let retryAt = 0;
    let scanning = false;
    let sending = false;

    async function getCaptureFiles() {
        const results = [];

        let dates;

        try {
            dates = await fs.promises.readdir(CAPTURE_DIR, {
                withFileTypes: true
            });
        } catch(error) {
            if(error.code !== "ENOENT") {
                logger.error(
                    `Door camera: Cannot read capture directory: ${error.message}`
                );
            }
            return results;
        }

        for(const entry of dates) {
            if(!entry.isDirectory() ||
                !/^\d{4}-\d{2}-\d{2}$/.test(entry.name)
            ) {
                continue;
            }

            const directory = path.join(CAPTURE_DIR, entry.name);

            let files;

            try {
                files = await fs.promises.readdir(directory, {
                    withFileTypes: true
                });
            } catch(error) {
                logger.warn(
                    `Door camera: Cannot read ${directory}: ${error.message}`
                );
                continue;
            }

            for(const file of files) {
                if(
                    file.isFile() &&
                    file.name.toLowerCase().endsWith(".mp4")
                ) {
                    results.push(path.join(directory, file.name));
                }
            }
        }

        return results;
    }

    // Ignore recordings that existed before the DEV bot started.
    async function initializeExistingFiles() {
        const files = await getCaptureFiles();

        for(const file of files) {
            seen.add(file);
        }

        logger.info(
            `Door camera: Watcher initialized; ignoring ${seen.size} existing MP4 file(s).`
        );
    }

    async function scan() {
        if(scanning) return;

        scanning = true;

        try {
            const files = await getCaptureFiles();

            for(const file of files) {
                if(seen.has(file)) continue;

                let stat;

                try {
                    stat = await fs.promises.stat(file);
                } catch {
                    continue;
                }

                if(!stat.isFile()) continue;

                const previous = stableFiles.get(file);

                if(!previous || previous.size !== stat.size) {
                    stableFiles.set(file, {
                        size: stat.size,
                        stable: false
                    });
                    continue;
                }

                if(!previous.stable) {
                    stableFiles.set(file, {
                        size: stat.size,
                        stable: true
                    });

                    if(stat.size >= MAX_FILE_SIZE) {
                        logger.warn(
                            `Door camera: Rejected file at or above ${config.DoorCameraMaxFileSizeMB} MB: ${file} (${stat.size} bytes)`
                        );

                        seen.add(file);
                        stableFiles.delete(file);
                        continue;
                    }

                    if(stat.size === 0) {
                        logger.warn(
                            `Door camera: Rejected empty file: ${file}`
                        );

                        seen.add(file);
                        stableFiles.delete(file);
                        continue;
                    }

                    pending.set(file, stat.size);
                    lastNewFileAt = Date.now();

                    logger.info(
                        `Door camera: New finalized video detected: ${path.basename(file)} (${stat.size} bytes)`
                    );
                }
            }

            // Send collected segments after the batch delay.
            if(
                pending.size > 0 &&
                !sending &&
                Date.now() - lastNewFileAt >= BATCH_DELAY_MS &&
                Date.now() >= retryAt
            ) {
                await sendPendingVideos();
            }
        } catch(error) {
            logger.error(
                `Door camera: Scan failed: ${error.message}\n${error.stack}`
            );
        } finally {
            scanning = false;
        }
    }

    async function sendPendingVideos() {
        if(sending || pending.size === 0) return;

        sending = true;

        const batch = [...pending.entries()];

        try {
            const channel = await client.channels.fetch(channelId);

            if(!channel ||
                !channel.isTextBased() ||
                typeof channel.send !== "function"
            ) {
                throw new Error(
                    "Configured destination is not a sendable text channel."
                );
            }

            if(
                channel.guildId &&
                channel.guildId !== config.GuildId
            ) {
                throw new Error(
                    "Destination channel does not belong to the configured DEV guild."
                );
            }

            // Recheck file sizes immediately before uploading.
            const attachments = [];

            for(const [file] of batch) {
                const stat = await fs.promises.stat(file);

                if(!stat.isFile() ||
                    stat.size === 0 ||
                    stat.size >= MAX_FILE_SIZE
                ) {
                    logger.warn(
                        `Door camera: File failed final size validation: ${file}`
                    );

                    pending.delete(file);
                    seen.add(file);
                    continue;
                }

                attachments.push({
                    attachment: file,
                    name: path.basename(file)
                });
            }

            if(attachments.length === 0) return;

            await channel.send({
                content: `Door camera alert — ${attachments.length} video segment(s) captured around the door event.`,
                files: attachments
            });

            for(const attachment of attachments) {
                const matchingEntry = batch.find(
                    ([candidate]) => path.basename(candidate) === attachment.name);

                    const file = matchingEntry ? matchingEntry[0] : null;
                if(file) {
                    pending.delete(file);
                    seen.add(file);
                    stableFiles.delete(file);
                }
            }

            logger.info(
                `Door camera: Successfully sent ${attachments.length} video segment(s) to Discord.`
            );

            retryAt = 0;
        } catch(error) {
            retryAt = Date.now() + RETRY_DELAY_MS;

            logger.error(
                `Door camera: Discord upload failed; will retry: ${error.message}\n${error.stack}`
            );
        } finally {
            sending = false;
        }
    }

    try {
        await initializeExistingFiles();

        logger.info(
            "Door camera: Starting capture directory monitoring."
        );

        setInterval(scan, POLL_INTERVAL_MS);
    } catch(error) {
        logger.error(
            `Door camera: Watcher initialization failed: ${error.message}\n${error.stack}`
        );
    }
};
