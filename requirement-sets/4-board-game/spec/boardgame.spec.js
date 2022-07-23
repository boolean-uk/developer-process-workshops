const { BOARD_DIMENSIONS, Player } = require('../src/boardgame.js')

describe('Player Class', () => {
  it('Player moves MRMLMRM should result in 2, 2, E', () => {
    const playerOne = new Player(BOARD_DIMENSIONS)
    playerOne.movePlayer('MRMLMRM')

    expect(playerOne.getPlayerData()).toEqual([2, 2, 'E'])
  })
  it('Player moves RMMMLMM should result in 3, 2, N', () => {
    const playerTwo = new Player(BOARD_DIMENSIONS)
    playerTwo.movePlayer('RMMMLMM')

    expect(playerTwo.getPlayerData()).toEqual([3, 2, 'N'])
  })

  it('Player moves MMMMM (out of board) should result in 0, 4, N', () => {
    const playerThree = new Player(BOARD_DIMENSIONS)
    playerThree.movePlayer('MMMMM')

    expect(playerThree.getPlayerData()).toEqual([0, 4, 'N'])
  })

})
