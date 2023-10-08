const config = require('../../../conf/config.json');

module.exports = (client) => {
    console.log(`Logged in as ${client.user.tag}!`);

    client.user.setActivity({
        name: config.StatusActivityName
    });
};
