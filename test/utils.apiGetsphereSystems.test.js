const axios = require('axios');
const apiGetsphereSystems = require('../src/utils/apiGetsphereSystems');

jest.mock('axios');
const axiosGet = axios.get;
axiosGet.mockResolvedValue({ data: 'NOT TESTED' });

beforeAll(async() => {

  // Act (Global)
  await apiGetsphereSystems('col 359 sector QJ-V c17-7', 47, 45);
  await apiGetsphereSystems('col 359 sector QJ-V c17-7', 47);
});

describe('apiGetsphereSystems.js tests', () => {

  it('apiGetsphereSystems api calls Should Match', async() => {

    // Arrange

    // Act

    // Assert
    expect(axiosGet).toHaveBeenCalledTimes(2);
    expect(axiosGet.mock.calls).toEqual([
      ['https://www.edsm.net/api-v1/sphere-systems/?systemName=col+359+sector+QJ-V+c17-7&radius=47&minRadius=45'],
      ['https://www.edsm.net/api-v1/sphere-systems/?systemName=col+359+sector+QJ-V+c17-7&radius=47']
    ]);
  });

});
