class RotateRight {
  constructor(board) {
    this.board = board
  }

  run() {
    this.board.addRotation(1)
  }
}

module.exports = RotateRight
