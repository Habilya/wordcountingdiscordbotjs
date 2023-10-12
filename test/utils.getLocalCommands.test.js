
describe('getLocalCommands.js tests', () => {

    const getLocalCommands = require("../src/utils/getLocalCommands");
    
    
    it('getLocalCommands Should Match', () => {
        // Arrange
        let expected = [
          {
            name: 'ping',
            description: 'Command and permission heartbeat.',
            isDeleted: false,
            permissionsRequired: [ 8n ],
            callback: expect.any(Function)
          }
        ];
        
        // Act
        let actual = getLocalCommands();
        
        // Assert
        expect(actual).toEqual(expected);
    });

});
