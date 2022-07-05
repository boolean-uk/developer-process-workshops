const countReturnToStart = require('../src/countReturnToStart.js')

describe("Count return to start", () => {
  it("returns 3", () => {
    const lines = [
      "W",
      "WE",
      "S",
      "NSWE",
      "NSN",
      "N",
      "NSSSSNNN",
      "NSEEEEWWNWNWSWEN"
    ]

    expect(countReturnToStart(lines)).toEqual(3)
  })

  it("returns 1", () => {
    const lines = [
      "W",
      "WE"
    ]

    expect(countReturnToStart(lines)).toEqual(1)
  })
})
