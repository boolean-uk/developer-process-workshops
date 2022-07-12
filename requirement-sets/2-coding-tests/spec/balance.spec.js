const balance = require('../src/balance.js')

describe("Balance", () => {
  it("scenario 1", () => {
    expect(balance(10000, 1, 20000, 1, 2)).toEqual(10201)
  })
  it("scenario 2", () => {
    expect(balance(25000, 2, 20000, 1, 2)).toEqual(25904.5)
  })
  it("scenario 3", () => {
    expect(balance(19800, 2, 20000, 1, 2)).toEqual(20597.96)
  })
})
