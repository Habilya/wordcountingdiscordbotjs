const { when } = require('jest-when');

const config = require('../conf/config.test.json');
const discordBot = require("../src/configure/discordBot");

const utilFindThargoidMatrix = require('../src/utils/utilFindThargoidMatrix');
const apiGetDcohWatchAPIOverview = require('../src/utils/apiGetDcohWatchAPIOverview');
jest.mock('../src/utils/apiGetDcohWatchAPIOverview');


describe('Command findThargoidMatrix.js tests', () => {
  let message;

  beforeAll(async() => {
    // Arrange (Global)
    apiGetDcohWatchAPIOverview.mockReturnValue({
      "previousCycle": {
        "cycleStart": "2023-10-19T07:00:00+00:00",
        "cycleEnd": "2023-10-26T07:00:00+00:00",
        "alerts": 38,
        "invasions": 1,
        "controls": 417,
        "titans": 8,
        "recovery": 14
      },
      "previousCycleChanges": {
        "alertsDefended": 38,
        "invasionsDefended": 1,
        "controlsDefended": 44,
        "thargoidInvasionStarted": 0,
        "thargoidsGained": 0
      },
      "currentCycle": {
        "cycleStart": "2023-10-26T07:00:00+00:00",
        "cycleEnd": "2023-11-02T07:00:00+00:00",
        "alerts": 39,
        "invasions": 0,
        "controls": 373,
        "titans": 8,
        "recovery": 15
      },
      "nextCycleChanges": {
        "alertsDefended": 34,
        "invasionsDefended": 0,
        "controlsDefended": 17,
        "thargoidInvasionStarted": 2,
        "thargoidsGained": 3
      },
      "nextCyclePrediction": {
        "cycleStart": "2023-11-02T07:00:00+00:00",
        "cycleEnd": "2023-11-09T07:00:00+00:00",
        "alerts": 37,
        "invasions": 2,
        "controls": 359,
        "titans": 8,
        "recovery": 10
      },
      "maelstroms": [
        {
          "name": "Indra",
          "systemName": "HIP 20567",
          "systemAddress": 1659744799067,
          "ingameNumber": 2
        },
        {
          "name": "Leigong",
          "systemName": "HIP 8887",
          "systemAddress": 216618994011,
          "ingameNumber": 1
        },
        {
          "name": "Taranis",
          "systemName": "Hyades Sector FB-N b7-6",
          "systemAddress": 13866167510393,
          "ingameNumber": 8
        },
        {
          "name": "Cocijo",
          "systemName": "Col 285 Sector BA-P c6-18",
          "systemAddress": 5031923290818,
          "ingameNumber": 5
        },
        {
          "name": "Oya",
          "systemName": "Cephei Sector BV-Y b4",
          "systemAddress": 9465705473417,
          "ingameNumber": 7
        },
        {
          "name": "Raijin",
          "systemName": "Pegasi Sector IH-U b3-3",
          "systemAddress": 7265876583833,
          "ingameNumber": 6
        },
        {
          "name": "Thor",
          "systemName": "Col 285 Sector IG-O c6-5",
          "systemAddress": 1458443260610,
          "ingameNumber": 4
        },
        {
          "name": "Hadad",
          "systemName": "HIP 30377",
          "systemAddress": 79247165795,
          "ingameNumber": 3
        }
      ],
      "levels": [
        {
          "level": 20,
          "name": "Alert",
          "isInvisibleState": false
        },
        {
          "level": 30,
          "name": "Invasion",
          "isInvisibleState": false
        },
        {
          "level": 40,
          "name": "Controlled",
          "isInvisibleState": false
        },
        {
          "level": 50,
          "name": "Titan",
          "isInvisibleState": false
        },
        {
          "level": 70,
          "name": "Recovery",
          "isInvisibleState": false
        }
      ],
      "systems": [
        {
          "effortFocus": 0,
          "factionOperations": 0,
          "factionAxOperations": 0,
          "factionGeneralOperations": 0,
          "factionRescueOperations": 0,
          "factionLogisticsOperations": 0,
          "specialFactionOperations": [],
          "stationsUnderRepair": 0,
          "stationsDamaged": 0,
          "stationsUnderAttack": 0,
          "features": [],
          "populationOriginal": 0,
          "thargoidLevel": {
            "level": 40,
            "name": "Controlled",
            "isInvisibleState": false
          },
          "progress": 100,
          "progressPercent": 1,
          "stateStartCycle": "2023-04-20T07:00:00+00:00",
          "stateExpiration": {
            "stateExpires": "2023-11-02T07:00:00+00:00",
            "currentCycleEnds": "2023-11-02T07:00:00+00:00",
            "remainingCycles": 0
          },
          "stateProgress": {
            "progressPercent": 1,
            "isCompleted": true,
            "nextSystemState": {
              "level": 0,
              "name": "Clear",
              "isInvisibleState": false
            },
            "systemStateChanges": "2023-11-02T07:00:00+00:00",
            "progressLastChange": "2023-10-28T06:33:10.461467+00:00",
            "progressLastChecked": "2023-10-28T06:52:52+00:00"
          },
          "distanceToMaelstrom": 24.9199,
          "barnacleMatrixInSystem": false,
          "thargoidSpireSiteInSystem": false,
          "thargoidSpireSiteBody": null,
          "coordinates": {
            "x": -25.1875,
            "y": -68.78125,
            "z": -172.21875
          },
          "maelstrom": {
            "name": "Indra",
            "systemName": "HIP 20567",
            "systemAddress": 1659744799067,
            "ingameNumber": 2
          },
          "systemAddress": 908419076786,
          "name": "37 A1 Tauri",
          "population": 0
        },
        {
          "effortFocus": 0,
          "factionOperations": 0,
          "factionAxOperations": 0,
          "factionGeneralOperations": 0,
          "factionRescueOperations": 0,
          "factionLogisticsOperations": 0,
          "specialFactionOperations": [],
          "stationsUnderRepair": 1,
          "stationsDamaged": 0,
          "stationsUnderAttack": 0,
          "features": [
            "FederalFaction",
            "ImperialFaction"
          ],
          "populationOriginal": 56945,
          "thargoidLevel": {
            "level": 70,
            "name": "Recovery",
            "isInvisibleState": false
          },
          "progress": 16,
          "progressPercent": 0.16,
          "stateStartCycle": "2023-10-26T07:00:00+00:00",
          "stateExpiration": {
            "stateExpires": "2023-11-23T07:00:00+00:00",
            "currentCycleEnds": "2023-11-23T07:00:00+00:00",
            "remainingCycles": null
          },
          "stateProgress": {
            "progressPercent": 0.16,
            "isCompleted": false,
            "nextSystemState": null,
            "systemStateChanges": null,
            "progressLastChange": "2023-10-29T16:30:23.318713+00:00",
            "progressLastChecked": "2023-10-29T22:30:29.844592+00:00"
          },
          "distanceToMaelstrom": 19.1419,
          "barnacleMatrixInSystem": false,
          "thargoidSpireSiteInSystem": false,
          "thargoidSpireSiteBody": null,
          "coordinates": {
            "x": 99.40625,
            "y": -88.4375,
            "z": -129.9375
          },
          "maelstrom": {
            "name": "Taranis",
            "systemName": "Hyades Sector FB-N b7-6",
            "systemAddress": 13866167510393,
            "ingameNumber": 8
          },
          "systemAddress": 5532807765,
          "name": "5 Mu Leporis",
          "population": 2847
        },
        {
          "effortFocus": 0.11,
          "factionOperations": 0,
          "factionAxOperations": 0,
          "factionGeneralOperations": 0,
          "factionRescueOperations": 0,
          "factionLogisticsOperations": 0,
          "specialFactionOperations": [],
          "stationsUnderRepair": 0,
          "stationsDamaged": 0,
          "stationsUnderAttack": 0,
          "features": [
            "FederalFaction",
            "ThargoidControlledReactivationMissions"
          ],
          "populationOriginal": 2617061,
          "thargoidLevel": {
            "level": 20,
            "name": "Alert",
            "isInvisibleState": false
          },
          "progress": 38,
          "progressPercent": 0.38,
          "stateStartCycle": "2023-10-26T07:00:00+00:00",
          "stateExpiration": {
            "stateExpires": "2023-11-02T07:00:00+00:00",
            "currentCycleEnds": "2023-11-02T07:00:00+00:00",
            "remainingCycles": 0
          },
          "stateProgress": {
            "progressPercent": 0.38,
            "isCompleted": false,
            "nextSystemState": null,
            "systemStateChanges": null,
            "progressLastChange": "2023-10-29T22:32:40.470486+00:00",
            "progressLastChecked": "2023-10-29T22:32:40.470487+00:00"
          },
          "distanceToMaelstrom": 22.1683,
          "barnacleMatrixInSystem": false,
          "thargoidSpireSiteInSystem": false,
          "thargoidSpireSiteBody": null,
          "coordinates": {
            "x": 8.625,
            "y": -65.59375,
            "z": -143.53125
          },
          "maelstrom": {
            "name": "Indra",
            "systemName": "HIP 20567",
            "systemAddress": 1659744799067,
            "ingameNumber": 2
          },
          "systemAddress": 2007997813434,
          "name": "HIP 20616",
          "population": 2617061
        },
        {
          "effortFocus": 0,
          "factionOperations": 0,
          "factionAxOperations": 0,
          "factionGeneralOperations": 0,
          "factionRescueOperations": 0,
          "factionLogisticsOperations": 0,
          "specialFactionOperations": [],
          "stationsUnderRepair": 0,
          "stationsDamaged": 0,
          "stationsUnderAttack": 0,
          "features": [
            "FederalFaction",
            "ThargoidControlledReactivationMissions"
          ],
          "populationOriginal": 13545,
          "thargoidLevel": {
            "level": 20,
            "name": "Alert",
            "isInvisibleState": false
          },
          "progress": 2,
          "progressPercent": 0.02,
          "stateStartCycle": "2023-10-26T07:00:00+00:00",
          "stateExpiration": {
            "stateExpires": "2023-11-02T07:00:00+00:00",
            "currentCycleEnds": "2023-11-02T07:00:00+00:00",
            "remainingCycles": 0
          },
          "stateProgress": {
            "progressPercent": 0.02,
            "isCompleted": false,
            "nextSystemState": null,
            "systemStateChanges": null,
            "progressLastChange": "2023-10-29T22:32:51.714336+00:00",
            "progressLastChecked": "2023-10-29T22:32:51.714336+00:00"
          },
          "distanceToMaelstrom": 20.2274,
          "barnacleMatrixInSystem": false,
          "thargoidSpireSiteInSystem": false,
          "thargoidSpireSiteBody": null,
          "coordinates": {
            "x": 6.75,
            "y": -76.90625,
            "z": -150.34375
          },
          "maelstrom": {
            "name": "Indra",
            "systemName": "HIP 20567",
            "systemAddress": 1659744799067,
            "ingameNumber": 2
          },
          "systemAddress": 7268024001897,
          "name": "Scythia",
          "population": 13545
        },
        {
          "effortFocus": 0,
          "factionOperations": 0,
          "factionAxOperations": 0,
          "factionGeneralOperations": 0,
          "factionRescueOperations": 0,
          "factionLogisticsOperations": 0,
          "specialFactionOperations": [],
          "stationsUnderRepair": 0,
          "stationsDamaged": 0,
          "stationsUnderAttack": 0,
          "features": [
        "BarnacleMatrix",
        "ThargoidSpires"
      ],
          "populationOriginal": 0,
          "thargoidLevel": {
            "level": 40,
            "name": "Controlled",
            "isInvisibleState": false
          },
          "progress": 0,
          "progressPercent": 0,
          "stateStartCycle": "2022-12-01T07:00:00+00:00",
          "stateExpiration": null,
          "stateProgress": {
            "progressPercent": 0,
            "isCompleted": false,
            "nextSystemState": null,
            "systemStateChanges": null,
            "progressLastChange": "2023-01-05T20:35:06.164242+00:00",
            "progressLastChecked": "2023-10-29T22:36:02.264211+00:00"
          },
          "distanceToMaelstrom": 9.9184,
          "barnacleMatrixInSystem": true,
          "thargoidSpireSiteInSystem": true,
          "thargoidSpireSiteBody": "1",
          "coordinates": {
            "x": -2.5625,
            "y": -55.5625,
            "z": -156.9375
          },
          "maelstrom": {
            "name": "Taranis",
            "systemName": "HIP 20567",
            "systemAddress": 1659744799067,
            "ingameNumber": 2
          },
          "systemAddress": 2869977556329,
          "name": "Arietis Sector KR-V b2-1",
          "population": 0
        },
        {
          "effortFocus": 0,
          "factionOperations": 0,
          "factionAxOperations": 0,
          "factionGeneralOperations": 0,
          "factionRescueOperations": 0,
          "factionLogisticsOperations": 0,
          "specialFactionOperations": [],
          "stationsUnderRepair": 0,
          "stationsDamaged": 0,
          "stationsUnderAttack": 0,
          "features": [
        "BarnacleMatrix",
        "ThargoidSpires"
      ],
          "populationOriginal": 0,
          "thargoidLevel": {
            "level": 40,
            "name": "Controlled",
            "isInvisibleState": false
          },
          "progress": 0,
          "progressPercent": 0,
          "stateStartCycle": "2022-12-15T07:00:00+00:00",
          "stateExpiration": null,
          "stateProgress": {
            "progressPercent": 0,
            "isCompleted": false,
            "nextSystemState": null,
            "systemStateChanges": null,
            "progressLastChange": "2023-01-05T20:29:21.761971+00:00",
            "progressLastChecked": "2023-10-29T22:36:39.388253+00:00"
          },
          "distanceToMaelstrom": 15.1021,
          "barnacleMatrixInSystem": true,
          "thargoidSpireSiteInSystem": true,
          "thargoidSpireSiteBody": "A 4",
          "coordinates": {
            "x": -78.1875,
            "y": -147.3125,
            "z": -115.3125
          },
          "maelstrom": {
            "name": "Taranis",
            "systemName": "HIP 8887",
            "systemAddress": 216618994011,
            "ingameNumber": 1
          },
          "systemAddress": 7266949997945,
          "name": "Arietis Sector YE-R b4-3",
          "population": 0
        },
      ],
      "nextTick": "2023-11-02T07:00:00+00:00",
      "status": 0
    });

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
      content: 'findthargoidmatrix',
      options: { get: jest.fn() },
    };

    // Act (Global)
    await utilFindThargoidMatrix(message, 'Taranis');

  });

  it('Command /findThargoidMatrix reply Should Match', async() => {

    // Arrange

    // Act

    // Assert
    expect(discordBot.getLogger().error.mock.calls).toHaveLength(0);
    expect(apiGetDcohWatchAPIOverview.mock.calls).toHaveLength(1);

    expect(message.editReply).toHaveBeenCalledWith({ "content": `\`\`\`╔════════════════════════════════════════════════════════════╗
║                     Thargoid matrices                      ║
╠════════════════════════════════╦════════╦════════╦═════════╣
║          System Name           ║ Matrix ║ Spires ║  Titan  ║
╠════════════════════════════════╬════════╬════════╬═════════╣
║ Arietis Sector KR-V b2-1 (1)   ║ true   ║ true   ║ Taranis ║
║ Arietis Sector YE-R b4-3 (A 4) ║ true   ║ true   ║ Taranis ║
╚════════════════════════════════╩════════╩════════╩═════════╝
\`\`\`` });

  });

});
