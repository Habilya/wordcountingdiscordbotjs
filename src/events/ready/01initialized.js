module.exports = (discordBot) => {
    discordBot.getLogger().info(`Logged in as ${discordBot.getClient().user.tag}!`);

    discordBot.getClient().user.setActivity({
        name: discordBot.getConfig().BotActivityStatusName
    });
};
