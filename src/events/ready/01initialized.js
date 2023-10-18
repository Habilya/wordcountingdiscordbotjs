const dbLayer = require('../../datalayer/dbLayer');

module.exports = (discordBot) => {
    try {
        discordBot.getLogger().info(`Logged in as ${discordBot.getClient().user.tag}!`);
    
        // Connect to the database
        dbLayer(discordBot);
        
        // TODO : Get the message reactions from the database into local array
    
        discordBot.getClient().user.setActivity({
            name: discordBot.getConfig().BotActivityStatusName
        });
        
    } catch (error) {
        discordBot.getLogger().error(`Unhandled exception while initializing bot: ${error}\n${error.stack}`);
    }
};
