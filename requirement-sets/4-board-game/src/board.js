const { directions, initial } = require('./constants.js')

class Board {
  constructor(startingPoint = initial) {
    this.moves = [startingPoint]
    this.rotations = []
  }

  addMove(move) { this.moves.push(move) }
  addRotation(rotation) { this.rotations.push(rotation) }

  getDirection() {
    const directionIndex = this.rotations.reduce((a,b) => a+b, 0)
    return directions[directionIndex % directions.length]
  }

  calculatePosition() {
    const position = this.moves.reduce((a, b) => {
      return {
        x: this.validate(a.x + b.x),
        y: this.validate(a.y + b.y),
      }
    }, { x: 0, y: 0 })
    position.direction = this.getDirection()
    return position
  }

  validate(val) {
    if (val > 4) return 4
    if (val < 0) return 0
    return val
  }
}

module.exports = Board
