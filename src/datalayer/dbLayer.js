const mongoose = require("mongoose");

module.exports = async (discordBot) => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(discordBot.getConfig().MongodbURI);
        discordBot.getLogger().info("Connected to db.");
        
    } catch (error) {
        discordBot.getLogger().error(`Unhandled exception while connecting to the database: ${error}\n${error.stack}`);
    }
};