const { balance } = require('../src/savings-account-balance.js')

describe(':', () => {
  it('Must be approximately 10201', () => {
    expect(balance(10000, 1, 20000, 1, 2)).toEqual(10201)
  })

  it('Must be approximately 25904.5', () => {
    expect(balance(25000, 2, 20000, 1, 2)).toEqual(25904.5)
  })

  it('Must be approximately 20597.96', () => {
    expect(balance(19800, 2, 20000, 1, 2)).toEqual(20597.96)
  })
})
