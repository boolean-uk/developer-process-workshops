const movements = {
  'N': { y: 1, x: 0},
  'E': { y: 0, x: 1},
  'S': { y: -1, x: 0},
  'W': { y: 0, x: -1},
}
const directions = Object.keys(movements)
const initial = { x: 0, y: 0 }

class Board {
  constructor(startingPoint = initial) {
    this.moves = [startingPoint]
    this.currentDirection = 0
  }

  move(str) {
    // this reponsibility (parsing of input)
    str.split('').forEach(char => {
      if (char === 'R') {
        this.currentDirection++
      } else if (char === 'L') {
        this.currentDirection--
      } else if (char === 'M') {
        const heading = directions[this.currentDirection % directions.length]
        const move = movements[heading]
        this.moves.push(move)
      }
    })
    return this.calculatePosition()
  }

  calculatePosition() {
    const position = this.moves.reduce((a, b) => {
      return {
        x: this.validate(a.x + b.x),
        y: this.validate(a.y + b.y),
      }
    }, { x: 0, y: 0 })
    position.direction = directions[this.currentDirection % directions.length]
    return position
  }

  validate(val) {
    if (val > 4) return 4
    if (val < 0) return 0
    return val
  }
}

module.exports = Board
