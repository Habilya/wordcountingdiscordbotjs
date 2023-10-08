const config = require('../../../conf/config.json');
const areCommandsDifferent = require('../../utils/areCommandsDifferent');
const getApplicationCommands = require('../../utils/getApplicationCommands');
const getLocalCommands = require('../../utils/getLocalCommands');

module.exports = async(client) => {
    try {
        console.log("Initializing commands...");
        
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
                    console.log(`🗑 Deleted command "${name}".`);
                    continue;
                }

                if (areCommandsDifferent(existingCommand, localCommand)) {
                    await applicationCommands.edit(existingCommand.id, {
                        description,
                        options,
                    });

                    console.log(`🔁 Edited command "${name}".`);
                } else {
                    console.log(`Command: "${name}" unchanged.`);
                }
            } else {
                if (localCommand.isDeleted) {
                    console.log(
                        `⏩ Skipping registering command "${name}" as it's set to delete.`
                    );
                    continue;
                }

                await applicationCommands.create({
                    name,
                    description,
                    options,
                });

                console.log(`👍 Registered command "${name}."`);
            }
        }
    } catch (error) {
        console.log(`Unhandled exception while registering commands: ${error}\n${error.stack}`);
    }
};
