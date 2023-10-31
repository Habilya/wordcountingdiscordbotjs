const { Schema, model } = require('mongoose');

const messageReactionSchema = new Schema({
  messageReactionNickName: {
    type: String,
    required: true,
  },
  messagePattern: {
    type: String,
    required: true,
  },
  messagePatternFlags: {
    type: String,
    required: false,
  },
  reactionEmojiId: {
    type: String,
    required: true,
  },
},
{ 
  collection: 'MessageReactions'
});

module.exports = model('MessageReaction', messageReactionSchema);