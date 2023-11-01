const intersectManyOneDimensionalArrays = require("../src/utils/intersectManyOneDimensionalArrays");

describe('intersectManyOneDimensionalArrays.js tests', () => {

  it('intersectManyOneDimensionalArrays Should Match', () => {
    // Arrange
    let expected = ['apple', 'orange'];

    let array1 = ['apple', 'carrot', 'potato', 'orange', 'grapes'];
    let array2 = ['apple', 'orange'];
    let array3 = ['strawbery', 'apple', 'orange', 'water melon', 'grapes'];

    // Act
    let actual = intersectManyOneDimensionalArrays(array1, array2, array3);
    
    // Assert
    expect(actual).toEqual(expected);
  });

});
