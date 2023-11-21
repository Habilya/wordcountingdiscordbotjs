const discordBot = require("../src/configure/discordBot");

describe('01initialized.js tests', () => {

    afterEach(() => {
        jest.clearAllMocks();
    });


    // global arrange
    discordBot.setLogger({
        info: jest.fn(),
        error: jest.fn(),
        warning: jest.fn()
    });


    it('discordBot.logger.warning Should have been called to log validations (Empty config)', () => {
        // Arrange
        const config = {};
        discordBot.setConfig(config);

        // Act
        discordBot.validateConfig();

        // Assert
        expect(discordBot.getLogger().warning.mock.calls).toHaveLength(3);
        expect(discordBot.getLogger().warning.mock.calls).toEqual([
            ["Field Token must be configured in the conf/config.json file"],
            ["Field GuildId must be configured in the conf/config.json file"],
            ["Field ClientId must be configured in the conf/config.json file"]
        ]);
    });

    it('discordBot.logger.warning Should have been called to log validations (Empty config)', () => {
        // Arrange
        const config = {
            "isReactionToUserMessagesEnabled": true,
        };
        discordBot.setConfig(config);

        // Act
        discordBot.validateConfig();

        // Assert
        expect(discordBot.getLogger().warning.mock.calls).toHaveLength(5);
        expect(discordBot.getLogger().warning.mock.calls).toEqual([
            ["Field Token must be configured in the conf/config.json file"],
            ["Field GuildId must be configured in the conf/config.json file"],
            ["Field ClientId must be configured in the conf/config.json file"],
            ["If isReactionToUserMessagesEnabled, Field ChromiumBrowserPath must be configured in the conf/config.json file"],
            ["If isReactionToUserMessagesEnabled, Field MongodbURI must be configured in the conf/config.json file"]
        ]);
    });

});
