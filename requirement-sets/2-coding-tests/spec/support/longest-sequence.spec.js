const longestSequence = require('../../src/longest-sequence.js');

describe('Longest sequence', () => {
  it('sequence 1', () => {
    expect(longestSequence('gggttrfdesdcxzzzzzzzzzz')).toEqual({ z: 10 });
  });
  it('sequence 2', () => {
    expect(longestSequence('rrftghuuytredswwsdxxxxxxxxxxgftrgr')).toEqual({
      x: 10,
    });
  });
});
