const { ApplicationCommandOptionType, PermissionFlagsBits, AttachmentBuilder } = require("discord.js");
const dbLayer = require('../../datalayer/dbLayer');
const nodeHtmlToImage = require('node-html-to-image')
const fs = require("fs");
const cooldowns = new Set();
const COOLDOWN_TIME_MINUTES = 2;

module.exports = {
    name: "topreactionsbyuser",
    description: "displays top users by count of reactions, available to all users.",
    isDeleted: false,
    options: [
        {
            name: 'reaction-name',
            description: 'The NickName of reaction to get the top of users from.',
            type: ApplicationCommandOptionType.String,
            required: true,
        }
    ],

    permissionsRequired: [],

    callback: async(discordBot, interaction) => {
        try {

            const reactionNickName = interaction.options.get('reaction-name').value;

            if(cooldowns.has(reactionNickName)) {
                interaction.reply({
                    content: `Whoa, reaction: ${reactionNickName} was recently used, there is a cooldown of (${COOLDOWN_TIME_MINUTES}) minute(s).`,
                    ephemeral: true
                });
                return;
            }

            // have to use deferred reply, because the processing time is long...
            await interaction.deferReply();

            // initiate a cooldown for that command and that reaction nickname
            cooldowns.add(reactionNickName);
            setTimeout(() => {
                cooldowns.delete(reactionNickName);
            }, COOLDOWN_TIME_MINUTES * 60 * 1000);

            // db call to get the query results
            let topUsersReactionsByReactionName = await dbLayer.getTopUsersReactionsByReactionName(reactionNickName, 5);

            if(topUsersReactionsByReactionName.length === 0) {
                await interaction.editReply({
                    content: `Couldn't find any results for the reaction NickName: ${reactionNickName}`,
                });
                return;
            }

            const ladderboard_li_template = fs.readFileSync('./assets/templates/ladderboard_li_template.html');
            let ladderboard_li = '';
            for(const leaderBoardLine of topUsersReactionsByReactionName) {
                // find user within the server, to retrieve their nickname, avatar, etc.
                let targetUserObj;

                try {
                    targetUserObj = await interaction.guild.members.fetch(leaderBoardLine._id);
                } catch(error) {
                    // most likely user left the server...
                    continue;
                }

                if(targetUserObj && targetUserObj.user) {

                    ladderboard_li += ladderboard_li_template
                        .toString()
                        .replace('{{avatar_url}}', targetUserObj.user.displayAvatarURL({ size: 256 }))
                        .replace('{{display_name}}', `${targetUserObj.nickname ?? targetUserObj.user.globalName} (${targetUserObj.user.tag})`)
                        .replace('{{display_score}}', leaderBoardLine.messageReactionCount);
                }
            }

            const ladderboard_template = fs.readFileSync('./assets/templates/ladderboard_template.html')
                .toString()
                .replace('{{pattern_nickname}}', reactionNickName)
                .replace('{{leaderboard}}', ladderboard_li);

            const image = await nodeHtmlToImage({
                html: ladderboard_template,
                quality: 100,
                type: 'jpeg',
                puppeteerArgs: {
                    args: ['--no-sandbox'],
                    executablePath: '/usr/bin/chromium-browser',
                },
                encoding: 'buffer',
            });

            let attachLeaderBoardAsImmage = new AttachmentBuilder(image).setName('leaderboard.jpg');

            // !!ATTENTION!! you cannot use files attachmements and a text message 
            // (only the text message will be visible!! (attachments will be just ignored))
            await interaction.editReply({
                files: [attachLeaderBoardAsImmage]
            });
        } catch(error) {
            discordBot.getLogger().error(`unhandled error while preparing reactions leadderboard: ${error}\n${error.stack}`);
        }
    },
};
