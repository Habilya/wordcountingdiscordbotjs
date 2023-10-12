let config = require('../../conf/config.json');
let logger = require('../logger/logger');
let { Client, IntentsBitField } = require("discord.js");

let client;
let isValid;


exports.validateConfig = function() {
    if (true) {
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
