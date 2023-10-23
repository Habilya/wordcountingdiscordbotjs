const { ApplicationCommandOptionType, PermissionFlagsBits, AttachmentBuilder } = require("discord.js");
const dbLayer = require('../../datalayer/dbLayer');
const nodeHtmlToImage = require('node-html-to-image')
const fs = require("fs");
const cooldowns = new Set();
const COOLDOWN_TIME_MINUTES = 2;

module.exports = {
    name: "topreactionsbyuser",
    description: "displays top users by count of reactions.",
    isDeleted: false,
    options: [
        {
            name: 'reaction-name',
            description: 'The NickName of reaction to get the top of users from.',
            type: ApplicationCommandOptionType.String,
            required: true,
        }
    ],

    permissionsRequired: [PermissionFlagsBits.ViewChannel],

    callback: async (discordBot, interaction) => {
        try {
            
            const reactionNickName = interaction.options.get('reaction-name').value;
            
            if (reactionNickName === null || typeof reactionNickName !== "string" || typeof reactionNickName === "string" && reactionNickName.length === 0) {
                interaction.reply({
                    content: `Uhm, reaction-name:${reactionNickName} invalid parameter.`,
                    ephemeral: true
                });
                return;
            }
            
            if (cooldowns.has(reactionNickName)) {
                interaction.reply({
                    content: `Whoa, reaction: ${reactionNickName} was recently used, there is a cooldown.`,
                    ephemeral: true
                });
                return;
            }
            
            await interaction.deferReply();

            cooldowns.add(reactionNickName);
            setTimeout(() => {
                cooldowns.delete(reactionNickName);
            }, COOLDOWN_TIME_MINUTES * 60 * 1000);
            
            const ladderboard_li_template = fs.readFileSync('./assets/templates/ladderboard_li_template.html');
            
            let queryResult = await dbLayer.getTopUsersReactionsByReactionName(reactionNickName, 5);
            
            if (queryResult.length === 0) {
                await interaction.editReply({
                    content: `Couldn't find any results for the reaction NickName: ${reactionNickName}`,
                });
                return;
            }
            
            let ladderboard_li = '';
            for (const leaderBoardLine of queryResult) {
                const targetUserObj = await interaction.guild.members.fetch(leaderBoardLine._id);
                
                if (targetUserObj.user) {
                    ladderboard_li += ladderboard_li_template
                    .toString()
                    .replace('{{avatar_url}}', targetUserObj.user.displayAvatarURL({ size: 256 }))
                    .replace('{{display_name}}', `${targetUserObj.nickname} (${targetUserObj.user.tag})`)
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
            
            let attachLeaderBoardAsImmage = new AttachmentBuilder(image).setName('test.jpg');
            
            // !!ATTENTION!! you cannot use files attachmements and a text message 
            // (only the text message will be visible!! (attachments will be just ignored))
            await interaction.editReply({
                files: [attachLeaderBoardAsImmage]
            });
        } catch (error) {
            discordBot.getLogger().error(`unhandled error while preparing reactions leadderboard: ${error}\n${error.stack}`);
        }
    },
};