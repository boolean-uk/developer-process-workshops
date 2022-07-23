const { BOARD_DIMENSIONS, Player } = require('../src/boardgame.js')

describe('Player Class', () => {
  it('Player moves MRMLMRM should result in 2, 2, E', () => {
    const playerOne = new Player(BOARD_DIMENSIONS)
    playerOne.setPlayerMoves('MRMLMRM')

    expect(playerOne.getPlayerData()).toEqual([2, 2, 'E'])
  })
  it('Player moves RMMMLMM should result in 3, 2, N', () => {
    const playerTwo = new Player(BOARD_DIMENSIONS)
    playerTwo.setPlayerMoves('RMMMLMM')

    expect(playerTwo.getPlayerData()).toEqual([3, 2, 'N'])
  })

  it('Player moves MMMMM (out of board) should result in 0, 4, N', () => {
    const playerThree = new Player(BOARD_DIMENSIONS)
    playerThree.setPlayerMoves('MMMMM')

    expect(playerThree.getPlayerData()).toEqual([0, 4, 'N'])
  })

  it('Player moves RMMMMM (out of board) should result in 4, 0, E', () => {
    const playerThree = new Player(BOARD_DIMENSIONS)
    playerThree.setPlayerMoves('RMMMMM')

    expect(playerThree.getPlayerData()).toEqual([4, 0, 'E'])
  })

  it('Player moves LMMMMM (out of board) should result in 0, 0, W', () => {
    const playerThree = new Player(BOARD_DIMENSIONS)
    playerThree.setPlayerMoves('LMMMMM')

    expect(playerThree.getPlayerData()).toEqual([0, 0, 'W'])
  })

})
