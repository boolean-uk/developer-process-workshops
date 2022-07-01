// run the program
const path = require('path');
const fs = require('fs');

const input = fs
	.readFileSync(path.join(__dirname, '../input.txt'), 'utf8')
	.trim()
	.split('\n')


const countDirections = (line) => {
    let directionCounter = {}
    for(let i = 0; i < line.length; i++) {
        const direction = line[i]
        if (!directionCounter[direction]) {
            directionCounter[direction] = 1
        } else {
            directionCounter[direction]++
        }
    }
    return directionCounter
}

const countSamePositions = () => {
    let counter = 0
    for(let i = 0; i < input.length; i++) {
        const directionObj = countDirections(input[i])
        if (directionObj.N === directionObj.S && directionObj.W === directionObj.E) counter++
    }

    return counter
}

console.log(countSamePositions())