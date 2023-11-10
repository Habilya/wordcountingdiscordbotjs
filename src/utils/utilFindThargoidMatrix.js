const apiGetDcohWatchAPIOverview = require('./apiGetDcohWatchAPIOverview');
const { AsciiTable3, AlignmentEnum } = require('ascii-table3');

module.exports = async(interaction, selectTitan) => {

    // have to use deferred reply, because the processing time is long...
    await interaction.deferReply();

    const overview = await apiGetDcohWatchAPIOverview();

    const filteredSystems = overview.systems.filter(x =>
        x.maelstrom.name == selectTitan &&
        (x.barnacleMatrixInSystem || x.thargoidSpireSiteInSystem));

    const table = new AsciiTable3('Thargoid matrices')
        .setHeading('System Name', 'Matrix', 'Spires', 'Titan')
        .setAlign(4, AlignmentEnum.CENTER)
        .setStyle('unicode-double');

    for(const system of filteredSystems) {
        table.addRow(`${system.name} (${system.thargoidSpireSiteBody})`, system.barnacleMatrixInSystem, system.thargoidSpireSiteInSystem, system.maelstrom.name);
    }

    interaction.editReply({
        content: '```' + table.toString() + '```',
    });
};
