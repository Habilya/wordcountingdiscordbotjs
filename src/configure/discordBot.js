const dbLayer = require('../datalayer/dbLayer');
const stringFunctions = require('../utils/stringFunctions');
let logger = require('../logger/logger');
let { Client, GatewayIntentBits } = require("discord.js");

let config;
let client;
let isValid;
let messageReactions;


exports.initDiscordBotConfig = function (configPath = '../../conf/config.json') {
    config = require(configPath);
}


function validateStringInConfig(name) {
    return `Field ${name} must be configured in the conf/config.json file`;
}

exports.validateConfig = function () {
    // Initially valid...
    isValid = true;

    if(stringFunctions.stringIsNullOrEmpty(config.Token)) {
        isValid = false;
        logger.warning(validateStringInConfig('Token'));
    }

    if(stringFunctions.stringIsNullOrEmpty(config.GuildId)) {
        isValid = false;
        logger.warning(validateStringInConfig('GuildId'));
    }

    if(stringFunctions.stringIsNullOrEmpty(config.ClientId)) {
        isValid = false;
        logger.warning(validateStringInConfig('ClientId'));
    }

    if(config.isReactionToUserMessagesEnabled && stringFunctions.stringIsNullOrEmpty(config.ChromiumBrowserPath)) {
        isValid = false;
        logger.warning(`If isReactionToUserMessagesEnabled, ${validateStringInConfig('ChromiumBrowserPath')}`);
    }

    if(config.isReactionToUserMessagesEnabled && stringFunctions.stringIsNullOrEmpty(config.MongodbURI)) {
        isValid = false;
        logger.warning(`If isReactionToUserMessagesEnabled, ${validateStringInConfig('MongodbURI')}`);
    }

    if (config.isReactionToUserMessagesEnabled && stringFunctions.stringIsNullOrEmpty(config.ReactionsReportTemplateFolderFullPath)) {
        isValid = false;
        logger.warning(`If isReactionToUserMessagesEnabled, ${validateStringInConfig('ReactionsReportTemplateFolderFullPath')}`);
    }
};

// Function Initializes the client property
exports.initDiscordBotClient = function () {
    client = new Client({
        intents: [
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMembers,
            GatewayIntentBits.GuildMessages,
            GatewayIntentBits.MessageContent,
        ],
    });
};

// Logs in bot in discord
exports.logInBot = function () {
    client.login(config.Token);
};

// Connect to the database
exports.dbConnect = async function () {
    await dbLayer.initDBConnection(this);
};

// Populates the messageReactions from DB
exports.populateMessageReactions = async function () {
    if(config.isReactionToUserMessagesEnabled) {
        this.setMessageReactions(await dbLayer.getAllMessageReactions());
    }
};

// Log a user message reaction in the database
exports.logUserMessageReaction = function (userId, messageReactionNickName) {
    try {
        dbLayer.logUserMessageReaction(userId, messageReactionNickName);
    } catch(error) {
        logger.error(`Error saving new NewUserMessageReaction ${error}\n${error.stack}`);
        return;
    }
};


// Accessors
exports.getClient = function () {
    return client;
};

exports.setClient = function (value) {
    client = value;
};


exports.getLogger = function () {
    return logger;
};

exports.setLogger = function (value) {
    logger = value;
};


exports.getConfig = function () {
    return config;
};

exports.setConfig = function (value) {
    config = value;
};


exports.getIsValid = function () {
    return isValid;
};

exports.setIsValid = function (value) {
    isValid = value;
};



exports.getMessageReactions = function () {
    return messageReactions;
};

exports.setMessageReactions = function (value) {
    messageReactions = value;
};
