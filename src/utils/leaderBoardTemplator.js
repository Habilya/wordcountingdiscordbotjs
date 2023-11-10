const fs = require("fs");

let ladderboard_template = '';
let ladderboard_li_template = '';

exports.initTemplates = function () {
    // Read the template into a variable
    ladderboard_template = fs.readFileSync('./assets/templates/ladderboard_template.html');
    ladderboard_li_template = fs.readFileSync('./assets/templates/ladderboard_li_template.html');
};

exports.GenerateLeaderBoardLine = (targetUserObj, leaderBoardLine) => {
    // Users can have multiple ways to configure their NickName
    const displayName = `${targetUserObj.nickname ?? targetUserObj.user.globalName ?? targetUserObj.user.username}`;

    return ladderboard_li_template
        .toString()
        .replace('{{avatar_url}}', targetUserObj.user.displayAvatarURL({ size: 256 }))
        .replace('{{display_name}}', `${displayName} (${targetUserObj.user.tag})`)
        .replace('{{display_score}}', leaderBoardLine.messageReactionCount);
};

exports.GenerateLeaderBoard = (reactionNickName, ladderboard_li) => {
    return ladderboard_template
        .toString()
        .replace('{{pattern_nickname}}', reactionNickName)
        .replace('{{leaderboard}}', ladderboard_li);
};
