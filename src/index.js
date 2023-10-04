require('dotenv').config({ path: 'conf/.env' });
const { Client, IntentsBitField } = require("discord.js");

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
});

client.on("ready", (c) => {
    console.log(`Logged in as ${c.user.tag}!`)
});

client.on("messageCreate", (message) => {
    // Validations
    if (message.author.bot) {
        return;
    }
    
    if (message.content === "ping") {
        message.reply("pong")
    }
});

client.login(process.env.TOKEN);