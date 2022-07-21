const longestSequence = require('../src/longest-sequence.js');

describe('Longest sequence', () => {
  it('scenario 1', () => {
    expect(longestSequence('dghhhmhmx')).toEqual({ h: 3 });
  });
  it('scenario 2', () => {
    expect(longestSequence('dhkkhhKKKt')).toEqual({ k: 3 });
  });
  it('scenario 3', () => {
    expect(longestSequence('aBbBadddadd')).toEqual({ b: 3 });
  });
  it('scenario 4', () => {
    expect(longestSequence('gggttrfdesdcxzzzzzzzzzz')).toEqual({ z: 10 });
  });
  it('scenario 5', () => {
    expect(longestSequence('jshetdrefdddesawwesdcxzwwwwwwwwww')).toEqual({
      w: 10,
    });
  });
});
