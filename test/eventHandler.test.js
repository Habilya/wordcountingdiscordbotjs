
describe('eventHandler.js tests', () => {

    require('dotenv').config({ path: 'conf/.test.env' });
    const createBotClient = require("../src/utils/createBotClient");
    const eventHandler = require("../src/handlers/eventHandler");
    
    const client = createBotClient();
    eventHandler(client);
    
    beforeEach(() => {
        // Use to clear the results structures before each test
        //jest.clearAllMocks();
    });
    
    
    it('_eventsCount Should Match', () => {
        // Arrange
        let expected = 3;
        
        // Act
        let actual = client._eventsCount;
        
        // Assert
        expect(actual).toBe(expected);
    });
    
    
    it('_events object Should have Initialized Events', () => {
        // Arrange
        let expected = {
            shardDisconnect: expect.any(Function),
            interactionCreate: expect.any(Function), // Command handler module should be initialized
            ready: expect.any(Function) // onReady module should be initialized 
        };
        
        // Act
        let actual = client._events;
        
        // Assert
        expect(actual).toEqual(expected);
    });

});
