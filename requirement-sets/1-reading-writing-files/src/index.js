const { createDirectionObj } = require("./createDirectionObj.js")
const { input } = require("./input.js")
const fs = require("fs")

// run the program
const countSamePositions = () => {
    let counter = 0
    for(let i = 0; i < input.length; i++) {
        const directionObj = createDirectionObj(input[i]);
        if (directionObj.N === directionObj.S && directionObj.W === directionObj.E) counter++
    }
   return `count: ${counter}`
}


fs.writeFile("answer.txt", countSamePositions(), (err) => {
  if (err) throw err
 console.log("YaaY!")
});


