const discordBot = require("../src/configure/discordBot");
const ping = require("../src/commands/misc/ping").callback;


describe('Command ping.js tests', () => {

    it('Command /ping reply Should Match', async () => {
      
      // Arrange
      discordBot.initDiscordBotClient();
      const message = {
        reply: jest.fn(),
        content: 'ping'
      };
      
      const expected = {
          content: 'pong',
          ephemeral: true
      };
      
            
      // Act
      await ping(discordBot.client, message);
      
      // Assert
      expect(message.reply).toHaveBeenCalledWith(expected);
      
    });
    
});
