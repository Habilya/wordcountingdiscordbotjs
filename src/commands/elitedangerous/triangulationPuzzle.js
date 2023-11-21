const { ApplicationCommandOptionType, PermissionFlagsBits } = require("discord.js");
const apiGetsphereSystems = require('../../utils/apiGetsphereSystems');
const arrayFunctions = require('../../utils/arrayFunctions');

module.exports = {
    name: "triangulation-puzzle",
    description: "This command will find system in all 3 lists of 3 lookups with min and max L.y. radius.",
    isDeleted: false,
    options: [
        {
            name: 'system-name1',
            description: 'system-name1',
            type: ApplicationCommandOptionType.String,
            required: true,
        },
        {
            name: 'min-radius1',
            description: 'min-radius1',
            type: ApplicationCommandOptionType.Number,
            required: true,
        },
        {
            name: 'max-radius1',
            description: 'max-radius1',
            type: ApplicationCommandOptionType.Number,
            required: true,
        },
        {
            name: 'system-name2',
            description: 'system-name2',
            type: ApplicationCommandOptionType.String,
            required: true,
        },
        {
            name: 'min-radius2',
            description: 'min-radius2',
            type: ApplicationCommandOptionType.Number,
            required: true,
        },
        {
            name: 'max-radius2',
            description: 'max-radius2',
            type: ApplicationCommandOptionType.Number,
            required: true,
        },
        {
            name: 'system-name3',
            description: 'system-name3',
            type: ApplicationCommandOptionType.String,
            required: true,
        },
        {
            name: 'min-radius3',
            description: 'min-radius3',
            type: ApplicationCommandOptionType.Number,
            required: true,
        },
        {
            name: 'max-radius3',
            description: 'max-radius3',
            type: ApplicationCommandOptionType.Number,
            required: true,
        },
    ],

    permissionsRequired: [PermissionFlagsBits.Administrator],

    callback: async(discordBot, interaction) => {
        try {
            // have to use deferred reply, because the processing time is long...
            await interaction.deferReply();

            const SystemName1 = interaction.options.get('system-name1').value;
            const minRadius1 = interaction.options.get('min-radius1').value;
            const maxRadius1 = interaction.options.get('max-radius1').value;

            const SystemName2 = interaction.options.get('system-name2').value;
            const minRadius2 = interaction.options.get('min-radius2').value;
            const maxRadius2 = interaction.options.get('max-radius2').value;

            const SystemName3 = interaction.options.get('system-name3').value;
            const minRadius3 = interaction.options.get('min-radius3').value;
            const maxRadius3 = interaction.options.get('max-radius3').value;

            const firstSystemRadiusList = filterSystemsArray(await apiGetsphereSystems(SystemName1, maxRadius1, minRadius1));
            const secondSystemRadiusList = filterSystemsArray(await apiGetsphereSystems(SystemName2, maxRadius2, minRadius2));
            const thirdSystemRadiusList = filterSystemsArray(await apiGetsphereSystems(SystemName3, maxRadius3, minRadius3));

            interaction.editReply({
                content: '```' + arrayFunctions.intersectManyOneDimensionalArrays(firstSystemRadiusList, secondSystemRadiusList, thirdSystemRadiusList) + '```',
            });

        } catch(error) {
            discordBot.getLogger().error(`Unhandled exception (triangulation-puzzle command) while calling API: ${error}\n${error.stack}`);
            interaction.editReply({
                content: "Couldn't find anything."
            });
        }
    },
};

// Remove systems with 0 planets
// Select only systemName to be put into an array
const filterSystemsArray = (systemsArray) => {
    return systemsArray
        .filter(x => x.bodyCount > 0)
        .map(m => m.name);
};
