module.exports = (discordBot, message) => {
    try {
        
        if (!isValid()) return;
        
        for (const messageReaction of discordBot.getMessageReactions()) {
            const regEx = new RegExp(messageReaction.messagePattern, messageReaction.messagePatternFlags);
        
            if (regEx.test(message.content)) {
                message.react(messageReaction.reactionEmojiId);
                
                // Async call to db (not awaited)
                discordBot.logUserMessageReaction(message.author.id, messageReaction.messageReactionNickName);
                
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
