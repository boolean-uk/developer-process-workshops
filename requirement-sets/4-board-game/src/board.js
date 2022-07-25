const moves = {
  'N': { y: -1, x: 0 },
  'E': { y: 0, x: 1 },
  'S': { y: 1, x: 0 },
  'W': { y: 0, x: -1 }
}
const directions = Object.keys(moves)
const initial = { y: 4, x: 0, direction: directions[0] }

class Board {
  constructor(startingPoint = {...initial}) {
    this.moves = [startingPoint]
    this.currentDirection = directions.indexOf(startingPoint.direction)
    this.commands = {
      'R': () => { this.currentDirection++ },
      'L': () => { this.currentDirection-- },
      'M': () => { this.moves.push(this.getMove()) }
    }
  }

  move(str) {
    str.split('').forEach(char => this.commands[char]())
    return this.calculatePosition()
  }

  getMove() {
    const heading = directions[this.currentDirection % directions.length]
    return moves[heading]
  }

  calculatePosition() {
    const position = this.moves.reduce((a, b) => {
      return {
        x: this.validate(a.x + b.x),
        y: this.validate(a.y + b.y)
      }
    }, { x: 0, y: 0 })
    position.direction = directions[this.currentDirection % directions.length]
    return position
  }

  validate(value) {
    if (value < 0) return 0
    if (value > 4) return 4
    return value
  }
}

module.exports = Board
