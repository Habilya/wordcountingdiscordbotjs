const { when } = require('jest-when');

const config = require('../conf/config.test.json');
const discordBot = require("../src/configure/discordBot");
const findLootAnarchyMiningSystems = require("../src/commands/elitedangerous/findLootAnarchyMiningSystems");


const apiGetInaraMiningAnarchyLootSettlements = require('../src/utils/apiGetInaraMiningAnarchyLootSettlements');
jest.mock('../src/utils/apiGetInaraMiningAnarchyLootSettlements');


describe('Command findLootAnarchyMiningSystems.js tests', () => {
  let spyOnCallBack;
  let message;

  beforeAll(async() => {
    // Arrange (Global)
    when(apiGetInaraMiningAnarchyLootSettlements).calledWith('Sol').mockReturnValue([
      {
        "Allegiance": "Independent",
        "Dist": "25.04",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Vega",
        "Station": "Ishikawa Excavation Complex",
        "StationDistance": "1,805 Ls",
        "Updated": "4 hours ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "25.52",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Sosolingati",
        "Station": "Wan Mineralogic Site",
        "StationDistance": "1,394 Ls",
        "Updated": "8 hours ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "33.78",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Pollux",
        "Station": "Dynamo Mineralogic Territory",
        "StationDistance": "2,254 Ls",
        "Updated": "2 hours ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "33.78",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Pollux",
        "Station": "Olanrewaju's Territory",
        "StationDistance": "2,250 Ls",
        "Updated": "2 hours ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "34.55",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Shoujeman",
        "Station": "Taylor Prospecting Facility",
        "StationDistance": "3,270 Ls",
        "Updated": "4 hours ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "34.55",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Shoujeman",
        "Station": "Osnovianenko Drilling Station",
        "StationDistance": "3,279 Ls",
        "Updated": "4 hours ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "43.38",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "CD-55 1514",
        "Station": "Linnett Drilling Facility",
        "StationDistance": "474 Ls",
        "Updated": "3 hours ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "46.94",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "111 Tauri",
        "Station": "Lymar Drilling Base",
        "StationDistance": "4,649 Ls",
        "Updated": "4 hours ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "46.94",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "111 Tauri",
        "Station": "Markey Mineralogic Facility",
        "StationDistance": "4,660 Ls",
        "Updated": "4 hours ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "46.94",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "111 Tauri",
        "Station": "Feng's Reserve",
        "StationDistance": "4,660 Ls",
        "Updated": "4 hours ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "46.94",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "111 Tauri",
        "Station": "Kabbah Metallurgic Complex",
        "StationDistance": "4,658 Ls",
        "Updated": "4 hours ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "46.94",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "111 Tauri",
        "Station": "Gonchar Extraction Rigs",
        "StationDistance": "4,662 Ls",
        "Updated": "4 hours ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "46.94",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "111 Tauri",
        "Station": "Mallett Mining Territory",
        "StationDistance": "4,659 Ls",
        "Updated": "4 hours ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "46.94",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "111 Tauri",
        "Station": "Vercher Excavation Prospect",
        "StationDistance": "4,660 Ls",
        "Updated": "4 hours ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "46.94",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "111 Tauri",
        "Station": "Zelenko Prospecting Station",
        "StationDistance": "4,664 Ls",
        "Updated": "4 hours ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "46.94",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "111 Tauri",
        "Station": "Lehmann's Claim",
        "StationDistance": "4,662 Ls",
        "Updated": "4 hours ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "53.30",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Nuakea",
        "Station": "Ptaszynski Metallurgic Exploration",
        "StationDistance": "1,181 Ls",
        "Updated": "10 hours ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "53.83",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "9 Puppis",
        "Station": "Figueroa's Quarry",
        "StationDistance": "1,272 Ls",
        "Updated": "7 hours ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "56.21",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "LSE 239",
        "Station": "Vasquez Prospecting Complex",
        "StationDistance": "1,751 Ls",
        "Updated": "2 hours ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "56.54",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Wolf 12",
        "Station": "Gonzalez Dredging Site",
        "StationDistance": "3,843 Ls",
        "Updated": "59 minutes ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "56.54",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Wolf 12",
        "Station": "Franko Drilling Exchange",
        "StationDistance": "3,829 Ls",
        "Updated": "59 minutes ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "56.54",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Wolf 12",
        "Station": "Moloi Dredging Platform",
        "StationDistance": "3,838 Ls",
        "Updated": "59 minutes ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "56.54",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Wolf 12",
        "Station": "Estrada Prospecting",
        "StationDistance": "3,838 Ls",
        "Updated": "59 minutes ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "56.54",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Wolf 12",
        "Station": "Onai Mineralogic Territory",
        "StationDistance": "3,837 Ls",
        "Updated": "59 minutes ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "56.54",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Wolf 12",
        "Station": "Acharya Extraction Facility",
        "StationDistance": "3,837 Ls",
        "Updated": "59 minutes ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "56.54",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Wolf 12",
        "Station": "Ashford Extraction Territory",
        "StationDistance": "3,835 Ls",
        "Updated": "59 minutes ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "56.54",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Wolf 12",
        "Station": "Bassett Extraction Territory",
        "StationDistance": "3,842 Ls",
        "Updated": "59 minutes ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "56.54",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Wolf 12",
        "Station": "Azevedo Mines",
        "StationDistance": "3,830 Ls",
        "Updated": "59 minutes ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "56.54",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Wolf 12",
        "Station": "Crowther Excavation Platform",
        "StationDistance": "3,831 Ls",
        "Updated": "59 minutes ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "56.54",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Wolf 12",
        "Station": "Jenkerson Mining Enterprise",
        "StationDistance": "3,842 Ls",
        "Updated": "59 minutes ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "57.06",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Hors",
        "Station": "Anyadike's Prospect",
        "StationDistance": "2,662 Ls",
        "Updated": "3 hours ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "57.06",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Hors",
        "Station": "Powell Extraction Hub",
        "StationDistance": "1,500 Ls",
        "Updated": "3 hours ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "57.06",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Hors",
        "Station": "Penfold Drilling Facility",
        "StationDistance": "1,500 Ls",
        "Updated": "3 hours ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "57.06",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Hors",
        "Station": "Baltazar Extraction Hub",
        "StationDistance": "2,653 Ls",
        "Updated": "3 hours ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "57.06",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Hors",
        "Station": "Beck Extraction Platform",
        "StationDistance": "2,572 Ls",
        "Updated": "3 hours ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "57.06",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Hors",
        "Station": "Leiva Metallurgic Complex",
        "StationDistance": "1,498 Ls",
        "Updated": "3 hours ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "57.06",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Hors",
        "Station": "Abe's Reserve",
        "StationDistance": "2,663 Ls",
        "Updated": "3 hours ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "57.06",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Hors",
        "Station": "Adelakun Mining Complex",
        "StationDistance": "1,501 Ls",
        "Updated": "3 hours ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "57.06",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Hors",
        "Station": "Macleod Mining Complex",
        "StationDistance": "1,496 Ls",
        "Updated": "3 hours ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "57.06",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Hors",
        "Station": "Klein Excavation Prospect",
        "StationDistance": "1,502 Ls",
        "Updated": "3 hours ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "57.06",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Hors",
        "Station": "Kamara Mineralogic Exploration",
        "StationDistance": "3,835 Ls",
        "Updated": "3 hours ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "57.06",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Hors",
        "Station": "Desikan Extraction Rigs",
        "StationDistance": "1,500 Ls",
        "Updated": "3 hours ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "57.06",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Hors",
        "Station": "Lagarde Prospecting Installation",
        "StationDistance": "2,635 Ls",
        "Updated": "3 hours ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "57.06",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Hors",
        "Station": "Wada Extraction Base",
        "StationDistance": "1,500 Ls",
        "Updated": "3 hours ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "57.06",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Hors",
        "Station": "Pozandr Mineralogic Reserve",
        "StationDistance": "2,572 Ls",
        "Updated": "3 hours ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "58.23",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Ross 1051",
        "Station": "Newberry Extraction Rigs",
        "StationDistance": "236 Ls",
        "Updated": "4 hours ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "62.42",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Shibboleth",
        "Station": "Leroy Excavation Enterprise",
        "StationDistance": "1,114 Ls",
        "Updated": "1 hour ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "63.93",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Parjanya",
        "Station": "Hyde Mineralogic Platform",
        "StationDistance": "3,383 Ls",
        "Updated": "6 hours ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "65.37",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Nganeru",
        "Station": "Verne Drilling Exploration",
        "StationDistance": "588 Ls",
        "Updated": "5 hours ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "66.33",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Yen Ti",
        "Station": "Malyarenko Metallurgic Exploration",
        "StationDistance": "543 Ls",
        "Updated": "59 minutes ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "66.33",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Yen Ti",
        "Station": "Ghatak's Quarry",
        "StationDistance": "542 Ls",
        "Updated": "59 minutes ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "66.33",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Yen Ti",
        "Station": "Beauchene Metallurgic Enterprise",
        "StationDistance": "1,312 Ls",
        "Updated": "59 minutes ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "66.33",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Yen Ti",
        "Station": "Hutchinson Excavation Platform",
        "StationDistance": "1,313 Ls",
        "Updated": "59 minutes ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "66.57",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "LP 1-52",
        "Station": "Dawes Deposits",
        "StationDistance": "2,015 Ls",
        "Updated": "3 hours ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "69.73",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Terra Mater",
        "Station": "Adsoy Excavation Base",
        "StationDistance": "1,525 Ls",
        "Updated": "59 minutes ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "69.73",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Terra Mater",
        "Station": "Horsman Mining Station",
        "StationDistance": "1,083 Ls",
        "Updated": "59 minutes ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "69.73",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Terra Mater",
        "Station": "Winkler Excavation Territory",
        "StationDistance": "1,536 Ls",
        "Updated": "59 minutes ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "69.73",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Terra Mater",
        "Station": "Kamga Prospecting Station",
        "StationDistance": "1,089 Ls",
        "Updated": "59 minutes ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "69.73",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Terra Mater",
        "Station": "Adsoy Metallurgic Site",
        "StationDistance": "2,643 Ls",
        "Updated": "59 minutes ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "69.73",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Terra Mater",
        "Station": "Anand Mineralogic Platform",
        "StationDistance": "1,535 Ls",
        "Updated": "59 minutes ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "69.73",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Terra Mater",
        "Station": "McCabe Mineralogic Hub",
        "StationDistance": "1,533 Ls",
        "Updated": "59 minutes ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "70.91",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "LPM 696",
        "Station": "Khmelnytsky Dredging Territory",
        "StationDistance": "992 Ls",
        "Updated": "1 day ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "71.93",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Mat Zemlya",
        "Station": "Moloi Excavation Facility",
        "StationDistance": "1,415 Ls",
        "Updated": "1 hour ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "71.93",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Mat Zemlya",
        "Station": "Noel Metallurgic Reserve",
        "StationDistance": "1,416 Ls",
        "Updated": "1 hour ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "72.33",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "LTT 198",
        "Station": "Chakraborty Mineralogic Hub",
        "StationDistance": "1,376 Ls",
        "Updated": "17 minutes ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "72.33",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "LTT 198",
        "Station": "Quinn Mineralogic Exploration",
        "StationDistance": "1,378 Ls",
        "Updated": "17 minutes ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "72.33",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "LTT 198",
        "Station": "Panasenko Metallurgic Site",
        "StationDistance": "3,262 Ls",
        "Updated": "17 minutes ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "72.33",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "LTT 198",
        "Station": "Guerrero Mining Station",
        "StationDistance": "3,265 Ls",
        "Updated": "17 minutes ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "72.33",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "LTT 198",
        "Station": "Pidkova Metallurgic Station",
        "StationDistance": "1,054 Ls",
        "Updated": "17 minutes ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "72.42",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "BD-10 5238",
        "Station": "Nakagawa's Reserve",
        "StationDistance": "1,668 Ls",
        "Updated": "11 hours ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "75.84",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "LTT 149",
        "Station": "Dubey Dredging Hub",
        "StationDistance": "3,392 Ls",
        "Updated": "21 hours ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "76.51",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "64 Piscium",
        "Station": "Gokhale Metallurgic Station",
        "StationDistance": "307 Ls",
        "Updated": "2 days ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "76.61",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Ququve",
        "Station": "Kulkarni Metallurgic Exploration",
        "StationDistance": "214 Ls",
        "Updated": "2 hours ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "76.61",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Ququve",
        "Station": "Farrow Metallurgic Enterprise",
        "StationDistance": "214 Ls",
        "Updated": "59 minutes ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "77.68",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "23 h Ursae Majoris",
        "Station": "Pidkova Mining Installation",
        "StationDistance": "1,436 Ls",
        "Updated": "4 hours ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "78.24",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "LHS 64",
        "Station": "Enver Mineralogic Exploration",
        "StationDistance": "101 Ls",
        "Updated": "16 hours ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "78.43",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Boloo",
        "Station": "Lobbo Drilling Installation",
        "StationDistance": "914 Ls",
        "Updated": "34 minutes ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "78.97",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Huiche",
        "Station": "Pomeroy Mineralogic Hub",
        "StationDistance": "1,087 Ls",
        "Updated": "59 minutes ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "78.97",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Huiche",
        "Station": "Daramy Drilling Rigs",
        "StationDistance": "1,086 Ls",
        "Updated": "59 minutes ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "79.63",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Hodack",
        "Station": "Van Leeuwen Metallurgic Reserve",
        "StationDistance": "319 Ls",
        "Updated": "3 hours ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "80.26",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Lokapuri",
        "Station": "Berezuk Mining Enterprise",
        "StationDistance": "945 Ls",
        "Updated": "15 hours ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "81.00",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Utse",
        "Station": "Wright Extraction Enterprise",
        "StationDistance": "2,760 Ls",
        "Updated": "6 hours ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "81.50",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Hebe",
        "Station": "Openko Drilling Site",
        "StationDistance": "1,016 Ls",
        "Updated": "16 hours ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "81.50",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Hebe",
        "Station": "Munoz Prospecting Site",
        "StationDistance": "1,516 Ls",
        "Updated": "16 hours ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "81.51",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Maujinagoto",
        "Station": "Semwal Prospecting Station",
        "StationDistance": "518 Ls",
        "Updated": "16 hours ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "81.65",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Li Tzicnii",
        "Station": "Alasa Extraction Base",
        "StationDistance": "2,027 Ls",
        "Updated": "17 hours ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "83.12",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "LTT 305",
        "Station": "Lavoie Extraction Territory",
        "StationDistance": "638 Ls",
        "Updated": "23 minutes ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "83.19",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Phekda",
        "Station": "Slusar Mining Prospect",
        "StationDistance": "1,138 Ls",
        "Updated": "2 minutes ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "83.58",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Beldarkri",
        "Station": "Gunther Dredging Site",
        "StationDistance": "1,429 Ls",
        "Updated": "59 minutes ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "83.58",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Beldarkri",
        "Station": "Jayashankar Dredging Base",
        "StationDistance": "1,437 Ls",
        "Updated": "59 minutes ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "83.58",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Beldarkri",
        "Station": "Walker Extraction Enterprise",
        "StationDistance": "258 Ls",
        "Updated": "18 hours ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "83.58",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Beldarkri",
        "Station": "Morelli Dredging Hub",
        "StationDistance": "1,425 Ls",
        "Updated": "59 minutes ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "83.58",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Beldarkri",
        "Station": "Valenzuela Metallurgic Exchange",
        "StationDistance": "1,961 Ls",
        "Updated": "59 minutes ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "83.58",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Beldarkri",
        "Station": "Sartre Mining Prospect",
        "StationDistance": "1,967 Ls",
        "Updated": "59 minutes ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "83.58",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Beldarkri",
        "Station": "Imai's Prospect",
        "StationDistance": "1,441 Ls",
        "Updated": "59 minutes ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "83.58",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Beldarkri",
        "Station": "Pelissier Extraction Prospect",
        "StationDistance": "1,446 Ls",
        "Updated": "59 minutes ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "84.04",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Djak",
        "Station": "Neborak Metallurgic Enterprise",
        "StationDistance": "157 Ls",
        "Updated": "8 hours ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "84.45",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "UGP 92",
        "Station": "Matsuda Metallurgic Facility",
        "StationDistance": "293 Ls",
        "Updated": "25 minutes ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "84.45",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "UGP 92",
        "Station": "Vasquez Prospecting Hub",
        "StationDistance": "294 Ls",
        "Updated": "25 minutes ago",
      },
      {
        "Allegiance": "Independent",
        "Dist": "84.45",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "UGP 92",
        "Station": "Archambeau Dredging Site",
        "StationDistance": "297 Ls",
        "Updated": "25 minutes ago",
      },
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
      content: 'findaxreactivationmissions',
      options: { get: jest.fn() },
    };

    when(message.options.get).calledWith('system-name').mockReturnValue({ value: 'Sol' });

    spyOnCallBack = jest.spyOn(findLootAnarchyMiningSystems, 'callback');

    // Act (Global)
    await findLootAnarchyMiningSystems.callback(discordBot, message);

  });

  it('Command /findLootAnarchyMiningSystems reply Should Match', async() => {

    // Arrange

    // Act

    // Assert
    expect(discordBot.getLogger().error.mock.calls).toHaveLength(0);
    expect(spyOnCallBack.mock.calls).toHaveLength(1);

    expect(message.editReply).toHaveBeenCalledWith({ "content": `\`\`\`Hors (15) (3 hours ago)
Wolf 12 (11) (59 minutes ago)
111 Tauri (9) (4 hours ago)
Beldarkri (8) (59 minutes ago)
Terra Mater (7) (59 minutes ago)
LTT 198 (5) (17 minutes ago)
Yen Ti (4) (59 minutes ago)
UGP 92 (3) (25 minutes ago)
Pollux (2) (2 hours ago)
Shoujeman (2) (4 hours ago)
\`\`\`` });

  });

});
