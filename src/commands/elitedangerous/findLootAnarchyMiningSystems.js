const { ApplicationCommandOptionType, PermissionFlagsBits } = require("discord.js");

const apiGetInaraMiningAnarchyLootSettlements = require('../../utils/apiGetInaraMiningAnarchyLootSettlements');
const groupAnarchyLootSettlements = require('../../utils/groupAnarchyLootSettlements');
const compareObjectArrayValues = require('../../utils/compareObjectArrayValues');

const TOP_SYSTEMS_DISPLAY_LIMIT = 10;

module.exports = {
    name: "find-loot-systems",
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

            const groupedSystemsByNbSettlements = groupAnarchyLootSettlements(overview);

            const sortedSystemsByNbSettlements = groupedSystemsByNbSettlements.sort(compareObjectArrayValues('nbSettlements', 'desc'));

            let outputMessage = '';
            for(const system of sortedSystemsByNbSettlements.slice([0], [TOP_SYSTEMS_DISPLAY_LIMIT])) {
                outputMessage += `${system.system} (${system.nbSettlements}) (${system.lastUpdated})\n`;
            }

            interaction.editReply({
                content: '```' + outputMessage + '```',
            });

        } catch(error) {
            discordBot.getLogger().error(`Unhandled exception (find AX Reactivation Missions) while calling API: ${error}\n${error.stack}`);
        }
    },
};
