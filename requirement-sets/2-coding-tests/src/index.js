function findLongestSequence (inputString) {
  const ALL_CHARACTER_COUNTS = []
  let thisCharacterCount = {}

  for (let charIndex = 0; charIndex < inputString.length; charIndex++) {
    const THIS_CHARACTER = inputString[charIndex]
    let nextCharacter

    if (inputString[charIndex + 1]) {
      nextCharacter = inputString[charIndex + 1]
    }

    if (thisCharacterCount.amount) {
      thisCharacterCount.amount++
    } else {
      thisCharacterCount.char = THIS_CHARACTER
      thisCharacterCount.amount = 1
    }

    if (THIS_CHARACTER !== nextCharacter) {
      ALL_CHARACTER_COUNTS.push(thisCharacterCount)
      thisCharacterCount = {}
    }
  }
  const RESULTS_SORTED_BY_VALUE = ALL_CHARACTER_COUNTS.sort((a, b) => b.amount - a.amount)
  const UNIQUE_TOP_RESULT = getAlphabeticalUniqueTopResult(RESULTS_SORTED_BY_VALUE)

  const RESULT_KEY = UNIQUE_TOP_RESULT.char.toLowerCase()
  const RESULT_VALUE = UNIQUE_TOP_RESULT.amount

  const OUTPUT = {}
  OUTPUT[RESULT_KEY] = RESULT_VALUE

  return OUTPUT
}

function getAlphabeticalUniqueTopResult (results) {
  const TOP_RESULTS = []

  for (let resultIndex = 0; resultIndex < results.length; resultIndex++) {
    const THIS_ENTRY = results[resultIndex]
    let nextEntry = { amount: 0 }

    TOP_RESULTS.push(THIS_ENTRY)

    if (results[resultIndex + 1]) {
      nextEntry = results[resultIndex + 1]
    }

    if (THIS_ENTRY.amount !== nextEntry.amount) {
      return TOP_RESULTS.sort((a, b) => a.char.localeCompare(b.char))[0]
    }
  }
}

const ONE_CHAR_NON_REPEATED = 'z'
const ONE_CHAR_REPEATED = 'dddddddddd'
const MULTI_CHAR_REPEATED_UNIQUE = 'zzzzzzzzaaaatddddbhhhvvv'
const MULTI_CHAR_REPEATED_NON_UNIQUE = 'zzzzzzzzaaaatddddbhhhvvvaaaavvkkoooooooooonnnnnnnnnnmmmmmmmmmmiuhjkciiiiii'

const RESULT_ONE_CHAR_NON_REPEATED = findLongestSequence(ONE_CHAR_NON_REPEATED)
const RESULT_ONE_CHAR_REPEATED = findLongestSequence(ONE_CHAR_REPEATED)
const RESULT_MULTI_CHAR_REPEATED_UNIQUE = findLongestSequence(MULTI_CHAR_REPEATED_UNIQUE)
const RESULT_MULTI_CHAR_REPEATED_NON_UNIQUE = findLongestSequence(MULTI_CHAR_REPEATED_NON_UNIQUE)

module.exports = {
  a: RESULT_ONE_CHAR_NON_REPEATED,
  b: RESULT_ONE_CHAR_REPEATED,
  c: RESULT_MULTI_CHAR_REPEATED_UNIQUE,
  d: RESULT_MULTI_CHAR_REPEATED_NON_UNIQUE
}
