const Game = require('../src/game.js')

describe("game", () => {
  let game, expected
  beforeEach(() => {
    game = new Game()
    expected = {
      y: 4,
      x: 0,
      direction: 'N'
    }
  })
  describe("#initialisation()", () => {
    it('returns an initial game', () => {
      expect(game.board.calculatePosition()).toEqual(expected)
    })
  })
  describe('#move()', () => {
    it("MRMLMRM", () => {
      expected.y = 2
      expected.x = 2
      expected.direction = 'E'

      expect(game.move('MRMLMRM')).toEqual(expected)
    })
    it("RMMMLMM", () => {
      expected.y = 2
      expected.x = 3
      expected.direction = 'N'

      expect(game.move('RMMMLMM')).toEqual(expected)
    })
    it("MMMMM", () => {
      expected.y = 0
      expected.x = 0
      expected.direction = 'N'

      expect(game.move('MMMMM')).toEqual(expected)
    })
  })
})
