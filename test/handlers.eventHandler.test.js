const discordBot = require("../src/configure/discordBot");
const eventHandler = require("../src/handlers/eventHandler");
    
    
describe('eventHandler.js tests', () => {
    
    discordBot.initDiscordBotClient();
    
    eventHandler(discordBot);
    
    
    it('_eventsCount Should Match', () => {
        // Arrange
        let expected = 4;
        
        // Act
        let actual = discordBot.getClient()._eventsCount;
        
        // Assert
        expect(actual).toBe(expected);
    });
    
    
    it('_events object Should have Initialized Events', () => {
        // Arrange
        let expected = {
            shardDisconnect: expect.any(Function),
            interactionCreate: expect.any(Function), // Command handler module should be initialized
            ready: expect.any(Function), // onReady module should be initialized
            messageCreate: expect.any(Function) // onReady module should be initialized
        };
        
        // Act
        let actual = discordBot.getClient()._events;
        
        // Assert
        expect(actual).toEqual(expected);
    });

});
