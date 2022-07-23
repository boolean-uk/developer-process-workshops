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
    constructor(boardLimits) {
        this.xPlayerPosition = 0
        this.yPlayerPosition = 0
        this.playerDirection = 'N'
        this.movementLimits = boardLimits
    }

    getPlayerData() {
        return [
            this.xPlayerPosition,
            this.yPlayerPosition,
            this.playerDirection,
        ]
    }

    movePlayer(moves) {
        const steps = moves.split('')

        for (let step of steps) {
            step = step.toUpperCase()

            if(step === 'M') {
                if (this.xPlayerPosition < this.movementLimits.xMaxPosition) {
                    this.xPlayerPosition += MOVEMENTS[this.playerDirection].xDiff
                }
                if (this.yPlayerPosition < this.movementLimits.yMaxPosition) {
                    this.yPlayerPosition += MOVEMENTS[this.playerDirection].yDiff
                }
                continue
            }

            this.playerDirection = TURNS[step][this.playerDirection]
        }
    }

}

module.exports = {
    BOARD_DIMENSIONS,
    Player
  }