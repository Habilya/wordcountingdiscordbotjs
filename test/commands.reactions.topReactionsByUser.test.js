const { when } = require('jest-when');

const dbLayer = require('../src/datalayer/dbLayer');
jest.mock('../src/datalayer/dbLayer');

const leaderBoardTemplator = require('../src/utils/leaderBoardTemplator');


describe('Command topReactionsByUser.js tests', () => {
  let generatedLadderboard_li;
  let generatedLadderboard;
  let topUsersReactionsByReactionName;

  beforeAll(async() => {
    // Arrange (Global)
    when(dbLayer.getTopUsersReactionsByReactionName).calledWith('gank', 5).mockReturnValue([
      { _id: '615751829300576314', messageReactionCount: 6 },
      { _id: '322173755470118914', messageReactionCount: 3 },
      { _id: '322173755470118915', messageReactionCount: 2 },
      { _id: '322173755470118916', messageReactionCount: 1 }
    ]);

    const message = {
      reply: jest.fn(),
      deferReply: jest.fn(),
      editReply: jest.fn(),
      content: 'topReactionsByUser',
      options: { get: jest.fn() },
      guild: {
        members: {
          fetch: jest.fn()
            .mockReturnValueOnce({
              user: {
                displayAvatarURL: jest.fn().mockReturnValue('http://615751829300576314.jpg'),
                tag: '6314'
              },
              nickname: 'nickname - 615751829300576314',
            }).mockReturnValueOnce({
              user: {
                displayAvatarURL: jest.fn().mockReturnValue('http://615751829300576314.jpg'),
                tag: '6314'
              },
              nickname: 'nickname - 615751829300576314',
            }).mockReturnValueOnce({
              user: {
                displayAvatarURL: jest.fn().mockReturnValue('http://322173755470118914.jpg'),
                tag: '8914',
                globalName: 'globalName - 322173755470118914'
              },
            }).mockReturnValueOnce({
              user: {
                displayAvatarURL: jest.fn().mockReturnValue('http://322173755470118915.jpg'),
                tag: '8915',
                username: 'username - 322173755470118915'
              },
            }).mockReturnValueOnce({
              user: {
                displayAvatarURL: jest.fn().mockReturnValue('http://322173755470118916.jpg'),
                tag: '8916'
              },
              nickname: 'nickname - 322173755470118916',
            })
        }
      }
    };

    // Act (Global)
    topUsersReactionsByReactionName = await dbLayer.getTopUsersReactionsByReactionName('gank', 5);
    leaderBoardTemplator.initTemplates();
    generatedLadderboard_li = await leaderBoardTemplator.PrepareLeaderBoardTable(message, topUsersReactionsByReactionName, 5);
  });

  it('Command /topReactionsByUser html Should Match', async() => {

    // Arrange

    // Act

    // Assert
    expect(generatedLadderboard_li).toBe(`<article class="leaderboard__profile">
  <img src="http://615751829300576314.jpg" class="leaderboard__picture">
  <span class="leaderboard__name">nickname - 615751829300576314 (6314)</span>
  <span class="leaderboard__value">6</span>
</article><article class="leaderboard__profile">
  <img src="http://615751829300576314.jpg" class="leaderboard__picture">
  <span class="leaderboard__name">nickname - 615751829300576314 (6314)</span>
  <span class="leaderboard__value">3</span>
</article><article class="leaderboard__profile">
  <img src="http://322173755470118914.jpg" class="leaderboard__picture">
  <span class="leaderboard__name">globalName - 322173755470118914 (8914)</span>
  <span class="leaderboard__value">2</span>
</article><article class="leaderboard__profile">
  <img src="http://322173755470118915.jpg" class="leaderboard__picture">
  <span class="leaderboard__name">username - 322173755470118915 (8915)</span>
  <span class="leaderboard__value">1</span>
</article>`);
  });

});
