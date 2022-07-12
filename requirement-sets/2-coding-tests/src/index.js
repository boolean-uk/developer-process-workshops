function findLongestSequence (inputString) {
  const allCharacterCounts = []
  let singleCharacterCounts = {}

  for (let charIndex = 0; charIndex < inputString.length; charIndex++) {
    const thisCharacter = inputString[charIndex]
    let nextCharacter

    if (inputString[charIndex + 1]) {
      nextCharacter = inputString[charIndex + 1]
    }

    if (singleCharacterCounts.char) {
      singleCharacterCounts.amount++
    } else {
      singleCharacterCounts.char = thisCharacter
      singleCharacterCounts.amount = 1
    }

    if (thisCharacter !== nextCharacter) {
      allCharacterCounts.push(singleCharacterCounts)
      singleCharacterCounts = {}
    }
  }
  const resultsSortedByValue = allCharacterCounts.sort((a, b) => b.amount - a.amount)
  const uniqueTopResult = getAlphabeticalUniqueTopResult(resultsSortedByValue)

  const resultKey = uniqueTopResult.char.toLowerCase()
  const resultValue = uniqueTopResult.amount

  const output = {}
  output[resultKey] = resultValue

  return output
}

function getAlphabeticalUniqueTopResult (results) {
  const topResults = []

  for (let resultIndex = 0; resultIndex < results.length; resultIndex++) {
    const thisEntry = results[resultIndex]
    let nextEntry = { amount: 0 }

    topResults.push(thisEntry)

    if (results[resultIndex + 1]) {
      nextEntry = results[resultIndex + 1]
    }

    if (thisEntry.amount !== nextEntry.amount) {
      return topResults.sort((a, b) => a.char.localeCompare(b.char))[0]
    }
  }
}

const oneCharNonRepeated = 'z'
const oneCharRepeated = 'dddddddddd'
const multiCharRepeatedUnique = 'zzzzzzzzaaaatddddbhhhvvv'
const multiCharRepeatedNonUnique = 'zzzzzzzzaaaatddddbhhhvvvaaaavvkkoooooooooonnnnnnnnnnmmmmmmmmmmiuhjkciiiiii'

const resultOneCharNonRepeated = findLongestSequence(oneCharNonRepeated)
const resultOneCharRepeated = findLongestSequence(oneCharRepeated)
const resultMultiCharRepeatedUnique = findLongestSequence(multiCharRepeatedUnique)
const resultMultiCharRepeatedNonUnique = findLongestSequence(multiCharRepeatedNonUnique)

module.exports = {
  a: resultOneCharNonRepeated,
  b: resultOneCharRepeated,
  c: resultMultiCharRepeatedUnique,
  d: resultMultiCharRepeatedNonUnique
}
