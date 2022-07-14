const countMajorVersionsAbove10 = require('.');

describe('countMajorVersionsAbove10', () => {
  it('returns the correct count of packages above version 10.x.x', async () => {
    const answer = await countMajorVersionsAbove10()
    expect(answer).toEqual(8);
  });
});
