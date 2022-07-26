const Board = require('../src/board.js')

describe("board game", () => {
  let board
  beforeEach(() => {
    board = new Board()
  })
  it("M", () => {
    const expected = {
      x: 0,
      y: 1,
      direction: 'N'
    }
    board.addMove({x: 0, y: 1 })
    expect(board.calculatePosition()).toEqual(expected)
  })
  it("RM", () => {
    const expected = {
      x: 1,
      y: 0,
      direction: 'E'
    }
    board.addRotation(1)
    board.addMove({x: 1, y:0 })

    expect(board.calculatePosition()).toEqual(expected)
  })
})
