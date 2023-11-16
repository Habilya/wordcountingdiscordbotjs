const {
    ApplicationCommandOptionType,
    PermissionFlagsBits
} = require("discord.js");

const utilFindThargoidMatrix = require('../../utils/utilFindThargoidMatrix');

module.exports = {
    name: "findthargoidmatrix",
    description: "This command will find systems containing thargoid matrices of different types",
    isDeleted: false,
    options: [
        {
            name: 'titan-name',
            description: 'The name of a thargoid titan.',
            type: ApplicationCommandOptionType.String,
            required: true,
            choices: [
                {
                    name: 'Cocijo',
                    value: 'Cocijo',
                },
                {
                    name: 'Hadad',
                    value: 'Hadad',
                },
                {
                    name: 'Indra',
                    value: 'Indra'
                },
                {
                    name: 'Leigong',
                    value: 'Leigong',
                },
                {
                    name: 'Oya',
                    value: 'Oya',
                },
                {
                    name: 'Raijin',
                    value: 'Raijin',
                },
                {
                    name: 'Taranis',
                    value: 'Taranis',
                },
                {
                    name: 'Thor',
                    value: 'Thor',
                },
            ],
        }
    ],

    permissionsRequired: [PermissionFlagsBits.Administrator],

    callback: async(discordBot, interaction) => {
        try {

            const titanName = interaction.options.get('titan-name').value;

            utilFindThargoidMatrix(interaction, titanName);

        } catch(error) {
            discordBot.getLogger().error(`Unhandled exception (find AX Matrix) while calling API: ${error}\n${error.stack}`);
            interaction.editReply({
                content: "Couldn't find anything."
            });
        }
    },
};
