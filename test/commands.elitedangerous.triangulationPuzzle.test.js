const { when } = require('jest-when');

const config = require('../conf/config.test.json');
const discordBot = require("../src/configure/discordBot");
const triangulationPuzzle = require("../src/commands/elitedangerous/triangulationPuzzle");

const apiGetsphereSystems = require('../src/utils/apiGetsphereSystems');
jest.mock('../src/utils/apiGetsphereSystems');


describe('Command triangulationPuzzle.js tests', () => {
  let spyOnCallBack;
  let message;

  beforeAll(async() => {
    // Arrange (Global)
    when(apiGetsphereSystems).calledWith("col 359 sector QJ-V c17-7", "47", "45").mockReturnValue([
      { distance: 46.1, bodyCount: 27, name: 'Col 359 Sector KS-J d9-59' },
      { distance: 46.05, bodyCount: 1, name: 'Col 359 Sector PJ-V c17-7' }, // should be displayed also
      {
        distance: 45.12,
        bodyCount: null, // should not be displayed as bodycount > 0  
        name: 'Col 359 Sector PJ-V c17-6'
      },
      {
        distance: 45.41,
        bodyCount: null,
        name: 'Col 359 Sector NO-V c17-1'
      },
      {
        distance: 46.01,
        bodyCount: null,
        name: 'Col 359 Sector XB-U b33-1'
      },
      { distance: 46.53, bodyCount: 10, name: 'Col 359 Sector NO-V c17-3' },
      { distance: 46, bodyCount: 24, name: 'Col 359 Sector PJ-V c17-1' },
      { distance: 45.08, bodyCount: 10, name: 'Col 359 Sector NO-V c17-5' },
      { distance: 45.51, bodyCount: 12, name: 'Col 359 Sector NO-V c17-4' },
      { distance: 45.87, bodyCount: 25, name: 'Col 359 Sector ZW-T b33-0' },
      { distance: 46.25, bodyCount: 2, name: 'Col 359 Sector BY-Q b35-0' },
      { distance: 46.35, bodyCount: 9, name: 'Col 359 Sector FR-L d8-15' },
      { distance: 46.03, bodyCount: 12, name: 'Col 359 Sector IJ-Q b35-1' },
      {
        distance: 46.76,
        bodyCount: null,
        name: 'Col 359 Sector RE-V c17-6'
      },
      { distance: 45.75, bodyCount: 4, name: 'Col 359 Sector ED-S b34-1' },
      {
        distance: 46.84,
        bodyCount: null,
        name: 'Col 359 Sector UV-V b32-1'
      },
      {
        distance: 46.88,
        bodyCount: null,
        name: 'Col 359 Sector TP-T c18-9'
      },
      { distance: 46.02, bodyCount: 4, name: 'Col 359 Sector NY-W c16-8' },
      {
        distance: 45.93,
        bodyCount: null,
        name: 'Col 359 Sector SQ-U b33-2'
      },
      { distance: 46.31, bodyCount: 15, name: 'Col 359 Sector SA-W b32-0' },
      { distance: 45.56, bodyCount: 14, name: 'Col 359 Sector HM-L d8-21' },
      { distance: 46.5, bodyCount: 26, name: 'HIP 84326' },
      { distance: 46.22, bodyCount: 1, name: 'Col 359 Sector LS-J d9-55' },
      { distance: 45.75, bodyCount: 1, name: 'Col 359 Sector OY-W c16-7' },
      {
        distance: 45.96,
        bodyCount: null,
        name: 'Col 359 Sector JX-J d9-24'
      },
      { distance: 45.03, bodyCount: 1, name: 'Col 359 Sector SE-V c17-2' },
      { distance: 46.6, bodyCount: 25, name: 'Col 359 Sector UA-W b32-1' },
      { distance: 45.28, bodyCount: 2, name: 'Col 359 Sector KZ-O b36-2' },
      { distance: 46.46, bodyCount: 1, name: 'Col 359 Sector EI-S b34-3' },
      {
        distance: 45.61,
        bodyCount: null,
        name: 'Col 359 Sector BS-S b34-2'
      },
      { distance: 45.43, bodyCount: 15, name: 'Col 359 Sector DN-S b34-2' },
      {
        distance: 45.77,
        bodyCount: null,
        name: 'Col 359 Sector RJ-V c17-6'
      }
    ]);

    when(apiGetsphereSystems).calledWith("hip 83788", "41", "39").mockReturnValue([
      { distance: 40.56, bodyCount: 26, name: 'HIP 84326' },
      { distance: 40.25, bodyCount: 17, name: 'Col 359 Sector LS-J d9-30' },
      { distance: 39.45, bodyCount: 3, name: 'Col 359 Sector SV-M b37-3' },
      { distance: 40.02, bodyCount: 12, name: 'Col 359 Sector QQ-L b38-2' },
      { distance: 46.05, bodyCount: 1, name: 'Col 359 Sector PJ-V c17-7' }, // should be displayed also
      {
        distance: 45.12,
        bodyCount: null, // should not be displayed as bodycount > 0  
        name: 'Col 359 Sector PJ-V c17-6'
      },
      {
        distance: 39.39,
        bodyCount: null,
        name: 'Col 359 Sector WB-L b38-0'
      },
      { distance: 39.69, bodyCount: 17, name: 'Col 359 Sector WK-T c18-6' },
      { distance: 40.72, bodyCount: 3, name: 'Col 359 Sector PY-H d10-10' },
      { distance: 40.9, bodyCount: 3, name: 'Col 359 Sector IO-Q b35-2' },
      { distance: 40.44, bodyCount: 2, name: 'Col 359 Sector XR-J b39-1' },
      {
        distance: 40.06,
        bodyCount: null,
        name: 'Col 359 Sector ZV-R c19-4'
      },
      {
        distance: 40.61,
        bodyCount: null,
        name: 'Col 359 Sector XK-T c18-8'
      },
      {
        distance: 40.43,
        bodyCount: null,
        name: 'Col 359 Sector TV-M b37-0'
      },
      { distance: 39.45, bodyCount: 51, name: 'HIP 84078' },
      { distance: 39.75, bodyCount: 1, name: 'Col 359 Sector ZV-R c19-7' },
      {
        distance: 39.06,
        bodyCount: null,
        name: 'Col 359 Sector XK-T c18-4'
      },
      {
        distance: 40.36,
        bodyCount: 32,
        name: 'Col 359 Sector QY-H d10-58'
      },
      {
        distance: 39.27,
        bodyCount: null,
        name: 'Col 359 Sector KE-P b36-2'
      },
      { distance: 39.22, bodyCount: 2, name: 'Col 359 Sector TA-N b37-0' }
    ]);

    when(apiGetsphereSystems).calledWith("Col 359 sector ZQ-R c19-7", "39", "37").mockReturnValue([
      { distance: 38.12, bodyCount: 16, name: 'Col 359 Sector OV-M b37-2' },
      { distance: 46.05, bodyCount: 1, name: 'Col 359 Sector PJ-V c17-7' }, // should be displayed also
      {
        distance: 45.12,
        bodyCount: null, // should not be displayed as bodycount > 0  
        name: 'Col 359 Sector PJ-V c17-6'
      },
      {
        distance: 37.28,
        bodyCount: null,
        name: 'Col 359 Sector SP-T c18-1'
      },
      { distance: 37.42, bodyCount: 1, name: 'Col 359 Sector LP-O b36-0' },
      {
        distance: 38.72,
        bodyCount: null,
        name: 'Col 359 Sector ZQ-R c19-1'
      },
      {
        distance: 38.64,
        bodyCount: null,
        name: 'Col 359 Sector LP-O b36-1'
      },
      {
        distance: 37.59,
        bodyCount: null,
        name: 'Col 359 Sector RQ-M b37-3'
      },
      {
        distance: 37.95,
        bodyCount: null,
        name: 'Col 359 Sector VW-K b38-2'
      },
      { distance: 37.65, bodyCount: 18, name: 'Col 359 Sector VM-J b39-1' },
      {
        distance: 38.36,
        bodyCount: null,
        name: 'Col 359 Sector XV-R c19-8'
      },
      { distance: 38.23, bodyCount: 20, name: 'Col 359 Sector TP-T c18-2' },
      {
        distance: 38.36,
        bodyCount: null,
        name: 'Col 359 Sector NK-O b36-1'
      },
      {
        distance: 37.31,
        bodyCount: null,
        name: 'Col 359 Sector TP-T c18-9'
      },
      { distance: 38.03, bodyCount: 24, name: 'Col 359 Sector VK-T c18-5' },
      { distance: 38.33, bodyCount: 9, name: 'Col 359 Sector PY-H d10-57' },
      { distance: 37.15, bodyCount: 1, name: 'Col 359 Sector QL-L b38-1' },
      { distance: 38.73, bodyCount: 1, name: 'Col 359 Sector ZH-J b39-1' },
      { distance: 38.37, bodyCount: 26, name: 'HIP 84326' },
      {
        distance: 38.97,
        bodyCount: 32,
        name: 'Col 359 Sector YV-R c19-10'
      },
      { distance: 37.34, bodyCount: 3, name: 'Col 359 Sector YV-R c19-12' },
      {
        distance: 37.03,
        bodyCount: 12,
        name: 'Col 359 Sector PY-H d10-23'
      },
      { distance: 38.81, bodyCount: 11, name: 'Col 359 Sector WB-L b38-1' }
    ]);



    discordBot.setConfig(config);
    discordBot.initDiscordBotClient();

    discordBot.setLogger({
      info: jest.fn(),
      error: jest.fn(),
      warning: jest.fn()
    });

    message = {
      reply: jest.fn(),
      deferReply: jest.fn(),
      editReply: jest.fn(),
      content: 'triangulation-puzzle',
      options: { get: jest.fn() },
    };

    when(message.options.get).calledWith('system-name1').mockReturnValue({ value: 'col 359 sector QJ-V c17-7' });
    when(message.options.get).calledWith('min-radius1').mockReturnValue({ value: '45' });
    when(message.options.get).calledWith('max-radius1').mockReturnValue({ value: '47' });
    when(message.options.get).calledWith('system-name2').mockReturnValue({ value: 'hip 83788' });
    when(message.options.get).calledWith('min-radius2').mockReturnValue({ value: '39' });
    when(message.options.get).calledWith('max-radius2').mockReturnValue({ value: '41' });
    when(message.options.get).calledWith('system-name3').mockReturnValue({ value: 'Col 359 sector ZQ-R c19-7' });
    when(message.options.get).calledWith('min-radius3').mockReturnValue({ value: '37' });
    when(message.options.get).calledWith('max-radius3').mockReturnValue({ value: '39' });

    spyOnCallBack = jest.spyOn(triangulationPuzzle, 'callback');

    // Act (Global)
    await triangulationPuzzle.callback(discordBot, message);

  });

  it('Command /triangulationPuzzle reply Should Match', async() => {

    // Arrange

    // Act

    // Assert
    expect(discordBot.getLogger().error.mock.calls).toHaveLength(0);
    expect(spyOnCallBack.mock.calls).toHaveLength(1);
    expect(apiGetsphereSystems.mock.calls).toHaveLength(3);
    expect(apiGetsphereSystems.mock.calls).toEqual([
      ["col 359 sector QJ-V c17-7", "47", "45"],
      ["hip 83788", "41", "39"],
      ["Col 359 sector ZQ-R c19-7", "39", "37"]
    ]);

    expect(message.editReply).toHaveBeenCalledWith({ "content": "```Col 359 Sector PJ-V c17-7,HIP 84326```" });

  });

});
