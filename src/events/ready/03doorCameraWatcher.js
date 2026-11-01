const fs = require("fs");
const path = require("path");

module.exports = async function (discordBot) {
    if(module.exports.started) {
        return;
    }

    const logger = discordBot.getLogger();
    const config = discordBot.getConfig();
    const client = discordBot.getClient();

    const GUILD_ID = config.GuildId;

    // This particular process Configuration
    const processingConfig = config.DoorCameraProcessing;

    if(!processingConfig ||
        typeof processingConfig !== "object" ||
        Array.isArray(processingConfig)
    ) {
        logger.error(
            "Door camera: Missing DoorCameraProcessing configuration."
        );
        return;
    }

    const CHANNEL_ID = processingConfig.ChannelId;
    const CAPTURE_DIR = processingConfig.CaptureDirectory;
    const INDEX_FILE_NAME = processingConfig.IndexFileName;
    const MAX_FILE_SIZE = processingConfig.MaxFileSizeMB * 1024 * 1024;
    const MAX_MESSAGE_SIZE = processingConfig.MaxMessageSizeMB * 1024 * 1024;
    const POLL_INTERVAL_MS = processingConfig.PollIntervalMs;
    const EVENT_GAP_MS = processingConfig.EventGapMs;
    const EVENT_QUIET_MS = processingConfig.EventQuietMs;
    const BETWEEN_EVENTS_MS = processingConfig.BetweenEventsMs;
    const RETRY_DELAY_MS = processingConfig.RetryDelayMs;

    // Validate configuration
    const requiredSettings = {
        ChannelId: CHANNEL_ID,
        CaptureDirectory: CAPTURE_DIR,
        IndexFileName: INDEX_FILE_NAME,
        MaxFileSizeMB: processingConfig.MaxFileSizeMB,
        MaxMessageSizeMB: processingConfig.MaxMessageSizeMB,
        PollIntervalMs: POLL_INTERVAL_MS,
        EventGapMs: EVENT_GAP_MS,
        EventQuietMs: EVENT_QUIET_MS,
        BetweenEventsMs: BETWEEN_EVENTS_MS,
        RetryDelayMs: RETRY_DELAY_MS
    };

    for(const [name, value] of Object.entries(requiredSettings)) {
        if(
            value === undefined ||
            value === null ||
            value === ""
        ) {
            logger.error(
                "Door camera: Missing configuration setting " + name + "."
            );
            return;
        }
    }

    if(
        typeof INDEX_FILE_NAME !== "string" ||
        typeof CHANNEL_ID !== "string" ||
        typeof CAPTURE_DIR !== "string" ||
        !Number.isFinite(MAX_FILE_SIZE) ||
        MAX_FILE_SIZE <= 0 ||
        !Number.isFinite(MAX_MESSAGE_SIZE) ||
        MAX_MESSAGE_SIZE <= 0 ||
        !Number.isInteger(POLL_INTERVAL_MS) ||
        POLL_INTERVAL_MS <= 0 ||
        !Number.isInteger(EVENT_GAP_MS) ||
        EVENT_GAP_MS < 0 ||
        !Number.isInteger(EVENT_QUIET_MS) ||
        EVENT_QUIET_MS < 0 ||
        !Number.isInteger(BETWEEN_EVENTS_MS) ||
        BETWEEN_EVENTS_MS < 0 ||
        !Number.isInteger(RETRY_DELAY_MS) ||
        RETRY_DELAY_MS <= 0
    ) {
        logger.error("Door camera: Invalid configuration values.");
        return;
    }

    // Persistent upload index
    const INDEX_FILE = path.join(
        CAPTURE_DIR,
        INDEX_FILE_NAME
    );

    const INDEX_TEMP_FILE = INDEX_FILE + ".tmp";

    let uploadIndex = {
        version: 1,
        uploads: {}
    };

    let processing = false;
    let lastEventSentAt = 0;

    // Tracks file stability between scans.
    const stability = new Map();

    // Tracks the next permitted retry time for failed events.
    const retryAfter = new Map();

    // Avoids repeating oversized-file warnings.
    const oversizedWarnings = new Set();

    function logInfo(message) {
        logger.info("Door camera: " + message);
    }

    function logWarn(message) {
        logger.warn("Door camera: " + message);
    }

    function logError(message) {
        logger.error("Door camera: " + message);
    }

    function sleep(ms) {
        return new Promise(function (resolve) {
            setTimeout(resolve, ms);
        });
    }

    function getRelativePath(filePath) {
        return path.relative(CAPTURE_DIR, filePath)
            .split(path.sep)
            .join("/");
    }

    function parseRecordingTimestamp(filename) {
        // MiBee filename format contains: _YYYYMMDD_HHMMSS_
        const match = filename.match(/_(\d{8})_(\d{6})_/);

        if(!match) {
            return null;
        }

        const datePart = match[1];
        const timePart = match[2];

        const year = Number(datePart.substring(0, 4));
        const month = Number(datePart.substring(4, 6)) - 1;
        const day = Number(datePart.substring(6, 8));

        const hour = Number(timePart.substring(0, 2));
        const minute = Number(timePart.substring(2, 4));
        const second = Number(timePart.substring(4, 6));

        return Date.UTC(
            year,
            month,
            day,
            hour,
            minute,
            second
        );
    }

    function makeEventId(timestamp) {
        const date = new Date(timestamp);

        return date.getUTCFullYear() + "-" +
            String(date.getUTCMonth() + 1).padStart(2, "0") + "-" +
            String(date.getUTCDate()).padStart(2, "0") + "_" +
            String(date.getUTCHours()).padStart(2, "0") + "-" +
            String(date.getUTCMinutes()).padStart(2, "0") + "-" +
            String(date.getUTCSeconds()).padStart(2, "0");
    }

    async function loadUploadIndex() {
        try {
            const contents = await fs.promises.readFile(
                INDEX_FILE,
                "utf8"
            );

            const parsed = JSON.parse(contents);

            if(!parsed ||
                parsed.version !== 1 ||
                !parsed.uploads ||
                typeof parsed.uploads !== "object" ||
                Array.isArray(parsed.uploads)
            ) {
                throw new Error("Unexpected index structure.");
            }

            uploadIndex = parsed;

            logInfo(
                "Loaded upload index containing " +
                Object.keys(uploadIndex.uploads).length +
                " successfully uploaded recording(s)."
            );
        } catch(error) {
            if(error.code === "ENOENT") {
                uploadIndex = {
                    version: 1,
                    uploads: {}
                };

                await saveUploadIndex();

                logInfo("Created a new persistent upload index.");
                return;
            }

            // Never silently reset an existing damaged index.
            throw new Error(
                "Cannot safely load upload index: " + error.message
            );
        }
    }

    async function saveUploadIndex() {
        const contents = JSON.stringify(uploadIndex, null, 2);

        await fs.promises.writeFile(
            INDEX_TEMP_FILE,
            contents, {
                encoding: "utf8",
                mode: 0o660
            }
        );

        await fs.promises.rename(
            INDEX_TEMP_FILE,
            INDEX_FILE
        );
    }

    async function scanCaptureDirectory() {
        const files = [];

        const entries = await fs.promises.readdir(
            CAPTURE_DIR, { withFileTypes: true }
        );

        for(const entry of entries) {
            if(!entry.isDirectory()) {
                continue;
            }

            const dateDirectory = path.join(
                CAPTURE_DIR,
                entry.name
            );

            const dateEntries = await fs.promises.readdir(
                dateDirectory, { withFileTypes: true }
            );

            for(const dateEntry of dateEntries) {
                if(!dateEntry.isFile() ||
                    !dateEntry.name.toLowerCase().endsWith(".mp4")
                ) {
                    continue;
                }

                const fullPath = path.join(
                    dateDirectory,
                    dateEntry.name
                );

                const relativePath = getRelativePath(fullPath);

                // Already successfully uploaded.
                if(uploadIndex.uploads[relativePath]) {
                    stability.delete(relativePath);
                    continue;
                }

                const stat = await fs.promises.stat(fullPath);

                const timestamp = parseRecordingTimestamp(
                    dateEntry.name
                );

                if(timestamp === null) {
                    logWarn(
                        "Cannot read recording timestamp from filename: " +
                        relativePath
                    );

                    continue;
                }

                const previous = stability.get(relativePath);

                const stable = Boolean(
                    previous &&
                    previous.size === stat.size &&
                    previous.mtimeMs === stat.mtimeMs
                );

                stability.set(relativePath, {
                    size: stat.size,
                    mtimeMs: stat.mtimeMs
                });

                files.push({
                    name: dateEntry.name,
                    fullPath: fullPath,
                    relativePath: relativePath,
                    timestamp: timestamp,
                    mtimeMs: stat.mtimeMs,
                    size: stat.size,
                    stable: stable
                });
            }
        }

        files.sort(function (a, b) {
            if(a.timestamp !== b.timestamp) {
                return a.timestamp - b.timestamp;
            }

            return a.name.localeCompare(b.name);
        });

        return files;
    }

    function groupFilesIntoEvents(files) {
        const events = [];
        let currentEvent = null;

        for(const file of files) {
            if(!currentEvent) {
                currentEvent = {
                    id: makeEventId(file.timestamp),
                    files: [file],
                    latestTimestamp: file.timestamp,
                    latestMtime: file.mtimeMs
                };

                continue;
            }

            const previousFile =
                currentEvent.files[currentEvent.files.length - 1];

            const gap = file.timestamp - previousFile.timestamp;

            if(gap <= EVENT_GAP_MS) {
                currentEvent.files.push(file);

                currentEvent.latestTimestamp = file.timestamp;

                if(file.mtimeMs > currentEvent.latestMtime) {
                    currentEvent.latestMtime = file.mtimeMs;
                }
            } else {
                events.push(currentEvent);

                currentEvent = {
                    id: makeEventId(file.timestamp),
                    files: [file],
                    latestTimestamp: file.timestamp,
                    latestMtime: file.mtimeMs
                };
            }
        }

        if(currentEvent) {
            events.push(currentEvent);
        }

        return events;
    }

    function splitEventIntoUploadChunks(files) {
        const chunks = [];
        let currentChunk = [];
        let currentSize = 0;

        for(const file of files) {
            if(file.size >= MAX_FILE_SIZE) {
                if(!oversizedWarnings.has(file.relativePath)) {
                    logError(
                        "Recording is at or above the configured file-size " +
                        "limit and was NOT uploaded or indexed: " +
                        file.relativePath
                    );

                    oversizedWarnings.add(file.relativePath);
                }

                continue;
            }

            if(file.size <= 0) {
                logError(
                    "Recording is empty and was not uploaded: " +
                    file.relativePath
                );

                continue;
            }

            if(
                currentChunk.length > 0 &&
                currentSize + file.size > MAX_MESSAGE_SIZE
            ) {
                chunks.push(currentChunk);

                currentChunk = [];
                currentSize = 0;
            }

            currentChunk.push(file);
            currentSize += file.size;
        }

        if(currentChunk.length > 0) {
            chunks.push(currentChunk);
        }

        return chunks;
    }

    async function getDestinationChannel() {
        const channel = await client.channels.fetch(CHANNEL_ID);

        if(!channel) {
            throw new Error(
                "Discord destination channel was not found: " + CHANNEL_ID
            );
        }

        if(typeof channel.send !== "function") {
            throw new Error(
                "Discord destination is not a sendable channel."
            );
        }

        if(
            GUILD_ID &&
            channel.guild &&
            channel.guild.id !== GUILD_ID
        ) {
            throw new Error(
                "Destination channel belongs to a different guild."
            );
        }

        return channel;
    }

    async function uploadEvent(event) {
        const chunks = splitEventIntoUploadChunks(event.files);

        if(chunks.length === 0) {
            logError(
                "Event " + event.id +
                " has no eligible files. Oversized or empty files remain unindexed."
            );

            return false;
        }

        const channel = await getDestinationChannel();

        for(let chunkIndex = 0; chunkIndex < chunks.length; chunkIndex++) {
            const chunk = chunks[chunkIndex];

            const attachments = chunk.map(function (file) {
                return {
                    attachment: file.fullPath,
                    name: file.name
                };
            });

            let content =
                "Door camera alert — " +
                event.files.length +
                " recording(s) captured around the door event.";

            if(chunks.length > 1) {
                content +=
                    " Part " + (chunkIndex + 1) +
                    " of " + chunks.length + ".";
            }

            // Discord must confirm the message before files are indexed.
            const message = await channel.send({
                content: content,
                files: attachments
            });

            const uploadedAt = new Date().toISOString();

            for(const file of chunk) {
                uploadIndex.uploads[file.relativePath] = {
                    filename: file.name,
                    uploadedAt: uploadedAt,
                    discordMessageId: message.id,
                    eventId: event.id
                };
            }

            // If saving fails after sending, the files remain unindexed.
            // They may be sent again after restart, which is preferable
            // to silently missing an alert.
            await saveUploadIndex();

            logInfo(
                "Uploaded " + chunk.length +
                " recording(s) for event " + event.id +
                ". Discord message: " + message.id
            );
        }

        return true;
    }

    async function processPendingEvents() {
        if(processing) {
            return;
        }

        processing = true;

        try {
            const files = await scanCaptureDirectory();

            if(files.length === 0) {
                return;
            }

            const events = groupFilesIntoEvents(files);

            for(const event of events) {
                // Wait until every file has a stable size and modification time.
                const allStable = event.files.every(function (file) {
                    return file.stable;
                });

                if(!allStable) {
                    continue;
                }

                // Wait until the latest file has been quiet long enough.
                const quietTime = Date.now() - event.latestMtime;

                if(quietTime < EVENT_QUIET_MS) {
                    continue;
                }

                // Respect retry delay after a failed event upload.
                const retryTime = retryAfter.get(event.id);

                if(retryTime && Date.now() < retryTime) {
                    continue;
                }

                // Enforce the minimum interval between separate events.
                const timeSinceLastEvent = Date.now() - lastEventSentAt;

                if(
                    lastEventSentAt > 0 &&
                    timeSinceLastEvent < BETWEEN_EVENTS_MS
                ) {
                    const remaining =
                        BETWEEN_EVENTS_MS - timeSinceLastEvent;

                    logInfo(
                        "Waiting " + Math.ceil(remaining / 1000) +
                        " seconds before the next event upload."
                    );

                    // Log once, then wait. No repeated countdown messages.
                    await sleep(remaining);
                }

                try {
                    const uploaded = await uploadEvent(event);

                    if(uploaded) {
                        lastEventSentAt = Date.now();
                        retryAfter.delete(event.id);
                    }
                } catch(error) {
                    retryAfter.set(
                        event.id,
                        Date.now() + RETRY_DELAY_MS
                    );

                    logError(
                        "Upload failed for event " + event.id +
                        ". Recordings remain unindexed. Retrying in " +
                        Math.ceil(RETRY_DELAY_MS / 1000) +
                        " seconds. Error: " + error.message
                    );

                    // Preserve chronological order; retry this event later.
                    break;
                }
            }
        } catch(error) {
            logError(
                "Directory scan or processing failed: " + error.message
            );
        } finally {
            processing = false;
        }
    }

    // Initialize the watcher and index.
    try {
        await fs.promises.access(
            CAPTURE_DIR,
            fs.constants.R_OK | fs.constants.W_OK
        );

        await loadUploadIndex();
    } catch(error) {
        logError(
            "Watcher was NOT started because its capture directory or " +
            "upload index is unavailable: " + error.message
        );

        return;
    }

    module.exports.started = true;

    logInfo(
        "Persistent watcher initialized. Checking all recordings, " +
        "including files left behind during bot outages."
    );

    // Recover pending recordings immediately after startup.
    await processPendingEvents();

    // Continue checking for new recordings.
    setInterval(function () {
        processPendingEvents();
    }, POLL_INTERVAL_MS);
};

module.exports.started = false;
