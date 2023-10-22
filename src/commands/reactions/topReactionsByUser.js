const { ApplicationCommandOptionType, PermissionFlagsBits, AttachmentBuilder } = require("discord.js");
const dbLayer = require('../../datalayer/dbLayer');
const nodeHtmlToImage = require('node-html-to-image')
const fs = require("fs");

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
            interaction.reply({
                content: 'ok! Wait, I will send the info in a new message.',
                ephemeral: true
            });
            
            const ladderboard_li_template = fs.readFileSync('./assets/templates/ladderboard_li_template.html');
            
            let queryResult = await dbLayer.getTopUsersReactionsByReactionName("gank", 5);
            
            
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
                .replace('{{pattern_nickname}}', 'gank')
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
            interaction.channel.send({
                files: [attachLeaderBoardAsImmage]
            });
        } catch (error) {
            discordBot.getLogger().error(`unhandled error while preparing reactions leadderboard: ${error}\n${error.stack}`);
        }
    },
};