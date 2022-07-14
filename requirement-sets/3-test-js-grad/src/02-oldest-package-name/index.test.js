const oldestPackageName = require('.');

describe('oldestPackageName', () => {
  it('returns the name of the package with the oldest date', async () => {
    const answer = await oldestPackageName()
    expect(answer).toEqual('react-router');
  });
});
