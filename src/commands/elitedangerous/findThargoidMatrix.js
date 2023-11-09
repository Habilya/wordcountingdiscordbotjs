const {
    ApplicationCommandOptionType,
    PermissionFlagsBits,
    StringSelectMenuBuilder,
    StringSelectMenuOptionBuilder,
    ActionRowBuilder,
    ComponentType
} = require("discord.js");

const utilFindThargoidMatrix = require('../../utils/utilFindThargoidMatrix');

const COLLECTOR_TIME_OUT_MINUTES = 1;

module.exports = {
    name: "findthargoidmatrix",
    description: "This command will find systems containing thargoid matrices of different types",
    isDeleted: false,
    options: [],

    permissionsRequired: [PermissionFlagsBits.Administrator],

    callback: async(discordBot, interaction) => {
        try {

            //const titanName = interaction.options.get('titan-name').value;
            const allPossibleTitans = [
                'Cocijo',
                'Hadad',
                'Indra',
                'Leigong',
                'Oya',
                'Raijin',
                'Taranis',
                'Thor',
            ];

            const selectMenu = new StringSelectMenuBuilder()
                .setCustomId(interaction.id)
                .setPlaceholder('Select a titan:')
                .addOptions(allPossibleTitans.map((titan) => new StringSelectMenuOptionBuilder()
                    .setLabel(titan)
                    .setValue(titan)
                ));

            const actionRow = new ActionRowBuilder().addComponents(selectMenu);

            const reply = await interaction.reply({ components: [actionRow] });

            const collector = reply.createMessageComponentCollector({
                componentType: ComponentType.StringSelect,
                filter: (i) => i.user.id === interaction.user.id && i.customId === interaction.id,
                time: COLLECTOR_TIME_OUT_MINUTES * 60 * 1000,
            });

            collector.on('collect', async(interaction) => {
                if(!interaction.values.length) {
                    return;
                }

                const selectTitan = interaction.values[0];

                reply.edit({ components: [], content: `Selected titan: ${selectTitan}` });
                
                utilFindThargoidMatrix(interaction, selectTitan);
            });
        } catch(error) {
            discordBot.getLogger().error(`Unhandled exception (find AX Matrix) while calling API: ${error}\n${error.stack}`);
        }
    },
};
