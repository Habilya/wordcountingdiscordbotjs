const { ApplicationCommandOptionType, PermissionFlagsBits } = require("discord.js");

module.exports = {
    name: "ping",
    description: "Command and permission heartbeat.",
    isDeleted: false,
    /*
    options: [
        {
            name: "target-user",
            description: "user to execute command on",
            required: true,
            type: ApplicationCommandOptionType.Mentionable,
        },
        {
            name: "option-two",
            description: "user to execute command on",
            type: ApplicationCommandOptionType.String,
        },
    ],
    */
    permissionsRequired: [PermissionFlagsBits.Administrator],

    callback: (client, interaction) => {
        interaction.reply(`Pong ${client.ws.ping}ms`);
    },
};
