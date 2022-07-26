const BOARD_DIMENSIONS = {
  xMaxPosition: 4,
  yMaxPosition: 4
}

const MOVEMENTS = {
  N: {
    xDiff: 0,
    yDiff: 1
  },
  S: {
    xDiff: 0,
    yDiff: -1
  },
  E: {
    xDiff: 1,
    yDiff: 0
  },
  W: {
    xDiff: -1,
    yDiff: 0
  }
}

const TURNS = {
  L: {
    N: 'W',
    S: 'E',
    E: 'N',
    W: 'S'
  },
  R: {
    N: 'E',
    S: 'W',
    E: 'S',
    W: 'N'
  }
}

class Player {
  constructor (boardLimits) {
    this.xPlayerPosition = 0
    this.yPlayerPosition = 0
    this.playerDirection = 'N'
    this.movementLimits = boardLimits
  }

  getPlayer () {
    return [
      this.xPlayerPosition,
      this.yPlayerPosition,
      this.playerDirection
    ]
  }

  commandPlayer (commands) {
    const steps = commands.split('')

    for (let step of steps) {
      step = step.toUpperCase()

      if (step === 'M') {
        this.xPlayerPosition += this.#movePlayer().xMove
        this.yPlayerPosition += this.#movePlayer().yMove
      }

      if (step === 'L' || step === 'R') {
        this.playerDirection = this.#turnPlayer(step)
      }
    }
  }

  #movePlayer () {
    let xMovement = 0
    let yMovement = 0

    if (this.xPlayerPosition + MOVEMENTS[this.playerDirection].xDiff > 0 &&
      this.xPlayerPosition < this.movementLimits.xMaxPosition) {
      xMovement = MOVEMENTS[this.playerDirection].xDiff
    }

    if (this.yPlayerPosition + MOVEMENTS[this.playerDirection].yDiff > 0 &&
      this.yPlayerPosition < this.movementLimits.yMaxPosition) {
      yMovement = MOVEMENTS[this.playerDirection].yDiff
    }

    return {
      xMove: xMovement,
      yMove: yMovement
    }
  }

  #turnPlayer (turnDirection) {
    return TURNS[turnDirection][this.playerDirection]
  }
}

module.exports = {
  BOARD_DIMENSIONS,
  Player
}
