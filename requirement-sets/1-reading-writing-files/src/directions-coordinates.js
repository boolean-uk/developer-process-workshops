// This solution passes all the tests
// but does not read from a file or
// save the results to a file.

function countReturnToStart (lines) {
  let initialPositionsCount = 0
  let initialPosition = { x: 0, y: 0 }

  for (const line of lines) {
    for (const letter of line) {
      switch (letter) {
        case 'W':
          initialPosition["x"] += 1
          break
        case 'E':
          initialPosition["x"] -= 1
          break
        case 'N':
          initialPosition["y"] += 1
          break
        case 'S':
          initialPosition["y"] -= 1
          break
        default:
          break
      }
    }
    if (initialPosition["x"] === 0 && initialPosition["y"] === 0) {
      initialPositionsCount++
    }
    initialPosition = { x: 0, y: 0 }
  }

  return initialPositionsCount
}

const lines = [
  'W',
  'WE',
  'S',
  'NSWE',
  'NSN',
  'NSSSSNNN',
  'NSEEEEWWNWNINSWEN'
]

module.exports = {
  countReturnToStart
}
