const { ApplicationCommandOptionType, PermissionFlagsBits } = require("discord.js");

const apiGetInaraMiningAnarchyLootSettlements = require('../../utils/apiGetInaraMiningAnarchyLootSettlements');

module.exports = {
    name: "find-loot-settlements",
    description: "Will find systems that have Anarchy Extraction settlements in big numbers near your system.",
    isDeleted: false,
    options: [
        {
            name: 'system-name',
            description: 'system-name',
            type: ApplicationCommandOptionType.String,
            required: true,
        },
    ],

    permissionsRequired: [PermissionFlagsBits.Administrator],

    callback: async(discordBot, interaction) => {

        try {
            // have to use deferred reply, because the processing time is long...
            await interaction.deferReply();

            const systemName = interaction.options.get('system-name').value;

            const overview = await apiGetInaraMiningAnarchyLootSettlements(systemName);

            const groupedSettlements = overview.filter(x => x.Dist === '0');

            let outputMessage = '';
            if(groupedSettlements.length) {
                outputMessage = `System: ${systemName} Last updated: ${groupedSettlements[0].Updated}\n`;
            }

            for(const settlement of groupedSettlements) {
                outputMessage += `${settlement.Station} (${settlement.StationDistance})\n`;
            }

            interaction.editReply({
                content: '```' + outputMessage + '```',
            });

        } catch(error) {
            discordBot.getLogger().error(`Unhandled exception (find AX Reactivation Missions) while calling API: ${error}\n${error.stack}`);
        }
    },
};
