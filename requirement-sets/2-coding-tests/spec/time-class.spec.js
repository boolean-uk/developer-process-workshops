const { Time } = require('../src/time-class.js')

describe('Time Class', () => {
  it('Scenario 1', () => {
    const t1 = new Time(1, 30, 20)

    expect(t1.timeString()).toEqual('01:30:20')
  })

  it('Scenario 2', () => {
    const t2 = new Time(1, 100, 20)

    expect(t2.timeString()).toEqual('02:40:20')
  })

  it('Scenario 3', () => {
    const t3 = new Time(1, 30, 20)
    t3.scale(400)

    expect(t3.timeString()).toEqual('01:37:00')
  })

  it('Scenario 4', () => {
    const t4 = new Time(1, 100, 0)
    t4.scale(400)

    expect(t4.timeString()).toEqual('02:46:40')
  })
})
