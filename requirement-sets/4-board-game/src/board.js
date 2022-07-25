const moves = {
  'N': {
    y: -1,
    x: 0
  },
  'E': {
    y: 0,
    x: 1
  },
  'S': {
    y: 1,
    x: 0
  },
  'W': {
    y: 1,
    x: -1
  }
}
const directions = [ 'N', 'E', 'S', 'W' ]
const initial = {
  y: 4,
  x: 0,
  direction: directions[0]
}

class Board {
  constructor(startingPoint = {...initial}) {
    this.position = startingPoint
    this.currentDirection = directions.indexOf(startingPoint.direction)
  }

  getDirection() {
    return directions[this.currentDirection % directions.length]
  }

  move(str) {
    str.split('').forEach(char => {
      if (char === 'R') {
        this.currentDirection++
        this.position.direction = this.getDirection()
      } else if (char === 'L') {
        this.currentDirection--
        this.position.direction = this.getDirection()
      } else if (char === 'M') {
        const move = this.getMove()
        this.updatePosition(move)
      }
    })
    return this.position
  }

  getMove() {
    const heading = directions[this.currentDirection % directions.length]
    return moves[heading]
  }

  updatePosition(move) {
    this.position.y = this.validate(this.position.y + move.y)
    this.position.x = this.validate(this.position.x + move.x)
  }

  validate(value) {
    if (value < 0) return 0
    if (value > 4) return 4
    return value
  }
}

module.exports = Board
