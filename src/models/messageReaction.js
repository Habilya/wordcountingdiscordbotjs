const { Schema, model } = require('mongoose');

const messageReactionSchema = new Schema({
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
});

module.exports = model('MessageReaction', messageReactionSchema);