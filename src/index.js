const config = require('../conf/config.json');
const eventHandler = require("./handlers/eventHandler");
const createBotClient = require("./utils/createBotClient");

const client = createBotClient();

eventHandler(client);

client.login(config.Token);
