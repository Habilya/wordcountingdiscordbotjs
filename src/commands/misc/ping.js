const { ApplicationCommandOptionType, PermissionFlagsBits } = require("discord.js");
const packagejson = require('../../../package.json');

module.exports = {
    name: "ping",
    description: "Command and permission heartbeat.",
    isDeleted: false,

    permissionsRequired: [PermissionFlagsBits.Administrator],

    callback: (discordBot, interaction) => {
        interaction.reply({
            content: `v${packagejson.version}`,
            ephemeral: true
        });
    },
};
