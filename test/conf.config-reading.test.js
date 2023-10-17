
describe('config.json reading test', () => {
    // Use .toEqual(); for objects by value comparison
    const config = require('../conf/config.test.json');
    
    beforeEach(() => {
        // Use to clear the results structures before each test
    });
    
    
    it('can read config.json Token', () => {
        // Arrange
        let expected = "[YOUR_BOT_TOKEN_HERE]";
        
        // Act
        let actual = config.Token;
        
        // Assert
        expect(actual).toBe(expected);
    });
    
    it('can read config.json GuildId', () => {
        // Arrange
        let expected = "[YOUR_DISCORD_SERVER_ID_HERE]";
        
        // Act
        let actual = config.GuildId;
        
        // Assert
        expect(actual).toBe(expected);
    });
    
    it('can read config.json ClientId', () => {
        // Arrange
        let expected = "[YOUR_BOT_ID_HERE]";
        
        // Act
        let actual = config.ClientId;
        
        // Assert
        expect(actual).toBe(expected);
    });
    
    it('can read config.json BotActivityStatusName', () => {
        // Arrange
        let expected = "[YOUR_BOT_STATUS_ACTIVITY_NAME]";
        
        // Act
        let actual = config.BotActivityStatusName;
        
        // Assert
        expect(actual).toBe(expected);
    });
    
    it('can read config.json isReactionToUserMessagesEnabled', () => {
        // Arrange
        let expected = true;
        
        // Act
        let actual = config.isReactionToUserMessagesEnabled;
        
        // Assert
        expect(actual).toBe(expected);
    });
    
    it('can read config.json MongodbURI', () => {
        // Arrange
        let expected = "[YOUR_MONGODB_URI_HERE]";
        
        // Act
        let actual = config.MongodbURI;
        
        // Assert
        expect(actual).toBe(expected);
    });
    
});
