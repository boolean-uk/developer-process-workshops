const { reverseString } = require('../src/recursive-reverse-string.js')

describe(':', () => {
  it('abcd', () => {
    expect(reverseString('abcb')).toEqual('bcba')
  })

  it('test', () => {
    expect(reverseString('test')).toEqual('tset')
  })

  it('Racecar', () => {
    expect(reverseString('racecar')).toEqual('racecar')
  })
})
