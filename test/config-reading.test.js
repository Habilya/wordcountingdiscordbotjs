
describe('.env reading test', () => {
    // Use .toEqual(); for objects by value comparison
    
    beforeEach(() => {
        require('dotenv').config({ path: 'conf/.test.env' });
    });
    
    
    it('can read .env TOKEN', () => {
        // Arrange
        
        // Act
        let expected = process.env.TOKEN;
        
        // Assert
        expect(expected).toBe('[YOUR_BOT_TOKEN_HERE]');
    });
    
    it('can read .env GUILD_ID', () => {
        // Arrange
        
        // Act
        let expected = process.env.GUILD_ID;
        
        // Assert
        expect(expected).toBe('[YOUR_DISCORD_SERVER_ID_HERE]');
    });
    
    it('can read .env CLIENT_ID', () => {
        // Arrange
        
        // Act
        let expected = process.env.CLIENT_ID;
        
        // Assert
        expect(expected).toBe('[YOUR_BOT_ID_HERE]');
    });
    
    it('can read .env STATUS_ACTIVITY_NAME', () => {
        // Arrange
        
        // Act
        let expected = process.env.STATUS_ACTIVITY_NAME;
        
        // Assert
        expect(expected).toBe('[YPUR_BOT_STATUS_ACTIVITY_NAME]');
    });
});
