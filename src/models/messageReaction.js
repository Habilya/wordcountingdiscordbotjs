const { Schema, model } = require('mongoose');

const messageReactionSchema = new Schema({
  messageReactionId: {
    type: Number,
    required: true,
  },
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
});

module.exports = model('MessageReaction', messageReactionSchema);