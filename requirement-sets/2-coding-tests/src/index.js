// run the program

const input = "zzzzzzzzaaaatddddbhhhvvvaaaavvkkooooooooooiuhjkciiiiii"

function find_longest_sequence(inputString) {
    let allDuplicates = []
    let singleCharacterDuplicates = {}

    for (let charIndex = 0; charIndex < inputString.length; charIndex++) {
        let thisCharacter = inputString[charIndex]
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

        if (thisCharacter != nextCharacter) {
            allDuplicates.push(singleCharacterDuplicates)
            singleCharacterDuplicates = {}
        }

    }
    results_sorted_by_value = sort_results_by_value(allDuplicates)
    results_sorted_alphabetically = sort_top_results_alphabetically(results_sorted_by_value)
    
    let resultObject = {}

    let resultKey = results_sorted_alphabetically[0].char.toLowerCase()
    let resultValue = results_sorted_alphabetically[0].amount

    resultObject[resultKey] = resultValue
    
    return resultObject
}

function sort_results_by_value(results) {
    return results.sort((a, b) => b.amount - a.amount);
}

function sort_top_results_alphabetically(results) {
    let top_results = []

    for (let resultIndex = 0; resultIndex < results.length; resultIndex++) {
        let thisEntry = results[resultIndex]
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

console.log(find_longest_sequence(input))

