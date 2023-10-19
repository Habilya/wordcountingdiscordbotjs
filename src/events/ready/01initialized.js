module.exports = async (discordBot) => {
    try {
        discordBot.getLogger().info(`Logged in as ${discordBot.getClient().user.tag}!`);
        
        discordBot.getClient().user.setActivity({
            name: discordBot.getConfig().BotActivityStatusName
        });
    
        // Connect to the database
        await discordBot.dbConnect();
        
        // Populates the messageReactions from DB
        await discordBot.populateMessageReactions();
        
        
    } catch (error) {
        discordBot.getLogger().error(`Unhandled exception while initializing bot: ${error}\n${error.stack}`);
    }
};
