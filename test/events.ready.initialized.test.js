const discordBot = require("../src/configure/discordBot");
const initializedEvent = require("../src/events/ready/01initialized");
const config = require('../conf/config.test.json');

describe('01initialized.js tests', () => {

    // global arrange
    discordBot.setConfig(config);
    discordBot.initDiscordBotClient();
    discordBot.getClient().user = {
        id: 999,
        tag: "[Discord_Tag]",
        setActivity: jest.fn()
    };
    discordBot.setLogger({
        info: jest.fn(),
        error: jest.fn(),
        warning: jest.fn()
    });
    discordBot.validateConfig();
    discordBot.logInBot = jest.fn();
    discordBot.dbConnect = jest.fn();
    discordBot.populateMessageReactions = jest.fn();

    initializedEvent(discordBot);


    it('discordBot.client.user object Should have Initialized activity status', () => {
        // Arrange
        const expected = {
            name: "[YOUR_BOT_STATUS_ACTIVITY_NAME]"
        };

        // Act

        // Assert
        expect(discordBot.getClient().user.setActivity).toHaveBeenCalledWith(expected);
    });


    it('discordBot.logger.info Should have been called to log info', () => {
        // Arrange
        const expected = "Logged in as [Discord_Tag]!";

        // Act

        // Assert
        expect(discordBot.getLogger().info).toHaveBeenCalledWith(expected);
    });
    
    
    it('discordBot.logger.warning Should have been called to log validations', () => {
        // Arrange

        // Act

        // Assert
        expect(discordBot.getLogger().warning.mock.calls).toHaveLength(0);
    });


    it('discordBot.dbConnect() Should have been called once', () => {
        // Arrange

        // Act

        // Assert
        expect(discordBot.dbConnect.mock.calls).toHaveLength(1);
    });


    it('discordBot.populateMessageReactions() Should have been called once', () => {
        // Arrange

        // Act

        // Assert
        expect(discordBot.populateMessageReactions.mock.calls).toHaveLength(1);
    });


});
