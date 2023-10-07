require('dotenv').config({ path: 'conf/.env' });
//TODO: const { clientId, guildId, token } = require('./config.json'); instead of process.env.TOKEN
const eventHandler = require("./handlers/eventHandler");
const createBotClient = require("./utils/createBotClient");

const client = createBotClient();

eventHandler(client);

client.login(process.env.TOKEN);
