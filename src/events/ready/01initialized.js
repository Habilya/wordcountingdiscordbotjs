module.exports = (discordBot) => {
    try {
        discordBot.getLogger().info(`Logged in as ${discordBot.getClient().user.tag}!`);
    
        // TODO : Connect to the database
        // TODO : Get the message reactions from the database into local array
    
        discordBot.getClient().user.setActivity({
            name: discordBot.getConfig().BotActivityStatusName
        });
        
        discordBot.logInBot();
        
    } catch (error) {
        discordBot.getLogger().error(`Unhandled exception while initializing bot: ${error}\n${error.stack}`);
    }
};
