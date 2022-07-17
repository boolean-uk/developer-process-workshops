jest.mock('node-fetch');
jest.mock('axios');

const fetch = require('node-fetch')
const axios = require('axios')

const dependencies = require('../__mocks__/dependencies.json')
const oldestPackageName = require('.');

describe('oldestPackageName', () => {
  beforeEach(() => {
    fetch.mockReturnValue(Promise.resolve({json: () => Promise.resolve(dependencies)}))
    axios.get.mockReturnValue(Promise.resolve({ data: dependencies }))
  })

  it('returns the name of the package with the oldest date', async () => {
    const answer = await oldestPackageName()
    expect(answer).toEqual('react-router-config');
  });
});
