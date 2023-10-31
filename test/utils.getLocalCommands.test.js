describe('getLocalCommands.js tests', () => {

  const getLocalCommands = require("../src/utils/getLocalCommands");


  it('getLocalCommands Should Match', () => {
    // Arrange
    let expected = [
      {
        name: 'findaxreactivationmissions',
        description: 'This command will find systems that offer AX reactivation missions.',
        isDeleted: false,
        permissionsRequired: [],
        callback: expect.any(Function)
      },
      {
        name: 'findthargoidmatrix',
        description: 'This command will find systems containing thargoid matrices of different types',
        isDeleted: false,
        options: [
          {
            name: 'titan-name',
            description: 'The name of a thargoid titan.',
            type: 3,
            required: true,
          }
        ],
        permissionsRequired: [],
        callback: expect.any(Function)
      },
      {
        name: "triangulation-puzzle",
        description: "This command will find system in all 3 lists of 3 lookups with min and max L.y. radius.",
        isDeleted: false,
        options: [
          {
            name: 'system-name1',
            description: 'system-name1',
            type: 3,
            required: true,
          },
          {
            name: 'min-radius1',
            description: 'min-radius1',
            type: 10,
            required: true,
          },
          {
            name: 'max-radius1',
            description: 'max-radius1',
            type: 10,
            required: true,
          },
          {
            name: 'system-name2',
            description: 'system-name2',
            type: 3,
            required: true,
          },
          {
            name: 'min-radius2',
            description: 'min-radius2',
            type: 10,
            required: true,
          },
          {
            name: 'max-radius2',
            description: 'max-radius2',
            type: 10,
            required: true,
          },
          {
            name: 'system-name3',
            description: 'system-name3',
            type: 3,
            required: true,
          },
          {
            name: 'min-radius3',
            description: 'min-radius3',
            type: 10,
            required: true,
          },
          {
            name: 'max-radius3',
            description: 'max-radius3',
            type: 10,
            required: true,
          },
        ],
        permissionsRequired: [],
        callback: expect.any(Function)
      },
      {
        name: 'help',
        description: 'Displays help about bot.',
        isDeleted: false,
        permissionsRequired: [],
        callback: expect.any(Function)
      },
      {
        name: 'topreactionsbyuser',
        description: 'displays top users by count of reactions.',
        isDeleted: false,
        options: [
          {
            name: 'reaction-name',
            description: 'The NickName of reaction to get the top of users from.',
            type: 3,
            required: true,
          }
        ],
        permissionsRequired: [],
        callback: expect.any(Function)
      },
    ];

    // Act
    let actual = getLocalCommands();
    // permissionsRequired ignored as there is a problem serializing big ints
    for(const command of actual) {
      command.permissionsRequired = [];
    }

    // Assert
    expect(actual).toEqual(expected);
  });

});
