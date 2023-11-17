const { when } = require('jest-when');

const config = require('../conf/config.test.json');
const discordBot = require("../src/configure/discordBot");
const findAXReactivationMissions = require("../src/commands/elitedangerous/findAXReactivationMissions");

const apiGetDcohWatchAPIOverview = require('../src/utils/apiGetDcohWatchAPIOverview');
jest.mock('../src/utils/apiGetDcohWatchAPIOverview');

const apiGetInaraMilitarySettlements = require('../src/utils/apiGetInaraMilitarySettlements');
jest.mock('../src/utils/apiGetInaraMilitarySettlements');


describe('Command findAXReactivationMissions.js tests', () => {
  let spyOnCallBack;
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

    when(apiGetInaraMilitarySettlements).calledWith('HIP 20616').mockReturnValue([
      {
        Station: "Wilkins's Obligation Abandoned",
        StarSystem: 'HIP 21112',
        Economy: 'Military',
        Government: 'Dictatorship',
        Allegiance: 'Thargoids',
        StationDistance: '-',
        Dist: '14.62'
      },
      {
        Station: 'Burke Defence Hub Abandoned',
        StarSystem: 'HIP 20679',
        Economy: 'Military',
        Government: 'Dictatorship',
        Allegiance: 'Thargoids',
        StationDistance: '-',
        Dist: '16.67'
      },
      {
        Station: 'Ortega Military Bastion Abandoned',
        StarSystem: 'HIP 20679',
        Economy: 'Military',
        Government: 'Dictatorship',
        Allegiance: 'Thargoids',
        StationDistance: '-',
        Dist: '16.67'
      },
      {
        Station: "Mckenzie's Control Abandoned",
        StarSystem: 'HIP 20679',
        Economy: 'Military',
        Government: 'Dictatorship',
        Allegiance: 'Thargoids',
        StationDistance: '-',
        Dist: '16.67'
      },
      {
        Station: 'Vadamootoo Command Site Abandoned',
        StarSystem: 'HIP 20679',
        Economy: 'Military',
        Government: 'Dictatorship',
        Allegiance: 'Thargoids',
        StationDistance: '-',
        Dist: '16.67'
      },
      {
        Station: "Benton's Armament Abandoned",
        StarSystem: 'HIP 20679',
        Economy: 'Military',
        Government: 'Dictatorship',
        Allegiance: 'Thargoids',
        StationDistance: '-',
        Dist: '16.67'
      },
      {
        Station: 'Teklehaimanot Munitions Enterprise Abandoned',
        StarSystem: 'HIP 20679',
        Economy: 'Military',
        Government: 'Dictatorship',
        Allegiance: 'Thargoids',
        StationDistance: '-',
        Dist: '16.67'
      },
      {
        Station: 'Shao Arms Installation Abandoned',
        StarSystem: 'HIP 20679',
        Economy: 'Military',
        Government: 'Dictatorship',
        Allegiance: 'Thargoids',
        StationDistance: '-',
        Dist: '16.67'
      },
      {
        Station: "Stein's Jurisdiction Abandoned",
        StarSystem: 'HIP 20679',
        Economy: 'Military',
        Government: 'Dictatorship',
        Allegiance: 'Thargoids',
        StationDistance: '-',
        Dist: '16.67'
      },
      {
        Station: 'Powter Munitions Stockade Abandoned',
        StarSystem: 'HIP 20679',
        Economy: 'Military',
        Government: 'Dictatorship',
        Allegiance: 'Thargoids',
        StationDistance: '-',
        Dist: '16.67'
      },
      {
        Station: 'Wen Munitions Stockade Abandoned',
        StarSystem: 'HIP 20679',
        Economy: 'Military',
        Government: 'Dictatorship',
        Allegiance: 'Thargoids',
        StationDistance: '-',
        Dist: '16.67'
      },
      {
        Station: 'Suzuki Military Complex Abandoned',
        StarSystem: 'HIP 20679',
        Economy: 'Military',
        Government: 'Dictatorship',
        Allegiance: 'Thargoids',
        StationDistance: '-',
        Dist: '16.67'
      },
      {
        Station: 'Malakar Defence Barracks Abandoned',
        StarSystem: 'Warnones',
        Economy: 'Military',
        Government: 'Dictatorship',
        Allegiance: 'Thargoids',
        StationDistance: '-',
        Dist: '151.76'
      },
      {
        Station: 'Kang Munitions Complex Abandoned',
        StarSystem: 'Warnones',
        Economy: 'Military',
        Government: 'Dictatorship',
        Allegiance: 'Thargoids',
        StationDistance: '275 Ls',
        Dist: '151.76'
      },
      {
        Station: 'Vasylyshin Munitions Hub Abandoned',
        StarSystem: 'HIP 13179',
        Economy: 'Military',
        Government: 'Cooperative',
        Allegiance: 'Independent',
        StationDistance: '1,499 Ls',
        Dist: '153.65'
      },
      {
        Station: 'Owusu Arms Hub Abandoned',
        StarSystem: 'HIP 13179',
        Economy: 'Military',
        Government: 'Cooperative',
        Allegiance: 'Independent',
        StationDistance: '1,040 Ls',
        Dist: '153.65'
      },
      {
        Station: 'Coulstock-Cockeram Defence Complex Abandoned',
        StarSystem: 'HIP 13179',
        Economy: 'Military',
        Government: 'Cooperative',
        Allegiance: 'Independent',
        StationDistance: '1,052 Ls',
        Dist: '153.65'
      },
      {
        Station: 'Morledge Arms Garrison Abandoned',
        StarSystem: 'HIP 19091',
        Economy: 'Military',
        Government: 'Democracy',
        Allegiance: 'Independent',
        StationDistance: '228 Ls',
        Dist: '153.97'
      },
      {
        Station: 'Saliba Command Outpost Abandoned',
        StarSystem: 'HIP 19091',
        Economy: 'Military',
        Government: 'Patronage',
        Allegiance: 'Empire',
        StationDistance: '228 Ls',
        Dist: '153.97'
      },
      {
        Station: 'Ndam Defence Barracks Abandoned',
        StarSystem: 'HIP 19091',
        Economy: 'Military',
        Government: 'Patronage',
        Allegiance: 'Empire',
        StationDistance: '3,964 Ls',
        Dist: '153.97'
      },
      {
        Station: 'Lal Defence Base Abandoned',
        StarSystem: 'HIP 19091',
        Economy: 'Military',
        Government: 'Patronage',
        Allegiance: 'Empire',
        StationDistance: '3,955 Ls',
        Dist: '153.97'
      },
      {
        Station: "Bastien's Service Abandoned",
        StarSystem: 'Inara',
        Economy: 'Military',
        Government: 'Dictatorship',
        Allegiance: 'Thargoids',
        StationDistance: '1,430 Ls',
        Dist: '157.72'
      },
      {
        Station: 'Chukwunyelu Command Complex Abandoned',
        StarSystem: 'Inara',
        Economy: 'Military',
        Government: 'Dictatorship',
        Allegiance: 'Thargoids',
        StationDistance: '1,439 Ls',
        Dist: '157.72'
      },
      {
        Station: 'Quandt Military Barracks Abandoned',
        StarSystem: 'Lhou Mans',
        Economy: 'Military',
        Government: 'Democracy',
        Allegiance: 'Independent',
        StationDistance: '485 Ls',
        Dist: '157.94',
      },
      {
        Station: 'Tutunnyk Arms Site Abandoned',
        StarSystem: 'HIP 8525',
        Economy: 'Military',
        Government: 'Dictatorship',
        Allegiance: 'Thargoids',
        StationDistance: '4,390 Ls',
        Dist: '160.27'
      },
      {
        Station: 'Vasylyshin Arms Site Abandoned',
        StarSystem: 'HIP 8525',
        Economy: 'Military',
        Government: 'Dictatorship',
        Allegiance: 'Thargoids',
        StationDistance: '4,385 Ls',
        Dist: '160.27'
      },
      {
        Station: 'Owor Command Outpost Abandoned',
        StarSystem: 'HIP 8525',
        Economy: 'Military',
        Government: 'Dictatorship',
        Allegiance: 'Thargoids',
        StationDistance: '4,392 Ls',
        Dist: '160.27'
      },
      {
        Station: 'Levada Military Barracks Abandoned',
        StarSystem: 'HIP 8525',
        Economy: 'Military',
        Government: 'Dictatorship',
        Allegiance: 'Thargoids',
        StationDistance: '2,896 Ls',
        Dist: '160.27'
      },
      {
        Station: 'Makubuya Military Camp Abandoned',
        StarSystem: 'HIP 8525',
        Economy: 'Military',
        Government: 'Feudal',
        Allegiance: 'Independent',
        StationDistance: '2,893 Ls',
        Dist: '160.27'
      },
      {
        Station: 'Ramirez Military Site Abandoned',
        StarSystem: 'HIP 8525',
        Economy: 'Military',
        Government: 'Dictatorship',
        Allegiance: 'Thargoids',
        StationDistance: '4,390 Ls',
        Dist: '160.27'
      },
      {
        Station: 'Ibaka Military Barracks Abandoned',
        StarSystem: 'HIP 8525',
        Economy: 'Military',
        Government: 'Dictatorship',
        Allegiance: 'Thargoids',
        StationDistance: '4,394 Ls',
        Dist: '160.27'
      },
      {
        Station: 'Saunders Arms Facility Abandoned',
        StarSystem: 'HIP 8525',
        Economy: 'Military',
        Government: 'Dictatorship',
        Allegiance: 'Thargoids',
        StationDistance: '4,388 Ls',
        Dist: '160.27'
      },
      {
        Station: 'Khatri Stockade Abandoned',
        StarSystem: 'HIP 8525',
        Economy: 'Military',
        Government: 'Dictatorship',
        Allegiance: 'Thargoids',
        StationDistance: '4,388 Ls',
        Dist: '160.27'
      },
      {
        Station: "Murphy's Armament Abandoned",
        StarSystem: 'HIP 8525',
        Economy: 'Military',
        Government: 'Dictatorship',
        Allegiance: 'Thargoids',
        StationDistance: '2,891 Ls',
        Dist: '160.27'
      },
      {
        Station: 'Iglesias Defence Enterprise Abandoned',
        StarSystem: 'HIP 8525',
        Economy: 'Military',
        Government: 'Dictatorship',
        Allegiance: 'Thargoids',
        StationDistance: '2,823 Ls',
        Dist: '160.27'
      },
      {
        Station: 'Lavoie Defence Hub Abandoned',
        StarSystem: 'HIP 8525',
        Economy: 'Military',
        Government: 'Dictatorship',
        Allegiance: 'Thargoids',
        StationDistance: '4,394 Ls',
        Dist: '160.27'
      },
      {
        Station: 'Sugiyama Arms Garrison Abandoned',
        StarSystem: 'HIP 8525',
        Economy: 'Military',
        Government: 'Dictatorship',
        Allegiance: 'Thargoids',
        StationDistance: '2,901 Ls',
        Dist: '160.27'
      },
      {
        Station: "Dzuba's Jurisdiction Abandoned",
        StarSystem: 'HIP 8525',
        Economy: 'Military',
        Government: 'Dictatorship',
        Allegiance: 'Thargoids',
        StationDistance: '4,385 Ls',
        Dist: '160.27'
      },
      {
        Station: "Gustard's Barracks Abandoned",
        StarSystem: 'HIP 21165',
        Economy: 'Military',
        Government: 'Dictatorship',
        Allegiance: 'Thargoids',
        StationDistance: '1,372 Ls',
        Dist: '161.83'
      },
      {
        Station: 'Dyachenko Munitions Enterprise Abandoned',
        StarSystem: 'Liu Huang',
        Economy: 'Military',
        Government: 'Cooperative',
        Allegiance: 'Independent',
        StationDistance: '999 Ls',
        Dist: '168.85'
      },
      {
        Station: "Buhle's Watch Abandoned",
        StarSystem: 'Liu Huang',
        Economy: 'Military',
        Government: 'Cooperative',
        Allegiance: 'Independent',
        StationDistance: '729 Ls',
        Dist: '168.85'
      },
      {
        Station: 'Maslo Military Installation Abandoned',
        StarSystem: 'Liu Huang',
        Economy: 'Military',
        Government: 'Cooperative',
        Allegiance: 'Independent',
        StationDistance: '1,000 Ls',
        Dist: '168.85'
      },
      {
        Station: "Brandt's Arsenal Abandoned",
        StarSystem: 'Mapon',
        Economy: 'Military',
        Government: 'Democracy',
        Allegiance: 'Federation',
        StationDistance: '1,675 Ls',
        Dist: '169.19'
      },
      {
        Station: 'Azevedo Defence Site Abandoned',
        StarSystem: 'Mapon',
        Economy: 'Military',
        Government: 'Democracy',
        Allegiance: 'Federation',
        StationDistance: '1,665 Ls',
        Dist: '169.19'
      },
      {
        Station: "Conteh's Honour Abandoned",
        StarSystem: 'Mapon',
        Economy: 'Military',
        Government: 'Democracy',
        Allegiance: 'Federation',
        StationDistance: '1,666 Ls',
        Dist: '169.19'
      },
      {
        Station: 'Briscoe Military Site Abandoned',
        StarSystem: 'Mapon',
        Economy: 'Military',
        Government: 'Democracy',
        Allegiance: 'Independent',
        StationDistance: '1,671 Ls',
        Dist: '169.19'
      },
      {
        Station: 'Panchenko Military Installation Abandoned',
        StarSystem: 'Mapon',
        Economy: 'Military',
        Government: 'Democracy',
        Allegiance: 'Federation',
        StationDistance: '1,658 Ls',
        Dist: '169.19'
      },
      {
        Station: 'Mckenzie Military Encampment Abandoned',
        StarSystem: 'Akbakara',
        Economy: 'Military',
        Government: 'Dictatorship',
        Allegiance: 'Thargoids',
        StationDistance: '-',
        Dist: '169.72'
      },
      {
        Station: 'Pereira Command Garrison Abandoned',
        StarSystem: 'Kaurukat',
        Economy: 'Military',
        Government: 'Dictatorship',
        Allegiance: 'Thargoids',
        StationDistance: '-',
        Dist: '184.91'
      },
      {
        Station: 'Oyinlola Munitions Installation Abandoned',
        StarSystem: 'Kaurukat',
        Economy: 'Military',
        Government: 'Dictatorship',
        Allegiance: 'Thargoids',
        StationDistance: '-',
        Dist: '184.91'
      },
      {
        Station: 'Emeagwali Obligation Abandoned',
        StarSystem: 'Kaurukat',
        Economy: 'Military',
        Government: 'Dictatorship',
        Allegiance: 'Thargoids',
        StationDistance: '-',
        Dist: '184.91'
      },
      {
        Station: "Temitope's Control Abandoned",
        StarSystem: 'Kaurukat',
        Economy: 'Military',
        Government: 'Dictatorship',
        Allegiance: 'Thargoids',
        StationDistance: '-',
        Dist: '184.91'
      },
      {
        Station: 'Burn Landing Abandoned',
        StarSystem: 'HIP 38235',
        Economy: 'Military',
        Government: 'Corporate',
        Allegiance: 'Independent',
        StationDistance: '265 Ls',
        Dist: '186.32'
      },
      {
        Station: 'Sasaki Military Expedition Abandoned',
        StarSystem: 'HIP 38235',
        Economy: 'Military',
        Government: 'Corporate',
        Allegiance: 'Independent',
        StationDistance: '266 Ls',
        Dist: '186.32'
      }
    ]);
    when(apiGetInaraMilitarySettlements).calledWith('Scythia').mockReturnValue([]);

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
      content: 'findaxreactivationmissions',
      options: { get: jest.fn() },
    };

    spyOnCallBack = jest.spyOn(findAXReactivationMissions, 'callback');

    // Act (Global)
    await findAXReactivationMissions.callback(discordBot, message);

  });

  it('Command /findAXReactivationMissions reply Should Match', async() => {

    // Arrange

    // Act

    // Assert
    expect(discordBot.getLogger().error.mock.calls).toHaveLength(0);
    expect(spyOnCallBack.mock.calls).toHaveLength(1);
    expect(apiGetDcohWatchAPIOverview.mock.calls).toHaveLength(1);

    expect(message.editReply).toHaveBeenCalledWith({ "content": `\`\`\`╔═══════════════════════════════════════════════════════╗
║               AX Reactivation missions                ║
╠═════════════╦════════════════╦═══════╦════════════════╣
║ System Name ║ Thargoid State ║ Titan ║ M. settlements ║
╠═════════════╬════════════════╬═══════╬════════════════╣
║ HIP 20616   ║ Alert          ║ Indra ║       12       ║
║ Scythia     ║ Alert          ║ Indra ║       0        ║
╚═════════════╩════════════════╩═══════╩════════════════╝
\`\`\`` });

  });

});
