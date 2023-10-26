const { ApplicationCommandOptionType, PermissionFlagsBits } = require("discord.js");
const apiGetDcohWatchAPIOverview = require('../../utils/apiGetDcohWatchAPIOverview');
const { AsciiTable3, AlignmentEnum } = require('ascii-table3');

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
        }
    ],

    permissionsRequired: [PermissionFlagsBits.Administrator],

    callback: async(discordBot, interaction) => {
        try {

            /*
            TODO add validation or list to select from
            
            Cocijo
            Hadad
            Indra
            Leigong
            Oya
            Raijin
            Taranis
            Thor 
            */

            const titanName = interaction.options.get('titan-name').value;

            // have to use deferred reply, because the processing time is long...
            await interaction.deferReply();
            
            apiGetDcohWatchAPIOverview(function (overview) {
                const filteredSystems = overview.systems.filter(x =>
                    x.maelstrom.name == titanName &&
                    (x.barnacleMatrixInSystem || x.thargoidSpireSiteInSystem));

                var table = new AsciiTable3('Thargoid matrices')
                    .setHeading('System Name', 'Matrix', 'Spires', 'Titan')
                    .setAlign(4, AlignmentEnum.CENTER)
                    .setStyle('unicode-double');

                for(const system of filteredSystems) {
                    table.addRow(system.name, system.barnacleMatrixInSystem, system.thargoidSpireSiteInSystem, system.maelstrom.name);
                }

                interaction.editReply({
                    content: '```' + table.toString() + '```',
                });
            });
        } catch(error) {
            discordBot.getLogger().error(`Unhandled exception (find AX Matrix) while calling API: ${error}\n${error.stack}`);
        }
    },
};
