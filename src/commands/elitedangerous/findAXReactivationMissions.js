const { ApplicationCommandOptionType, PermissionFlagsBits } = require("discord.js");
const { AsciiTable3, AlignmentEnum } = require('ascii-table3');

const apiGetDcohWatchAPIOverview = require('../../utils/apiGetDcohWatchAPIOverview');
const apiGetInaraMilitarySettlements = require('../../utils/apiGetInaraMilitarySettlements');

const THARGOID_INVASION_LEVEL_ALERT = 20;
const THARGOID_INVASION_LEVEL_INVASION = 30;
const RULE_LIGHT_YEARS_RADIUS_FOR_REACTIVATION_MISSIONS = 20;

const cooldowns = new Set();
const COOLDOWN_TIME_MINUTES = 5;
const COOL_DOWN_NAME = 'findAXReactivationMissions';

module.exports = {
    name: "findaxreactivationmissions",
    description: "This command will find systems that offer AX reactivation missions.",
    isDeleted: false,

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

            const overview = await apiGetDcohWatchAPIOverview();

            const filteredSystems = overview.systems.filter(x =>
                x.features.includes("ThargoidControlledReactivationMissions") &&
                (x.thargoidLevel.level == THARGOID_INVASION_LEVEL_ALERT || x.thargoidLevel.level == THARGOID_INVASION_LEVEL_INVASION)
            );

            const table = new AsciiTable3('AX Reactivation missions')
                .setHeading('System Name', 'Thargoid State', 'Titan', 'M. settlements')
                .setAlign(4, AlignmentEnum.CENTER)
                .setStyle('unicode-double');

            for(const system of filteredSystems) {

                let militarySettlementsCount = 0;

                try {
                    const systemsData = await apiGetInaraMilitarySettlements(system.name);
                    const filteredMatchingSettlements = systemsData.filter(x => parseFloat(x.Dist) < RULE_LIGHT_YEARS_RADIUS_FOR_REACTIVATION_MISSIONS);
                    militarySettlementsCount = filteredMatchingSettlements.length
                } catch(error) {
                    discordBot.getLogger().error(`Unhandled exception while getting nb military settleemnts: ${error}\n${error.stack}`);
                }

                table.addRow(system.name, system.thargoidLevel.name, system.maelstrom.name, militarySettlementsCount);
            }

            table.sortColumnDesc(4);

            interaction.editReply({
                content: '```' + table.toString() + '```',
            });

        } catch(error) {
            discordBot.getLogger().error(`Unhandled exception (find AX Reactivation Missions) while calling API: ${error}\n${error.stack}`);
            interaction.editReply({
                content: "Couldn't find anything."
            });
        }
    },
};
