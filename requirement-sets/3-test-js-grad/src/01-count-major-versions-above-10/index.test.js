jest.mock('node-fetch');
jest.mock('axios');

const fetch = require('node-fetch')
const axios = require('axios')

const dependencies = require('../__mocks__/dependencies.json')
const countMajorVersionsAbove10 = require('.');

describe('countMajorVersionsAbove10', () => {
  beforeEach(() => {
    fetch.mockReturnValue(Promise.resolve({json: () => Promise.resolve(dependencies)}))
    axios.get.mockReturnValue(Promise.resolve({ data: dependencies }))
  })

  it('returns the correct count of packages above version 10.x.x', async () => {
    const answer = await countMajorVersionsAbove10()

    expect(answer).toEqual(4);
  });
});
