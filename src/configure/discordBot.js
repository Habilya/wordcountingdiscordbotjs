const dbLayer = require('../datalayer/dbLayer');
const MessageReaction = require("../models/messageReaction");
const UserMessageReaction = require("../models/userMessageReaction");

let config = require('../../conf/config.json');
let logger = require('../logger/logger');
let { Client, IntentsBitField } = require("discord.js");


let client;
let isValid;
let messageReactions;


exports.validateConfig = function() {
    if (true) {
        // TODO Add config validations logic here
        isValid = true;
    }
};

// Function Initializes the client property
exports.initDiscordBotClient = function() {
    client = new Client({
        intents: [
            IntentsBitField.Flags.Guilds,
            IntentsBitField.Flags.GuildMembers,
            IntentsBitField.Flags.GuildMessages,
            IntentsBitField.Flags.MessageContent,
        ],
    });
};

// Logs in bot in discord
exports.logInBot = function() {
    client.login(config.Token);
};

// Connect to the database
exports.dbConnect = async function() {
    await dbLayer(this);
};

// Populates the messageReactions from DB
exports.populateMessageReactions = async function() {
    if (config.isReactionToUserMessagesEnabled) {
        const messageReactions = await MessageReaction.find();
        this.setMessageReactions(messageReactions);
    }
};

// Log a user message reaction in the database
exports.logUserMessageReaction = function(userId, messageReactionNickName) {
    
    const newUserMessageReaction = new UserMessageReaction({
        messageReactionNickName: messageReactionNickName,
        userId: userId,
        reactionDate: Date.now(),
    });
    
    newUserMessageReaction.save().catch((error) => {
        logger.error(`Error saving new NewUserMessageReaction ${error}\n${error.stack}`);
        return;
    });
};


// Accessors
exports.getClient = function() {
    return client;
};

exports.setClient = function(value) {
    client = value;
};


exports.getLogger = function() {
    return logger;
};

exports.setLogger = function(value) {
    logger = value;
};


exports.getConfig = function() {
    return config;
};

exports.setConfig = function(value) {
    config = value;
};


exports.getIsValid = function() {
    return isValid;
};

exports.setIsValid = function(value) {
    isValid = value;
};



exports.getMessageReactions = function() {
    return messageReactions;
};

exports.setMessageReactions = function(value) {
    messageReactions = value;
};
