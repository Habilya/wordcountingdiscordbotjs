const { ApplicationCommandOptionType, PermissionFlagsBits } = require("discord.js");

module.exports = {
    name: "ping",
    description: "Command and permission heartbeat.",
    isDeleted: false,

    permissionsRequired: [PermissionFlagsBits.Administrator],

    callback: (discordBot, interaction) => {
        interaction.reply("Pong");
    },
};
