const arrayFunctions = require("../src/utils/arrayFunctions");

describe('arrayFunctions.js tests', () => {

  it('arrayFunctions.intersectManyOneDimensionalArrays Should Match', () => {
    // Arrange
    let expected = ['apple', 'orange'];

    let array1 = ['apple', 'carrot', 'potato', 'orange', 'grapes'];
    let array2 = ['apple', 'orange'];
    let array3 = ['strawbery', 'apple', 'orange', 'water melon', 'grapes'];

    // Act
    let actual = arrayFunctions.intersectManyOneDimensionalArrays(array1, array2, array3);
    
    // Assert
    expect(actual).toEqual(expected);
  });
  
    it('arrayFunctions.compareObjectArrayValues Sort nbSettlements desc Should Match', () => {
    // Arrange
    let expected = [{
        "lastUpdated": "3 hours ago",
        "nbSettlements": 15,
        "system": "Hors",
      },
      {
        "lastUpdated": "59 minutes ago",
        "nbSettlements": 11,
        "system": "Wolf 12",
      },
      {
        "lastUpdated": "10 hours ago",
        "nbSettlements": 1,
        "system": "Nuakea",
      },
      {
        "lastUpdated": "7 hours ago",
        "nbSettlements": 1,
        "system": "9 Puppis",
      },
      {
        "lastUpdated": "2 hours ago",
        "nbSettlements": 1,
        "system": "LSE 239",
      },
      {
        "lastUpdated": "4 hours ago",
        "nbSettlements": 1,
        "system": "Ross 1051",
      }, ];

    let input = [{
        "lastUpdated": "10 hours ago",
        "nbSettlements": 1,
        "system": "Nuakea",
      },
      {
        "lastUpdated": "7 hours ago",
        "nbSettlements": 1,
        "system": "9 Puppis",
      },
      {
        "lastUpdated": "2 hours ago",
        "nbSettlements": 1,
        "system": "LSE 239",
      },
      {
        "lastUpdated": "59 minutes ago",
        "nbSettlements": 11,
        "system": "Wolf 12",
      },
      {
        "lastUpdated": "3 hours ago",
        "nbSettlements": 15,
        "system": "Hors",
      },
      {
        "lastUpdated": "4 hours ago",
        "nbSettlements": 1,
        "system": "Ross 1051",
      }, ];

    // Act
    let actual = input.sort(arrayFunctions.compareObjectArrayValues('nbSettlements', 'desc'));

    // Assert
    expect(actual).toEqual(expected);
  });


  it('arrayFunctions.compareObjectArrayValues Sort Station asc Should Match', () => {
    // Arrange
    let expected = [{
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
        "Station": "Osnovianenko Drilling Station",
        "StationDistance": "3,279 Ls",
        "Updated": "4 hours ago",
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
        "Dist": "25.52",
        "Economy": "Extraction",
        "Government": "Anarchy",
        "StarSystem": "Sosolingati",
        "Station": "Wan Mineralogic Site",
        "StationDistance": "1,394 Ls",
        "Updated": "8 hours ago",
      }, ];

    let input = [{
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
      }, ];

    // Act
    let actual = input.sort(arrayFunctions.compareObjectArrayValues('Station'));

    // Assert
    expect(actual).toEqual(expected);
  });

});
