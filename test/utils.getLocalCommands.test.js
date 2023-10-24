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
        name: 'ping',
        description: 'Command and permission heartbeat.',
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
