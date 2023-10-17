const discordBot = require("./configure/discordBot");
const eventHandler = require("./handlers/eventHandler");


discordBot.validateConfig();

if (!discordBot.getIsValid()) {
    discordBot.getLogger().warning("Bot configuration is invalid, initialization halted!");
    return;
}

discordBot.initDiscordBotClient();

eventHandler(discordBot);
