const reverseString = require('../src/reverse-string.js')

describe("Reverse String", () => {
  it("scenario 1", () => {
    expect(reverseString("abcb")).toEqual('bcba')
  })
  it("scenario 2", () => {
    expect(reverseString('test')).toEqual('tset')
  })
  it("scenario 3", () => {
    expect(reverseString('racecar')).toEqual('racecar')
  })
})
