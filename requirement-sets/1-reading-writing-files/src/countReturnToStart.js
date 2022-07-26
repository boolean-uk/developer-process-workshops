const countReturnToStart = (lines) => {
  const resultOfMovements = lines.map(line => {
    return isBackToStart(line)
  })
  // loop through all the lines. for each line find if they return to start
  // if they do return true
  // count all the true values

  const count = resultOfMovements.filter(result => result).length

  return count
}

const rules = {
  'N': 1,
  'S': -1,
  'W': 1,
  'E': -1
}

const isBackToStart = (line) => {
  const horizontal = []
  const vertical = []

  line.split('').forEach(movement => {
    if (movement === 'N' || movement === 'S') {
      vertical.push(rules[movement])
    } else {
      horizontal.push(rules[movement])
    }
  })

  return horizontal.reduce((a, b) => a + b, 0) === 0 && vertical.reduce((a, b) => a + b, 0) === 0
}

module.exports = countReturnToStart
