
describe('.env reading test', () => {
    // Use .toEqual(); for objects by value comparison
    const config = require('../conf/config.test.json');
    
    beforeEach(() => {
        // Use to clear the results structures before each test
    });
    
    
    it('can read config.json TOKEN', () => {
        // Arrange
        let expected = "[YOUR_BOT_TOKEN_HERE]";
        
        // Act
        let actual = config.Token;
        
        // Assert
        expect(actual).toBe(expected);
    });
    
    it('can read config.json GUILD_ID', () => {
        // Arrange
        let expected = "[YOUR_DISCORD_SERVER_ID_HERE]";
        
        // Act
        let actual = config.GuildId;
        
        // Assert
        expect(actual).toBe(expected);
    });
    
    it('can read config.json CLIENT_ID', () => {
        // Arrange
        let expected = "[YOUR_BOT_ID_HERE]";
        
        // Act
        let actual = config.ClientId;
        
        // Assert
        expect(actual).toBe(expected);
    });
    
    it('can read config.json STATUS_ACTIVITY_NAME', () => {
        // Arrange
        let expected = "[YPUR_BOT_STATUS_ACTIVITY_NAME]";
        
        // Act
        let actual = config.StatusActivityName;
        
        // Assert
        expect(actual).toBe(expected);
    });
    
});
