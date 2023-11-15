const { ApplicationCommandOptionType, PermissionFlagsBits } = require("discord.js");

const apiGetInaraMiningAnarchyLootSettlements = require('../../utils/apiGetInaraMiningAnarchyLootSettlements');
const groupAnarchyLootSettlements = require('../../utils/groupAnarchyLootSettlements');
const compareObjectArrayValues = require('../../utils/compareObjectArrayValues');

const TOP_SYSTEMS_DISPLAY_LIMIT = 10;

const cooldowns = new Set();
const COOLDOWN_TIME_MINUTES = 5;
const COOL_DOWN_NAME = 'findLootAnarchyMiningSystems';

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

            // have to use deferred reply, because the processing time is long...
            await interaction.deferReply();
            
            cooldowns.add(COOL_DOWN_NAME);
            setTimeout(() => {
                cooldowns.delete(COOL_DOWN_NAME);
            }, COOLDOWN_TIME_MINUTES * 60 * 1000);

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
