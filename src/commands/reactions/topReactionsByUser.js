const {
    ApplicationCommandOptionType,
    PermissionFlagsBits,
    AttachmentBuilder,
    StringSelectMenuBuilder,
    StringSelectMenuOptionBuilder,
    ActionRowBuilder,
    ComponentType
} = require("discord.js");

const dbLayer = require('../../datalayer/dbLayer');
const htmlToJpeg = require('../../utils/htmlToJpeg');
const leaderBoardTemplator = require('../../utils/leaderBoardTemplator');

const QUERY_SELECT_LIMIT = 20;
const LEADERBOARD_DISPLAY_LIMIT = 5;

const cooldowns = new Set();
const COOLDOWN_TIME_MINUTES = 5;
const COLLECTOR_TIME_OUT_MINUTES = 1;
const REACTION_COOL_DOWN = 'topreactionsbyuser';


module.exports = {
    name: "topreactionsbyuser",
    description: "displays top users by count of reactions.",
    isDeleted: false,
    options: [],

    permissionsRequired: [PermissionFlagsBits.ViewChannel],

    callback: async(discordBot, interaction) => {
        try {
            if(cooldowns.has(REACTION_COOL_DOWN)) {
                interaction.reply({
                    content: `Whoa, This function was recently used, there is a cooldown of (${COOLDOWN_TIME_MINUTES}) minute(s).`,
                    ephemeral: true
                });
                return;
            }

            const allPossibleReactions = discordBot.getMessageReactions();

            if(allPossibleReactions.length <= 0) {
                interaction.reply({
                    content: `Looks like there are no reactions configured...`,
                    ephemeral: true
                });
                return;
            }

            // initiate a cooldown for that command and that reaction nickname
            cooldowns.add(REACTION_COOL_DOWN);
            setTimeout(() => {
                cooldowns.delete(REACTION_COOL_DOWN);
            }, COOLDOWN_TIME_MINUTES * 60 * 1000);

            const selectMenu = new StringSelectMenuBuilder()
                .setCustomId(interaction.id)
                .setPlaceholder('Select a reaction:')
                .addOptions(allPossibleReactions.map((reaction) => new StringSelectMenuOptionBuilder()
                    .setLabel(reaction.messageReactionNickName)
                    .setDescription(`${reaction.messagePattern} ${reaction.messagePatternFlags}`)
                    .setValue(reaction.messageReactionNickName)
                    .setEmoji(reaction.reactionEmojiId)
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

                const foundReaction = allPossibleReactions.filter(x => x.messageReactionNickName === interaction.values[0]);

                if(!foundReaction.length) {
                    return;
                }

                const selectReaction = foundReaction[0];

                reply.edit({ components: [], content: `${selectReaction.reactionEmojiId} **${selectReaction.messageReactionNickName}**  (${selectReaction.messagePattern} ${selectReaction.messagePatternFlags})` });

                // have to use deferred reply, because the processing time is long...
                await interaction.deferReply();

                // db call to get the query results
                let topUsersReactionsByReactionName = await dbLayer.getTopUsersReactionsByReactionName(selectReaction.messageReactionNickName, QUERY_SELECT_LIMIT);

                if(topUsersReactionsByReactionName.length === 0) {
                    interaction.editReply({
                        content: `Couldn't find any results for the reaction NickName: ${selectReaction.messageReactionNickName}`,
                    });
                    return;
                }

                // Read the templates
                leaderBoardTemplator.initTemplates(discordBot.getConfig().ReactionsReportTemplateFolderFullPath);

                const generatedLadderboard_li = await leaderBoardTemplator.PrepareLeaderBoardTable(interaction, topUsersReactionsByReactionName, LEADERBOARD_DISPLAY_LIMIT);

                const generatedLadderboard = leaderBoardTemplator.GenerateLeaderBoard(selectReaction.messageReactionNickName, generatedLadderboard_li);
                
                htmlToJpeg.initChromiumBrowserExecutablePath(discordBot.getConfig().ChromiumBrowserPath);
                const image = await htmlToJpeg.transformHTMLToJPEG(generatedLadderboard);

                let attachLeaderBoardAsImmage = new AttachmentBuilder(image).setName('leaderboard.jpg');

                // !!ATTENTION!! you cannot use files attachmements and a text message 
                // (only the text message will be visible!! (attachments will be just ignored))
                interaction.editReply({
                    files: [attachLeaderBoardAsImmage]
                });
            });
        } catch(error) {
            discordBot.getLogger().error(`unhandled error while preparing reactions leadderboard: ${error}\n${error.stack}`);
            interaction.editReply({
                content: "Couldn't find anything."
            });
        }
    },
};
