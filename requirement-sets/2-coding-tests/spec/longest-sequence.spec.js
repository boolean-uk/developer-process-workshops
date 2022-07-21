const longest_sequence = require('../src/longest-sequence.js');

describe('Longest sequence', () => {
  it('scenario 1', () => {
    expect(longest_sequence('dghhhmhmx')).toEqual({ h: 3 });
  });
  it('scenario 2', () => {
    expect(longest_sequence('dhkkhhKKKt')).toEqual({ k: 3 });
  });
  it('scenario 3', () => {
    expect(longest_sequence('aBbBadddadd')).toEqual({ b: 3 });
  });
  it('scenario 4', () => {
    expect(longest_sequence('gggttrfdesdcxzzzzzzzzzz')).toEqual({ z: 10 });
  });
  it('scenario 5', () => {
    expect(longest_sequence('jshetdrefdddesawwesdcxzwwwwwwwwww')).toEqual({
      w: 10,
    });
  });
});
