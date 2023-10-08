const createBotClient = require("../src/utils/createBotClient");
const ping = require("../src/commands/misc/ping").callback;


describe('Command ping.js tests', () => {

    it('Command /ping reply Should Match', async () => {
      
      // Arrange
      const client = createBotClient();
      const message = {
        reply: jest.fn(),
        content: 'ping'
      };
            
      // Act
      await ping(client, message);
      
      // Assert
      expect(message.reply).toHaveBeenCalledWith("Pong");
      
    });
    
});
