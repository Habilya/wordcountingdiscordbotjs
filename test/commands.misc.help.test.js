const discordBot = require("../src/configure/discordBot");
const help = require("../src/commands/misc/help").callback;


describe('Command help.js tests', () => {

  it('Command /help reply Should Match', async() => {

    // Arrange
    discordBot.initDiscordBotClient();
    const message = {
      reply: jest.fn(),
      content: 'help'
    };

    const expected = {
      embeds: [{
          data: {
            author: {
              icon_url: "https://cdn.discordapp.com/avatars/1159241989804544030/e6eba078fd6d9b1b9976e4ad6a4d1c9e.webp",
              name: "WordCountingBot",
              url: "https://github.com/Habilya/wordcountingdiscordbotjs/tree/master",
            },
            color: 39423,
            fields: [
              {
                name: "Ver.",
                value: "1.0.0",
              },
              {
                name: "Description",
                value: "A discord bot to count how many times a specific word or a pattern was spoken",
              },
              {
                name: "/help",
                value: "Prints this message",
              },
              {
                name: "/topreactionsbyuser reaction-name:[REACTION_NAME]",
                value: "Ex: /topreactionsbyuser reaction-name:gank  Prints report with top user that triggered this reaction",
              },
              {
                name: "/findaxreactivationmissions",
                value: "Prints System giving AX reactivation missions",
              },
              {
                name: "/findthargoidmatrix titan-name:[TITAN_NAME]",
                value: "Ex: /findthargoidmatrix titan-name:Taranis Prints System with thargoid matrix and spires",
              },
              {
                name: "/triangulation-puzzle (A lot of arguments)",
                value: "Ex: /triangulation-puzzle system-name1:col 359 sector QJ-V c17-7 min-radius1:45 max-radius1:47 system-name2:hip 83788 min-radius2:39 max-radius2:41 system-name3:Col 359 sector ZQ-R c19-7 min-radius3:37 max-radius3:39 Prints Systems triangulated",
              },
            ],
            thumbnail: {
              url: "https://cdn.discordapp.com/avatars/1159241989804544030/e6eba078fd6d9b1b9976e4ad6a4d1c9e.webp",
            },
            title: "wordcountingdiscordbotjs",
            url: "https://github.com/Habilya/wordcountingdiscordbotjs/tree/master",
          },
        },
      ],
      ephemeral: true
    };


    // Act
    await help(discordBot.client, message);

    // Assert
    expect(message.reply).toHaveBeenCalledWith(expected);

  });

});
