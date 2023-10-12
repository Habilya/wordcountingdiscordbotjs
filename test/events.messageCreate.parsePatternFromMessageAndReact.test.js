const discordBot = require("../src/configure/discordBot");
const parsePatternFromMessageAndReact = require("../src/events/messageCreate/01parsePatternFromMessageAndReact");
const config = require('../conf/config.test.json');

describe('01parsePatternFromMessageAndReact.js tests', () => {
    
    beforeEach(() => {
        // Use to clear the results structures before each test
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
    });
    
    
    it('test message should not react', () => {
        // Arrange
        const messageText = "This is a non triggering test message";
        
        let message = {
            content: messageText,
            author: {
                bot: false,
                system: false
            },
            inGuild: jest.fn().mockReturnValue(true),
            react: jest.fn()
        };
        discordBot.getConfig().isReactionToUserMessagesEnabled = true;
        
        // Act
        parsePatternFromMessageAndReact(discordBot,message);
        
        // Assert
        expect(message.react.mock.calls).toHaveLength(0);
    });
    
    it('matching message but author bot NO react', () => {
        // Arrange
        const messageText = "gankers are bad";
        
        let message = {
            content: messageText,
            author: {
                bot: true,
                system: false
            },
            inGuild: jest.fn().mockReturnValue(true),
            react: jest.fn()
        };
        discordBot.getConfig().isReactionToUserMessagesEnabled = true;
        
        // Act
        parsePatternFromMessageAndReact(discordBot, message);
        
        // Assert
        expect(message.react.mock.calls).toHaveLength(0);
    });
    
    it('matching message but author system NO react', () => {
        // Arrange
        const messageText = "gankers are bad";
        
        let message = {
            content: messageText,
            author: {
                bot: false,
                system: true
            },
            inGuild: jest.fn().mockReturnValue(true),
            react: jest.fn()
        };
        discordBot.getConfig().isReactionToUserMessagesEnabled = true;
        
        // Act
        parsePatternFromMessageAndReact(discordBot, message);
        
        // Assert
        expect(message.react.mock.calls).toHaveLength(0);
    });
    
    it('matching message but reactions disabled NO react', () => {
        // Arrange
        const messageText = "gankers are bad";
        
        let message = {
            content: messageText,
            author: {
                bot: false,
                system: false
            },
            inGuild: jest.fn().mockReturnValue(true),
            react: jest.fn()
        };
        discordBot.getConfig().isReactionToUserMessagesEnabled = false;
        
        // Act
        parsePatternFromMessageAndReact(discordBot, message);
        
        // Assert
        expect(message.react.mock.calls).toHaveLength(0);
    });
    
    it('matching message but not in Guild NO react', () => {
        // Arrange
        const messageText = "gankers are bad";
        
        let message = {
            content: messageText,
            author: {
                bot: false,
                system: false
            },
            inGuild: jest.fn().mockReturnValue(false),
            react: jest.fn()
        };
        discordBot.getConfig().isReactionToUserMessagesEnabled = true;
        
        // Act
        parsePatternFromMessageAndReact(discordBot, message);
        
        // Assert
        expect(message.react.mock.calls).toHaveLength(0);
    });
    
    it('matching message should react', () => {
        // Arrange
        const messageText = "gankers are bad";

        const expected = "<:heheboyyy:1038851949363200020>";
        
        let message = {
            content: messageText,
            author: {
                bot: false,
                system: false
            },
            inGuild: jest.fn().mockReturnValue(true),
            react: jest.fn()
        };
        discordBot.getConfig().isReactionToUserMessagesEnabled = true;
        
        // Act
        parsePatternFromMessageAndReact(discordBot, message);
        
        // Assert
        expect(message.react.mock.calls).toHaveLength(1);
        expect(message.react).toHaveBeenCalledWith(expected);
    });
    
});
