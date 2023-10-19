const { Schema, model } = require('mongoose');

const userMessageReactionSchema = new Schema({
  messageReactionNickName: {
    type: String,
    required: true,
  },
  userId: {
    type: Number,
    required: true,
  },
  reactionDate: {
    type: Date,
    required: true,
  },
},
{ 
  collection: 'UserMessageReactions'
});

module.exports = model('UserMessageReaction', userMessageReactionSchema);