const getApplicationCommands = require('../../utils/getApplicationCommands');
const getLocalCommands = require('../../utils/getLocalCommands');
const processBotCommands = require('../../utils/processBotCommands');

module.exports = async(discordBot) => {
    try {
        discordBot.getLogger().info("Initializing commands...");
        
        const localCommands = getLocalCommands();
        const applicationCommands = await getApplicationCommands(
            discordBot.getClient(),
            discordBot.getConfig().GuildId
        );

        await processBotCommands(discordBot, localCommands, applicationCommands);

    } catch (error) {
        discordBot.getLogger().error(`Unhandled exception while registering commands: ${error}\n${error.stack}`);
    }
};
