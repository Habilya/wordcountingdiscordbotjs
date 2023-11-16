const {
    ApplicationCommandOptionType,
    PermissionFlagsBits
} = require("discord.js");

const utilFindThargoidMatrix = require('../../utils/utilFindThargoidMatrix');

const cooldowns = new Set();
const COOLDOWN_TIME_MINUTES = 5;
const COOL_DOWN_NAME = 'findThargoidMatrix';

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

    permissionsRequired: [PermissionFlagsBits.ViewChannel],

    callback: async(discordBot, interaction) => {
        try {
            if(cooldowns.has(COOL_DOWN_NAME)) {
                interaction.reply({
                    content: `Whoa, This function was recently used, there is a cooldown of (${COOLDOWN_TIME_MINUTES}) minute(s).`,
                    ephemeral: true
                });
                return;
            }

            const titanName = interaction.options.get('titan-name').value;
            
            cooldowns.add(COOL_DOWN_NAME);
            setTimeout(() => {
                cooldowns.delete(COOL_DOWN_NAME);
            }, COOLDOWN_TIME_MINUTES * 60 * 1000);

            utilFindThargoidMatrix(interaction, titanName);

        } catch(error) {
            discordBot.getLogger().error(`Unhandled exception (find AX Matrix) while calling API: ${error}\n${error.stack}`);
            interaction.editReply({
                content: "Couldn't find anything."
            });
        }
    },
};
