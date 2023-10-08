const config = require('../../../conf/config.json');
const logger = require('../../logger/logger');

module.exports = (client) => {
    logger.info(`Logged in as ${client.user.tag}!`);

    client.user.setActivity({
        name: config.StatusActivityName
    });
};
