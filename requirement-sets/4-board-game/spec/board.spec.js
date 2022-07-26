const Board = require('../src/board.js')

describe("board game", () => {
  let board
  beforeEach(() => {
    board = new Board()
  })
  it("MRMLMRM", () => {
    const expected = {
      x: 2,
      y: 2,
      direction: 'E'
    }
    expect(board.move('MRMLMRM')).toEqual(expected)
  })
  it("RMMMLMM", () => {
    const expected = {
      x: 3,
      y: 2,
      direction: 'N'
    }
    expect(board.move('RMMMLMM')).toEqual(expected)
  })
  it("MMMMM", () => {
    const expected = {
      x: 0,
      y: 4,
      direction: 'N'
    }
    expect(board.move('MMMMM')).toEqual(expected)
  })
})
