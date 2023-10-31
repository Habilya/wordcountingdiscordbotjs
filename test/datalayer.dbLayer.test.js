const config = require('../conf/config.test.json');
const discordBot = require("../src/configure/discordBot");
const dbLayer = require("../src/datalayer/dbLayer");


describe('db integration (dbLayer.js) tests', () => {
  
    discordBot.setConfig(config);
    discordBot.setLogger({
        info: jest.fn(),
        error: jest.fn(),
        warning: jest.fn()
    });
    
    dbLayer.setMongoose({
      set: jest.fn(),
      connect: jest.fn()
    });
    
    dbLayer.getTopUsersReactionsByReactionName = jest.fn();


    it('initDBConnection mongoose connect call Should Match', async () => {
      
      // Arrange
            
      // Act
      await dbLayer.initDBConnection(discordBot);
      
      // Assert
      expect(dbLayer.getMongoose().connect).toHaveBeenCalledWith("[YOUR_MONGODB_URI_HERE]");
      
    });


    it('initDBConnection logger calls Should Match', async () => {
      
      // Arrange
            
      // Act
      await dbLayer.initDBConnection(discordBot);
      
      // Assert
      expect(discordBot.getLogger().info).toHaveBeenCalledWith("Connected to db.");
      
    });
    
    
    it('getTopUsersReactionsByReactionName calls Should Match', async () => {
      
      // Arrange
            
      // Act
      await dbLayer.getTopUsersReactionsByReactionName("test");
      
      // Assert
      expect(dbLayer.getTopUsersReactionsByReactionName).toHaveBeenCalledWith("test");
      
    });
    
});
