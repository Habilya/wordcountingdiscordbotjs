module.exports = async (discordBot, message) => {
    try {
        
        if (!isValid()) return;
        
        for (const messageReaction of discordBot.getMessageReactions()) {
            var regEx = new RegExp(messageReaction.messagePattern, messageReaction.messagePatternFlags);
        
            if (regEx.test(message.content)) {
                message.react(messageReaction.reactionEmojiId);
                
                // TODO : log in the DB the user id and reaction to what pattern
                
                // React only once per message, even if it contains multiple "matches"
                return;
            }
        }
        
        
        function isValid() {
            if (!discordBot.getConfig().isReactionToUserMessagesEnabled) return false;
            if (!Array.isArray(discordBot.getMessageReactions())) return false;
            if (!discordBot.getMessageReactions().length) return false;
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
