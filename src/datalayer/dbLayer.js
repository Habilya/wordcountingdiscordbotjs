const MessageReaction = require("../models/messageReaction");
const UserMessageReaction = require("../models/userMessageReaction");

let mongoose = require("mongoose");


exports.setMongoose = function(value) {
    mongoose = value;
};

exports.getMongoose = function() {
    return mongoose;
};

exports.initDBConnection = async function(discordBot) {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(discordBot.getConfig().MongodbURI);
        discordBot.getLogger().info("Connected to db.");
        
    } catch (error) {
        discordBot.getLogger().error(`Unhandled exception while connecting to the database: ${error}\n${error.stack}`);
    }
};


exports.getAllMessageReactions = async function() {
    return await MessageReaction.find();
};


exports.logUserMessageReaction = function(userId, messageReactionNickName) {
    const newUserMessageReaction = new UserMessageReaction({
        messageReactionNickName: messageReactionNickName,
        userId: userId,
        reactionDate: Date.now(),
    });
    
    newUserMessageReaction.save();
};


exports.getTopUsersReactionsByReactionName = async function(reactionNickName, topDisplayLimit) {

    const pipeline = [
        {
            $match: {
                messageReactionNickName: reactionNickName,
            },
        },
        {
            $group: {
                _id: "$userId",
                messageReactionCount: { $sum: 1,},
            },
        },
        {
            $sort: { messageReactionCount: -1, },
        },
        { $limit: topDisplayLimit, }
    ];
    // Execute the aggregation
    return await UserMessageReaction.aggregate(pipeline);
};
