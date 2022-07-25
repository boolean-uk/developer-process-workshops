const Board = require('../src/board.js')

describe("Board", () => {
  let board, expected
  beforeEach(() => {
    board = new Board()
    expected = {
      y: 4,
      x: 0,
      direction: 'N'
    }
  })
  describe("#initialisation()", () => {
    it('returns an initial board', () => {
      expect(board.position).toEqual(expected)
    })
  })
  describe('#move()', () => {
    it("MRMLMRM", () => {
      expected.y = 2
      expected.x = 2
      expected.direction = 'E'

      expect(board.move('MRMLMRM')).toEqual(expected)
    })
    it("RMMMLMM", () => {
      expected.y = 2
      expected.x = 3
      expected.direction = 'N'

      expect(board.move('RMMMLMM')).toEqual(expected)
    })
    it("MMMMM", () => {
      expected.y = 0
      expected.x = 0
      expected.direction = 'N'

      expect(board.move('MMMMM')).toEqual(expected)
    })
  })
})
