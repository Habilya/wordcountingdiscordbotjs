const { ApplicationCommandOptionType, PermissionFlagsBits } = require("discord.js");
const dcohWatchAPIOverview = require('../../utils/dcohWatchAPIOverview');
const { AsciiTable3, AlignmentEnum } = require('ascii-table3');

module.exports = {
    name: "findaxreactivationmissions",
    description: "This command will find systems that offer AX reactivation missions.",
    isDeleted: false,

    permissionsRequired: [PermissionFlagsBits.Administrator],

    callback: async(discordBot, interaction) => {

        try {
            // have to use deferred reply, because the processing time is long...
            await interaction.deferReply();

            dcohWatchAPIOverview(function (overview) {
                const filteredSystems = overview.systems.filter(x =>
                    x.features.includes("ThargoidControlledReactivationMissions") &&
                    (x.thargoidLevel.level == 20 || x.thargoidLevel.level == 30)
                );

                var table = new AsciiTable3('AX Reactivation missions')
                    .setHeading('System Name', 'Thargoid State', 'Titan')
                    .setAlign(3, AlignmentEnum.CENTER)
                    .setStyle('unicode-double');

                for(const system of filteredSystems) {
                    table.addRow(system.name, system.thargoidLevel.name, system.maelstrom.name);
                }

                interaction.editReply({
                    content: '```' + table.toString() + '```',
                });
            });
        } catch(error) {
            discordBot.getLogger().error(`Unhandled exception (find AX Reactivation Missions) while calling API: ${error}\n${error.stack}`);
        }
    },
};
