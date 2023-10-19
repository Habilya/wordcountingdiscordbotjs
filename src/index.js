const discordBot = require("./configure/discordBot");
const eventHandler = require("./handlers/eventHandler");


discordBot.validateConfig();

if (!discordBot.getIsValid()) {
    discordBot.getLogger().warn("Bot configuration is invalid, initialization halted!");
    return;
}

discordBot.initDiscordBotClient();

eventHandler(discordBot);

// This function call should be at the end of this file and not moved, otherwise bot will not run
discordBot.logInBot();
