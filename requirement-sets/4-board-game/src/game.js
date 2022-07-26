const Board = require('./board.js')

const commands = {
  'R': require('./commands/rotateRight.js'),
  'L': require('./commands/rotateLeft.js'),
  'M': require('./commands/move.js')
}

class Game {
  constructor(board = new Board()) {
    this.board = board
  }

  move(str) {
    str.split('').forEach(char => (new commands[char](this.board)).run())
    const position = this.board.calculatePosition()
    return `${position.x} ${position.y} ${position.direction}`
  }
}

module.exports = Game
