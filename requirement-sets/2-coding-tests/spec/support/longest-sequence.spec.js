const longest_sequence = require('../../src/longest-sequence.js');

describe('Longest sequence', () => {
  it('sequence 1', () => {
    expect(longest_sequence('gggttrfdesdcxzzzzzzzzzz')).toEqual({ z: 10 });
  });
  it('sequence 2', () => {
    expect(longest_sequence('rrftghuuytredswwsdxxxxxxxxxxgftrgr')).toEqual({
      x: 10,
    });
  });
});
