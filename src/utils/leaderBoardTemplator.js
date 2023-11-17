const fs = require("fs");

let ladderboard_template = '';
let ladderboard_li_template = '';


function initTemplates() {
    // Read the template into a variable
    ladderboard_template = fs.readFileSync('./assets/templates/ladderboard_template.html');
    ladderboard_li_template = fs.readFileSync('./assets/templates/ladderboard_li_template.html');
}

async function GetDiscordMemberByIdFromDiscordInteraction(discordInteraction, userId) {
    return await discordInteraction.guild.members.fetch(userId);
}

async function PrepareLeaderBoardTable(discordInteraction, usersReactionsQueryResult, displayLimit = 5) {

    let linesCount = 0;
    let generatedLadderboard_li = '';

    for(const queryResult of usersReactionsQueryResult) {
        try {
        // find user within the server, to retrieve their nickname, avatar, etc.
        const targetUserObj = await GetDiscordMemberByIdFromDiscordInteraction(discordInteraction, queryResult._id);

        if(targetUserObj && targetUserObj.user) {
            const avatarURL = targetUserObj.user.displayAvatarURL({ size: 256 });
            // Users can have multiple ways to configure their NickName
            const userDisplayName = `${targetUserObj.nickname ?? targetUserObj.user.globalName ?? targetUserObj.user.username}`;
            const userAdditionalInformation = targetUserObj.user.tag;
            const messageReactionCount = queryResult.messageReactionCount;

            generatedLadderboard_li += GenerateLeaderBoardLine(avatarURL, userDisplayName, userAdditionalInformation, messageReactionCount);
            linesCount++;
        }

        if(linesCount >= displayLimit) {
            break;
        }

        } catch(error) {
        // most likely user left the server...
        continue;
        }
    }

    return generatedLadderboard_li;
}

function GenerateLeaderBoardLine(avatarURL, userDisplayName, userAdditionalInformation, messageReactionCount) {

    return ladderboard_li_template
        .toString()
        .replace('{{avatar_url}}', avatarURL)
        .replace('{{display_name}}', `${userDisplayName} (${userAdditionalInformation})`)
        .replace('{{display_score}}', messageReactionCount);
}

function GenerateLeaderBoard(reactionNickName, ladderboard_li) {
    return ladderboard_template
        .toString()
        .replace('{{pattern_nickname}}', reactionNickName)
        .replace('{{leaderboard}}', ladderboard_li);
}


exports.initTemplates = initTemplates;
exports.PrepareLeaderBoardTable = PrepareLeaderBoardTable;
exports.GenerateLeaderBoardLine = GenerateLeaderBoardLine;
exports.GenerateLeaderBoard = GenerateLeaderBoard;
