const { when } = require('jest-when');

const config = require('../conf/config.test.json');
const discordBot = require("../src/configure/discordBot");
const findLootAnarchyMiningSettlements = require("../src/commands/elitedangerous/findLootAnarchyMiningSettlements");


const apiGetInaraMiningAnarchyLootSettlements = require('../src/utils/apiGetInaraMiningAnarchyLootSettlements');
jest.mock('../src/utils/apiGetInaraMiningAnarchyLootSettlements');


describe('Command findLootAnarchyMiningSettlements.js tests', () => {
  let spyOnCallBack;
  let message;

  beforeAll(async() => {
    // Arrange (Global)
    when(apiGetInaraMiningAnarchyLootSettlements).calledWith('Wolf 12').mockReturnValue([
      {
        Station: 'Acharya Extraction Facility',
        StarSystem: 'Wolf 12',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '3,837 Ls',
        Dist: '0',
        Updated: '48 minutes ago'
      },
      {
        Station: 'Ashford Extraction Territory',
        StarSystem: 'Wolf 12',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '3,835 Ls',
        Dist: '0',
        Updated: '48 minutes ago'
      },
      {
        Station: 'Bassett Extraction Territory',
        StarSystem: 'Wolf 12',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '3,842 Ls',
        Dist: '0',
        Updated: '48 minutes ago'
      },
      {
        Station: 'Azevedo Mines',
        StarSystem: 'Wolf 12',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '3,830 Ls',
        Dist: '0',
        Updated: '48 minutes ago'
      },
      {
        Station: 'Crowther Excavation Platform',
        StarSystem: 'Wolf 12',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '3,831 Ls',
        Dist: '0',
        Updated: '48 minutes ago'
      },
      {
        Station: 'Jenkerson Mining Enterprise',
        StarSystem: 'Wolf 12',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '3,842 Ls',
        Dist: '0',
        Updated: '48 minutes ago'
      },
      {
        Station: 'Gonzalez Dredging Site',
        StarSystem: 'Wolf 12',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '3,843 Ls',
        Dist: '0',
        Updated: '48 minutes ago'
      },
      {
        Station: 'Franko Drilling Exchange',
        StarSystem: 'Wolf 12',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '3,829 Ls',
        Dist: '0',
        Updated: '48 minutes ago'
      },
      {
        Station: 'Moloi Dredging Platform',
        StarSystem: 'Wolf 12',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '3,838 Ls',
        Dist: '0',
        Updated: '48 minutes ago'
      },
      {
        Station: 'Estrada Prospecting',
        StarSystem: 'Wolf 12',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '3,838 Ls',
        Dist: '0',
        Updated: '48 minutes ago'
      },
      {
        Station: 'Onai Mineralogic Territory',
        StarSystem: 'Wolf 12',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '3,837 Ls',
        Dist: '0',
        Updated: '48 minutes ago'
      },
      {
        Station: 'Beauchene Metallurgic Enterprise',
        StarSystem: 'Yen Ti',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '1,312 Ls',
        Dist: '11.44',
        Updated: '48 minutes ago'
      },
      {
        Station: 'Hutchinson Excavation Platform',
        StarSystem: 'Yen Ti',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '1,313 Ls',
        Dist: '11.44',
        Updated: '48 minutes ago'
      },
      {
        Station: 'Malyarenko Metallurgic Exploration',
        StarSystem: 'Yen Ti',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '543 Ls',
        Dist: '11.44',
        Updated: '48 minutes ago'
      },
      {
        Station: "Ghatak's Quarry",
        StarSystem: 'Yen Ti',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '542 Ls',
        Dist: '11.44',
        Updated: '48 minutes ago'
      },
      {
        Station: 'Winkler Excavation Territory',
        StarSystem: 'Terra Mater',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '1,536 Ls',
        Dist: '18.69',
        Updated: '48 minutes ago'
      },
      {
        Station: 'Kamga Prospecting Station',
        StarSystem: 'Terra Mater',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '1,089 Ls',
        Dist: '18.69',
        Updated: '48 minutes ago'
      },
      {
        Station: 'Adsoy Metallurgic Site',
        StarSystem: 'Terra Mater',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '2,643 Ls',
        Dist: '18.69',
        Updated: '48 minutes ago'
      },
      {
        Station: 'Anand Mineralogic Platform',
        StarSystem: 'Terra Mater',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '1,535 Ls',
        Dist: '18.69',
        Updated: '48 minutes ago'
      },
      {
        Station: 'McCabe Mineralogic Hub',
        StarSystem: 'Terra Mater',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '1,533 Ls',
        Dist: '18.69',
        Updated: '48 minutes ago'
      },
      {
        Station: 'Adsoy Excavation Base',
        StarSystem: 'Terra Mater',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '1,525 Ls',
        Dist: '18.69',
        Updated: '48 minutes ago'
      },
      {
        Station: 'Horsman Mining Station',
        StarSystem: 'Terra Mater',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '1,083 Ls',
        Dist: '18.69',
        Updated: '48 minutes ago'
      },
      {
        Station: 'Alasa Extraction Base',
        StarSystem: 'Li Tzicnii',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '2,027 Ls',
        Dist: '30.56',
        Updated: '20 hours ago'
      },
      {
        Station: 'Pomeroy Mineralogic Hub',
        StarSystem: 'Huiche',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '1,087 Ls',
        Dist: '31.17',
        Updated: '48 minutes ago'
      },
      {
        Station: 'Daramy Drilling Rigs',
        StarSystem: 'Huiche',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '1,086 Ls',
        Dist: '31.17',
        Updated: '48 minutes ago'
      },
      {
        Station: 'Busch Mineralogic Platform',
        StarSystem: 'Arawoyn',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '929 Ls',
        Dist: '31.62',
        Updated: '48 minutes ago'
      },
      {
        Station: 'Openko Drilling Site',
        StarSystem: 'Hebe',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '1,016 Ls',
        Dist: '32.10',
        Updated: '19 hours ago'
      },
      {
        Station: 'Munoz Prospecting Site',
        StarSystem: 'Hebe',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '1,516 Ls',
        Dist: '32.10',
        Updated: '19 hours ago'
      },
      {
        Station: 'Gokhale Metallurgic Station',
        StarSystem: '64 Piscium',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '307 Ls',
        Dist: '33.24',
        Updated: '2 days ago'
      },
      {
        Station: 'Farrow Metallurgic Enterprise',
        StarSystem: 'Ququve',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '214 Ls',
        Dist: '33.30',
        Updated: '48 minutes ago'
      },
      {
        Station: 'Kulkarni Metallurgic Exploration',
        StarSystem: 'Ququve',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '214 Ls',
        Dist: '33.30',
        Updated: '4 hours ago'
      },
      {
        Station: 'Sartre Mining Prospect',
        StarSystem: 'Beldarkri',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '1,967 Ls',
        Dist: '34.36',
        Updated: '48 minutes ago'
      },
      {
        Station: "Imai's Prospect",
        StarSystem: 'Beldarkri',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '1,441 Ls',
        Dist: '34.36',
        Updated: '48 minutes ago'
      },
      {
        Station: 'Pelissier Extraction Prospect',
        StarSystem: 'Beldarkri',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '1,446 Ls',
        Dist: '34.36',
        Updated: '48 minutes ago'
      },
      {
        Station: 'Gunther Dredging Site',
        StarSystem: 'Beldarkri',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '1,429 Ls',
        Dist: '34.36',
        Updated: '48 minutes ago'
      },
      {
        Station: 'Jayashankar Dredging Base',
        StarSystem: 'Beldarkri',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '1,437 Ls',
        Dist: '34.36',
        Updated: '48 minutes ago'
      },
      {
        Station: 'Morelli Dredging Hub',
        StarSystem: 'Beldarkri',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '1,425 Ls',
        Dist: '34.36',
        Updated: '48 minutes ago'
      },
      {
        Station: 'Walker Extraction Enterprise',
        StarSystem: 'Beldarkri',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '258 Ls',
        Dist: '34.36',
        Updated: '21 hours ago'
      },
      {
        Station: 'Valenzuela Metallurgic Exchange',
        StarSystem: 'Beldarkri',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '1,961 Ls',
        Dist: '34.36',
        Updated: '48 minutes ago'
      },
      {
        Station: 'Malik Dredging Exchange',
        StarSystem: 'BD+32 4747',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '2,126 Ls',
        Dist: '40.11',
        Updated: '4 days ago'
      },
      {
        Station: "Soto's Prospect",
        StarSystem: 'BD+32 4747',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '2,126 Ls',
        Dist: '40.11',
        Updated: '4 days ago'
      },
      {
        Station: 'Yeo Dredging Hub',
        StarSystem: 'BD+32 4747',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '845 Ls',
        Dist: '40.11',
        Updated: '4 days ago'
      },
      {
        Station: 'Nomura Dredging Territory',
        StarSystem: 'BD+32 4747',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '851 Ls',
        Dist: '40.11',
        Updated: '4 days ago'
      },
      {
        Station: 'Baruwal Deposits',
        StarSystem: 'Wonorne Nu',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '1,116 Ls',
        Dist: '42.26',
        Updated: '48 minutes ago'
      },
      {
        Station: 'Foster Prospecting',
        StarSystem: 'Wonorne Nu',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '1,117 Ls',
        Dist: '42.26',
        Updated: '48 minutes ago'
      },
      {
        Station: 'Faiers Drilling Exchange',
        StarSystem: 'Ausan',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '31 Ls',
        Dist: '43.53',
        Updated: '19 hours ago'
      },
      {
        Station: 'Enver Mineralogic Exploration',
        StarSystem: 'LHS 64',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '101 Ls',
        Dist: '48.56',
        Updated: '19 hours ago'
      },
      {
        Station: 'Geeson Extraction Complex',
        StarSystem: 'Hel',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '787 Ls',
        Dist: '49.38',
        Updated: '8 minutes ago'
      },
      {
        Station: 'Dubey Drilling Base',
        StarSystem: 'BD+49 3937',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '2,304 Ls',
        Dist: '49.42',
        Updated: '1 day ago'
      },
      {
        Station: 'Semwal Prospecting Station',
        StarSystem: 'Maujinagoto',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '518 Ls',
        Dist: '50.50',
        Updated: '1 hour ago'
      },
      {
        Station: 'Dawes Deposits',
        StarSystem: 'LP 1-52',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '2,015 Ls',
        Dist: '50.99',
        Updated: '6 hours ago'
      },
      {
        Station: 'Ishikawa Excavation Complex',
        StarSystem: 'Vega',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '1,805 Ls',
        Dist: '52.02',
        Updated: '1 hour ago'
      },
      {
        Station: "Maslo's Quarry",
        StarSystem: 'Caill Reddi',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '103 Ls',
        Dist: '53.73',
        Updated: '14 hours ago'
      },
      {
        Station: 'Smith Metallurgic Reserve',
        StarSystem: 'Caill Reddi',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '73 Ls',
        Dist: '53.73',
        Updated: '48 minutes ago'
      },
      {
        Station: "Carrasco's Reserve",
        StarSystem: 'Caill Reddi',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '103 Ls',
        Dist: '53.73',
        Updated: '14 hours ago'
      },
      {
        Station: 'Dibrova Drilling Rigs',
        StarSystem: 'Caill Reddi',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '73 Ls',
        Dist: '53.73',
        Updated: '48 minutes ago'
      },
      {
        Station: 'Watson Mineralogic Hub',
        StarSystem: 'Caill Reddi',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '24 Ls',
        Dist: '53.73',
        Updated: '14 hours ago'
      },
      {
        Station: 'Rivero Mineralogic Territory',
        StarSystem: 'Caill Reddi',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '1,528 Ls',
        Dist: '53.73',
        Updated: '48 minutes ago'
      },
      {
        Station: 'Markey Mineralogic Facility',
        StarSystem: '111 Tauri',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '4,660 Ls',
        Dist: '55.74',
        Updated: '6 hours ago'
      },
      {
        Station: "Feng's Reserve",
        StarSystem: '111 Tauri',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '4,660 Ls',
        Dist: '55.74',
        Updated: '6 hours ago'
      },
      {
        Station: 'Kabbah Metallurgic Complex',
        StarSystem: '111 Tauri',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '4,658 Ls',
        Dist: '55.74',
        Updated: '6 hours ago'
      },
      {
        Station: 'Gonchar Extraction Rigs',
        StarSystem: '111 Tauri',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '4,662 Ls',
        Dist: '55.74',
        Updated: '6 hours ago'
      },
      {
        Station: 'Mallett Mining Territory',
        StarSystem: '111 Tauri',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '4,659 Ls',
        Dist: '55.74',
        Updated: '6 hours ago'
      },
      {
        Station: 'Vercher Excavation Prospect',
        StarSystem: '111 Tauri',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '4,660 Ls',
        Dist: '55.74',
        Updated: '6 hours ago'
      },
      {
        Station: 'Zelenko Prospecting Station',
        StarSystem: '111 Tauri',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '4,664 Ls',
        Dist: '55.74',
        Updated: '6 hours ago'
      },
      {
        Station: "Lehmann's Claim",
        StarSystem: '111 Tauri',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '4,662 Ls',
        Dist: '55.74',
        Updated: '6 hours ago'
      },
      {
        Station: 'Lymar Drilling Base',
        StarSystem: '111 Tauri',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '4,649 Ls',
        Dist: '55.74',
        Updated: '6 hours ago'
      },
      {
        Station: 'Herrera Metallurgic Claim',
        StarSystem: 'Momus Reach',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '3,500 Ls',
        Dist: '55.87',
        Updated: '22 minutes ago'
      },
      {
        Station: 'Dubey Dredging Hub',
        StarSystem: 'LTT 149',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '3,392 Ls',
        Dist: '57.15',
        Updated: '47 minutes ago'
      },
      {
        Station: 'Zhong Extraction Site',
        StarSystem: 'Daruwutja',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '787 Ls',
        Dist: '57.86',
        Updated: '5 hours ago'
      },
      {
        Station: 'Kambanda Mineralogic Reserve',
        StarSystem: 'Daruwutja',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '725 Ls',
        Dist: '57.86',
        Updated: '5 hours ago'
      },
      {
        Station: 'Dykul Drilling Territory',
        StarSystem: 'Daruwutja',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '701 Ls',
        Dist: '57.86',
        Updated: '5 hours ago'
      },
      {
        Station: 'Rios Metallurgic Platform',
        StarSystem: 'LTT 10410',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '3,444 Ls',
        Dist: '58.91',
        Updated: '4 hours ago'
      },
      {
        Station: 'Deloney Metallurgic Complex',
        StarSystem: 'Wolf 1301',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '852 Ls',
        Dist: '61.27',
        Updated: '11 hours ago'
      },
      {
        Station: 'Lawty Excavation Territory',
        StarSystem: 'Kudiyu',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '582 Ls',
        Dist: '61.52',
        Updated: '2 days ago'
      },
      {
        Station: 'Rhee Metallurgic Reserve',
        StarSystem: 'Kudiyu',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '312 Ls',
        Dist: '61.52',
        Updated: '2 days ago'
      },
      {
        Station: "Jeon's Prospect",
        StarSystem: 'Kudiyu',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '582 Ls',
        Dist: '61.52',
        Updated: '2 days ago'
      },
      {
        Station: 'Jun Mineralogic Enterprise',
        StarSystem: 'Kudiyu',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '434 Ls',
        Dist: '61.52',
        Updated: '2 days ago'
      },
      {
        Station: 'Aloisio Extraction Exchange',
        StarSystem: 'Kudiyu',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '312 Ls',
        Dist: '61.52',
        Updated: '2 days ago'
      },
      {
        Station: 'Prytula Metallurgic Exploration',
        StarSystem: 'Tirfing',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '257 Ls',
        Dist: '61.57',
        Updated: '48 minutes ago'
      },
      {
        Station: 'Brinkmann Mineralogic Hub',
        StarSystem: 'Tirfing',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '3,021 Ls',
        Dist: '61.57',
        Updated: '48 minutes ago'
      },
      {
        Station: 'Patel Dredging Territory',
        StarSystem: 'Tirfing',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '2,006 Ls',
        Dist: '61.57',
        Updated: '48 minutes ago'
      },
      {
        Station: 'Bellegrade Excavation Platform',
        StarSystem: 'Tirfing',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '1,219 Ls',
        Dist: '61.57',
        Updated: '48 minutes ago'
      },
      {
        Station: 'Galitzki Prospecting Facility',
        StarSystem: 'Tirfing',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '258 Ls',
        Dist: '61.57',
        Updated: '48 minutes ago'
      },
      {
        Station: 'Blanchard Drilling Exploration',
        StarSystem: 'Tirfing',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '257 Ls',
        Dist: '61.57',
        Updated: '48 minutes ago'
      },
      {
        Station: "Olanrewaju's Territory",
        StarSystem: 'Pollux',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '2,250 Ls',
        Dist: '62.37',
        Updated: '5 hours ago'
      },
      {
        Station: 'Dynamo Mineralogic Territory',
        StarSystem: 'Pollux',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '2,254 Ls',
        Dist: '62.37',
        Updated: '5 hours ago'
      },
      {
        Station: 'Furnival Mineralogic Hub',
        StarSystem: 'Ix Chim',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '626 Ls',
        Dist: '64.14',
        Updated: '19 hours ago'
      },
      {
        Station: 'Shewayish Drilling Site',
        StarSystem: 'Umistan',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '13 Ls',
        Dist: '64.41',
        Updated: '3 hours ago'
      },
      {
        Station: 'Modi Mineralogic Complex',
        StarSystem: 'Meiri',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '1,339 Ls',
        Dist: '66.54',
        Updated: '6 hours ago'
      },
      {
        Station: 'Li Drilling Base',
        StarSystem: 'Tarach Tor',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '1,288 Ls',
        Dist: '67.66',
        Updated: '7 hours ago'
      },
      {
        Station: 'Berezuk Mining Enterprise',
        StarSystem: 'Lokapuri',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '945 Ls',
        Dist: '68.55',
        Updated: '18 hours ago'
      },
      {
        Station: 'Newberry Extraction Rigs',
        StarSystem: 'Ross 1051',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '236 Ls',
        Dist: '70.04',
        Updated: '2 hours ago'
      },
      {
        Station: 'Mendoza Dredging Platform',
        StarSystem: 'Clotti',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '2,320 Ls',
        Dist: '70.90',
        Updated: '2 days ago'
      },
      {
        Station: 'Wan Mineralogic Site',
        StarSystem: 'Sosolingati',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '1,393 Ls',
        Dist: '70.99',
        Updated: '11 hours ago'
      },
      {
        Station: 'Leclerc Extraction Platform',
        StarSystem: 'Zhao Tzu',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '10 Ls',
        Dist: '72.05',
        Updated: '16 minutes ago'
      },
      {
        Station: 'Reyes Drilling Complex',
        StarSystem: 'Zhao Tzu',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '-',
        Dist: '72.05',
        Updated: '16 minutes ago'
      },
      {
        Station: 'Leroy Excavation Enterprise',
        StarSystem: 'Shibboleth',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '1,114 Ls',
        Dist: '72.95',
        Updated: '4 hours ago'
      },
      {
        Station: 'Hlatshwayo Metallurgic Hub',
        StarSystem: 'Munfayl',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '3,619 Ls',
        Dist: '74.03',
        Updated: '4 hours ago'
      },
      {
        Station: 'Zadzisai Metallurgic Territory',
        StarSystem: 'Ross 342',
        Economy: 'Extraction',
        Government: 'Anarchy',
        Allegiance: 'Independent',
        StationDistance: '696 Ls',
        Dist: '74.43',
        Updated: '23 hours ago'
      }]);

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

    when(message.options.get).calledWith('system-name').mockReturnValue({ value: 'Wolf 12' });

    spyOnCallBack = jest.spyOn(findLootAnarchyMiningSettlements, 'callback');

    // Act (Global)
    await findLootAnarchyMiningSettlements.callback(discordBot, message);

  });

  it('Command /findLootAnarchyMiningSettlements reply Should Match', async() => {

    // Arrange

    // Act

    // Assert
    expect(discordBot.getLogger().error.mock.calls).toHaveLength(0);
    expect(spyOnCallBack.mock.calls).toHaveLength(1);

    expect(message.editReply).toHaveBeenCalledWith({ "content": `\`\`\`System: Wolf 12 Last updated: 48 minutes ago
Acharya Extraction Facility (3,837 Ls)
Ashford Extraction Territory (3,835 Ls)
Bassett Extraction Territory (3,842 Ls)
Azevedo Mines (3,830 Ls)
Crowther Excavation Platform (3,831 Ls)
Jenkerson Mining Enterprise (3,842 Ls)
Gonzalez Dredging Site (3,843 Ls)
Franko Drilling Exchange (3,829 Ls)
Moloi Dredging Platform (3,838 Ls)
Estrada Prospecting (3,838 Ls)
Onai Mineralogic Territory (3,837 Ls)
\`\`\`` });

  });

});
