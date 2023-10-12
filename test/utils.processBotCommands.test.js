const config = require('../conf/config.test.json');
const discordBot = require("../src/configure/discordBot");

const processBotCommands = require("../src/utils/processBotCommands");


discordBot.setConfig(config);
discordBot.initDiscordBotClient();


describe('processBotCommands.js tests', () => {

    it('existingCommand locally Deleted should be deleted & logged', async() => {
        // Arrange
        discordBot.setLogger({
            info: jest.fn(),
            error: jest.fn(),
            warning: jest.fn()
        });
        
        
        let localCommands = [
          {
            name: 'ping',
            description: 'Command and permission heartbeat.',
            options: [],
            isDeleted: true,
            permissionsRequired: [ 1 ],
            callback: jest.fn()
          }
        ];
        
        let applicationCommands = {
        	cache: [{
        	  id: 111,
        	  description: 'Command and permission heartbeat.',
        	  options: [],
        	  name: "ping",
        	}],
        	delete: jest.fn(),
        	edit: jest.fn(),
        	create: jest.fn(),
        };
        
        // Act
        await processBotCommands(discordBot, localCommands, applicationCommands);

        // Assert
        expect(applicationCommands.create).not.toHaveBeenCalled();
        expect(applicationCommands.edit).not.toHaveBeenCalled();
        expect(applicationCommands.delete).toHaveBeenCalledWith(111);
        
        expect(discordBot.getLogger().error).not.toHaveBeenCalled();
        expect(discordBot.getLogger().warning).not.toHaveBeenCalled();
        expect(discordBot.getLogger().info).toHaveBeenCalledWith('🗑 Deleted command "ping".');
    });

    it('existingCommand locally updated description should be edited & logged', async() => {
        // Arrange
        discordBot.setLogger({
            info: jest.fn(),
            error: jest.fn(),
            warning: jest.fn()
        });
        
        
        let localCommands = [
          {
            name: 'ping',
            description: 'Command and permission heartbeataaaaaa.',
            options: [],
            isDeleted: false,
            permissionsRequired: [ 1 ],
            callback: jest.fn()
          }
        ];
        
        let applicationCommands = {
        	cache: [{
        	  id: 111,
        	  description: 'Command and permission heartbeat.',
        	  options: [],
        	  name: "ping",
        	}],
        	delete: jest.fn(),
        	edit: jest.fn(),
        	create: jest.fn(),
        };
        
        // Act
        await processBotCommands(discordBot, localCommands, applicationCommands);

        // Assert
        expect(applicationCommands.create).not.toHaveBeenCalled();
        expect(applicationCommands.delete).not.toHaveBeenCalled();
        expect(applicationCommands.edit).toHaveBeenCalledWith(111, {"description": "Command and permission heartbeataaaaaa.", "options": []});
        
        expect(discordBot.getLogger().error).not.toHaveBeenCalled();
        expect(discordBot.getLogger().warning).not.toHaveBeenCalled();
        expect(discordBot.getLogger().info).toHaveBeenCalledWith('🔁 Edited command "ping".');
    });
    
    it('Not existingCommand locally marked Deleted should be logged', async() => {
        // Arrange
        discordBot.setLogger({
            info: jest.fn(),
            error: jest.fn(),
            warning: jest.fn()
        });
        
        
        let localCommands = [
          {
            name: 'ping',
            description: 'Command and permission heartbeat.',
            options: [],
            isDeleted: true,
            permissionsRequired: [ 1 ],
            callback: jest.fn()
          }
        ];
        
        let applicationCommands = {
        	cache: [{
        	  id: 1,
        	  name: "",
        	}],
        	delete: jest.fn(),
        	edit: jest.fn(),
        	create: jest.fn(),
        };
        
        // Act
        await processBotCommands(discordBot, localCommands, applicationCommands);

        // Assert
        expect(applicationCommands.delete).not.toHaveBeenCalled();
        expect(applicationCommands.edit).not.toHaveBeenCalled();
        expect(applicationCommands.create).not.toHaveBeenCalled();
        
        expect(discordBot.getLogger().error).not.toHaveBeenCalled();
        expect(discordBot.getLogger().warning).not.toHaveBeenCalled();
        expect(discordBot.getLogger().info).toHaveBeenCalledWith('⏩ Skipping registering command "ping" as it\'s set to delete.');
    });

    it('Not existingCommand should be created & logged', async() => {
        // Arrange
        discordBot.setLogger({
            info: jest.fn(),
            error: jest.fn(),
            warning: jest.fn()
        });
        
        
        let localCommands = [
          {
            name: 'ping',
            description: 'Command and permission heartbeat.',
            options: [],
            isDeleted: false,
            permissionsRequired: [ 1 ],
            callback: jest.fn()
          }
        ];
        
        let applicationCommands = {
        	cache: [{
        	  id: 1,
        	  name: "",
        	}],
        	delete: jest.fn(),
        	edit: jest.fn(),
        	create: jest.fn(),
        };
        
        // Act
        await processBotCommands(discordBot, localCommands, applicationCommands);

        // Assert
        expect(applicationCommands.delete).not.toHaveBeenCalled();
        expect(applicationCommands.edit).not.toHaveBeenCalled();
        expect(applicationCommands.create).toHaveBeenCalledWith({"description": "Command and permission heartbeat.", "name": "ping", "options": []});
        
        expect(discordBot.getLogger().error).not.toHaveBeenCalled();
        expect(discordBot.getLogger().warning).not.toHaveBeenCalled();
        expect(discordBot.getLogger().info).toHaveBeenCalledWith('👍 Registered command "ping".');
    });

});
