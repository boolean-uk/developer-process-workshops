// run the program

const oneCharNonRepeated = 'z'
const oneCharRepeated = 'dddddddddd'
const multiCharRepeatedUnique = 'zzzzzzzzaaaatddddbhhhvvv'
const multiCharRepeatedNonUnique = 'zzzzzzzzaaaatddddbhhhvvvaaaavvkkoooooooooonnnnnnnnnnmmmmmmmmmmiuhjkciiiiii'

function find_longest_sequence (inputString) {
  const allDuplicates = []
  let singleCharacterDuplicates = {}

  for (let charIndex = 0; charIndex < inputString.length; charIndex++) {
    const thisCharacter = inputString[charIndex]
    let nextCharacter

    if (inputString[charIndex + 1]) {
      nextCharacter = inputString[charIndex + 1]
    }

    if (singleCharacterDuplicates.char) {
      singleCharacterDuplicates.amount++
    } else {
      singleCharacterDuplicates.char = thisCharacter
      singleCharacterDuplicates.amount = 1
    }

    if (thisCharacter !== nextCharacter) {
      allDuplicates.push(singleCharacterDuplicates)
      singleCharacterDuplicates = {}
    }
  }
  let results_sorted_by_value = allDuplicates.sort((a, b) => b.amount - a.amount)
  let unique_top_result = get_alphabetical_unique_top_result(results_sorted_by_value)[0]

  const output = {}

  const resultKey = unique_top_result.char.toLowerCase()
  const resultValue = unique_top_result.amount

  output[resultKey] = resultValue

  return output
}

function get_alphabetical_unique_top_result (results) {
  const top_results = []

  for (let resultIndex = 0; resultIndex < results.length; resultIndex++) {
    const thisEntry = results[resultIndex]
    let nextEntry = { amount: 0 }

    top_results.push(thisEntry)

    if (results[resultIndex + 1]) {
      nextEntry = results[resultIndex + 1]
    }

    if (thisEntry.amount !== nextEntry.amount) {
      return top_results.sort((a, b) => a.char.localeCompare(b.char))
    }
  }
}

const resultOneCharNonRepeated = find_longest_sequence(oneCharNonRepeated)
const resultOneCharRepeated = find_longest_sequence(oneCharRepeated)
const resultMultiCharRepeatedUnique = find_longest_sequence(multiCharRepeatedUnique)
const resultMultiCharRepeatedNonUnique = find_longest_sequence(multiCharRepeatedNonUnique)

// do not edit below this line
module.exports = {
  a: resultOneCharNonRepeated,
  b: resultOneCharRepeated,
  c: resultMultiCharRepeatedUnique,
  d: resultMultiCharRepeatedNonUnique
}
