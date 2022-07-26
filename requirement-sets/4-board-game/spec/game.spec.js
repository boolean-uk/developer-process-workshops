const Game = require('../src/game.js')

describe("game", () => {
  let game
  beforeEach(() => {
    game = new Game()
  })
  it("MRMLMRM", () => {
    expect(game.move('MRMLMRM')).toEqual('2 2 E')
  })
  it("RMMMLMM", () => {
    expect(game.move('RMMMLMM')).toEqual('3 2 N')
  })
  it("MMMMM", () => {
    expect(game.move('MMMMM')).toEqual('0 4 N')
  })
})
