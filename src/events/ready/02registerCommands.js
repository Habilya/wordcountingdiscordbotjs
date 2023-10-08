const config = require('../../../conf/config.json');
const areCommandsDifferent = require('../../utils/areCommandsDifferent');
const getApplicationCommands = require('../../utils/getApplicationCommands');
const getLocalCommands = require('../../utils/getLocalCommands');
const logger = require('../../logger/logger');

module.exports = async(client) => {
    try {
        logger.info("Initializing commands...");
        
        const localCommands = getLocalCommands();
        const applicationCommands = await getApplicationCommands(
            client,
            config.GuildId
        );

        for (const localCommand of localCommands) {
            const { name, description, options } = localCommand;

            const existingCommand = await applicationCommands.cache.find(
                (cmd) => cmd.name === name
            );

            if (existingCommand) {
                if (localCommand.isDeleted) {
                    await applicationCommands.delete(existingCommand.id);
                    logger.info(`🗑 Deleted command "${name}".`);
                    continue;
                }

                if (areCommandsDifferent(existingCommand, localCommand)) {
                    await applicationCommands.edit(existingCommand.id, {
                        description,
                        options,
                    });

                    logger.info(`🔁 Edited command "${name}".`);
                } else {
                    logger.info(`Command: "${name}" unchanged.`);
                }
            } else {
                if (localCommand.isDeleted) {
                    logger.info(
                        `⏩ Skipping registering command "${name}" as it's set to delete.`
                    );
                    continue;
                }

                await applicationCommands.create({
                    name,
                    description,
                    options,
                });

                logger.info(`👍 Registered command "${name}."`);
            }
        }
    } catch (error) {
        logger.error(`Unhandled exception while registering commands: ${error}`, error);
    }
};
