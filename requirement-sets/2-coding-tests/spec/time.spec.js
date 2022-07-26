const Time = require('../src/time.js')

fdescribe("Longest Sequence", () => {
  it("scenario 1", () => {
    const time = new Time( 1, 30, 20 )
    time.timeString()

    expect(time.timeString()).toEqual('01:30:20')
  })
  it("scenario 2", () => {
    const time = new Time( 1, 30, 20 )
    time.scale( 400 )

    expect(time.timeString()).toEqual('01:37:00')
  })
  it("scenario 3", () => {
    const time = new Time( 1, 100, 0 )

    expect(time.timeString()).toEqual('02:40:00')
  })
})
