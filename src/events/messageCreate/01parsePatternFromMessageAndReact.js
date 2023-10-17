module.exports = async (discordBot, message) => {
    try {
        
        if (!isValid()) return;
        
        // TODO: add /regex-reaction-add command to add regex - emojii to a list
        // TODO: add /regex-reaction-list to list all the regexes
        // TODO: add /regex-reaction-delete to delete a regex from the list
        
        // TODO: keep statistics count per user
        
        for (const messageReaction of discordBot.getMessageReactions()) {
            var regEx = new RegExp(messageReaction.messagePattern, messageReaction.messagePatternFlags);
        
            if (regEx.test(message.content)) {
                message.react(messageReaction.reactionEmojiId);
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
