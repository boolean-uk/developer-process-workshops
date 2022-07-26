const { movements, directions, initial } = require('../constants.js')

class Move {
  constructor(board) {
    this.board = board
  }

  run() {
    const direction = this.board.getDirection()
    const move = movements[direction]
    this.board.addMove(move)
  }
}

module.exports = Move
