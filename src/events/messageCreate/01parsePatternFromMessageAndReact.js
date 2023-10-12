module.exports = async (discordBot, message) => {
    try {
        
        if (!isValid()) return;
        
        // TODO: regexes should be stored in a list
        // TODO: add /regex-reaction-add command to add regex - emojii to a list
        // TODO: add /regex-reaction-list to list all the regexes
        // TODO: add /regex-reaction-delete to delete a regex from the list
        
        // TODO: keep statistics count per user
        
        // TODO: Integrate a dtatabase
        
        var regEx = new RegExp("(?:г[аоу]нк)|(?:g[aou]nk)", "i");
        
        if (regEx.test(message.content)) {
            message.react('<:heheboyyy:1038851949363200020>');
        }
        
        
        function isValid() {
            if (discordBot.getConfig().isReactionToUserMessagesEnabled) return false;
            if (!message.inGuild()) return false;
            if (message.author.bot) return false;
            if (message.author.system) return false;
            
            // assuming is valid
            return true;
        }
        
    } catch(error) {
        discordBot.getLogger().error(`Unhandled exception while parsing message to react: ${message} - ${error}\n${error.stack}`);
    }
};
