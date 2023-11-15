const { ApplicationCommandOptionType, PermissionFlagsBits, EmbedBuilder } = require("discord.js");
const packagejson = require('../../../package.json');

module.exports = {
    name: "help",
    description: "Displays help about bot.",
    isDeleted: false,

    permissionsRequired: [PermissionFlagsBits.ViewChannel],

    callback: (discordBot, interaction) => {
        const discordBotGitHubURL = 'https://github.com/Habilya/wordcountingdiscordbotjs/tree/master';
        const discordBotAvatarURL = 'https://cdn.discordapp.com/avatars/1159241989804544030/e6eba078fd6d9b1b9976e4ad6a4d1c9e.webp';

        const helpEmbed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle(packagejson.name)
            .setURL(discordBotGitHubURL)
            .setAuthor({ name: 'WordCountingBot', iconURL: discordBotAvatarURL, url: discordBotGitHubURL })
            .setThumbnail(discordBotAvatarURL)
            .addFields({
                name: 'Ver.',
                value: packagejson.version
            }, {
                name: 'Description',
                value: packagejson.description
            }, {
                name: '/help',
                value: 'Prints this message'
            }, {
                name: '/topreactionsbyuser reaction-name:[REACTION_NAME]',
                value: 'Ex: /topreactionsbyuser reaction-name:gank  Prints report with top user that triggered this reaction'
            }, {
                name: '/findaxreactivationmissions',
                value: 'Prints System giving AX reactivation missions'
            }, {
                name: '/findthargoidmatrix titan-name:[TITAN_NAME]',
                value: 'Ex: /findthargoidmatrix titan-name:Taranis Prints System with thargoid matrix and spires'
            }, {
                name: '/triangulation-puzzle (A lot of arguments)',
                value: 'Ex: /triangulation-puzzle system-name1:col 359 sector QJ-V c17-7 min-radius1:45 max-radius1:47 system-name2:hip 83788 min-radius2:39 max-radius2:41 system-name3:Col 359 sector ZQ-R c19-7 min-radius3:37 max-radius3:39 Prints Systems triangulated'
            }, {
                name: '/find-loot-systems system-name:[SYSTEM_NAME]',
                value: 'Ex: /find-loot-systems system-name:Sol Prints systems with number of (possibly) lootable settlements and last updated times'
            }, {
                name: '/find-loot-settlements system-name:[SYSTEM_NAME]',
                value: 'Ex: /find-loot-settlements system-name:Sol Prints (possibly) lootable settlements in that system with distance from star'
            },);

        interaction.reply({
            embeds: [helpEmbed],
            ephemeral: true
        });
    },
};
