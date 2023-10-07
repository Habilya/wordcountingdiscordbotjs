
/*
const Discord = require('discord.js');
const createBotClient = require("../src/utils/createBotClient");
const ping = require("../src/commands/misc/ping").callback;

// a counter so that all the ids are unique
let count = 0;
let channelMessages = [];

const channel = {
  name: 'Test Channel',
  messages: {
    fetch: jest.fn().mockResolvedValue(channelMessages)
  },
  send: jest.fn(message => {
    message.react = jest.fn()
    return message
  })
};


class Guild extends Discord.Guild {
  constructor(client, channelMessages = []) {
    super(client, {
      // you don't need all of these but I just put them in to show you all the properties that Discord.js uses
      id: count++,
      name: '',
      icon: null,
      splash: null,
      owner_id: '',
      region: '',
      afk_channel_id: null,
      afk_timeout: 0,
      verification_level: 0,
      default_message_notifications: 0,
      explicit_content_filter: 0,
      roles: [],
      emojis: [],
      features: [],
      options: [],
      mfa_level: 0,
      application_id: null,
      system_channel_flags: 0,
      system_channel_id: null,
      widget_enabled: false,
      widget_channel_id: null,
      channels: [
          channel
      ]
    })
    this.client.guilds.cache.set(this.id, this)
  }
}

const client = createBotClient();
const guild = new Guild(client, channelMessages);

const user = {
  id: count++, 
  username: 'username', 
  discriminator: '1234'
};

const message = {
  reply: jest.fn(),
  content: 'ping',
  channel: channel,
  author: user,
  guild: guild,
};
*/

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
      expect(message.reply).toHaveBeenCalledWith("Pong NaNms");
      
    });
    
});
