const areCommandsDifferent = require('../utils/areCommandsDifferent');

module.exports = async(discordBot, localCommands, applicationCommands) => {
    for (const localCommand of localCommands) {
        const { name, description, options } = localCommand;

        const existingCommand = await applicationCommands.cache.find(
            (cmd) => cmd.name === name
        );

        if (existingCommand) {
            if (localCommand.isDeleted) {
                await applicationCommands.delete(existingCommand.id);
                discordBot.getLogger().info(`🗑 Deleted command "${name}".`);
                continue;
            }

            if (areCommandsDifferent(existingCommand, localCommand)) {
                await applicationCommands.edit(existingCommand.id, {
                    description,
                    options,
                });

                discordBot.getLogger().info(`🔁 Edited command "${name}".`);
            } else {
                discordBot.getLogger().info(`Command: "${name}" unchanged.`);
            }
        } else {
            if (localCommand.isDeleted) {
                discordBot.getLogger().info(
                    `⏩ Skipping registering command "${name}" as it's set to delete.`
                );
                continue;
            }

            await applicationCommands.create({
                name,
                description,
                options,
            });

            discordBot.getLogger().info(`👍 Registered command "${name}".`);
        }
    }
};