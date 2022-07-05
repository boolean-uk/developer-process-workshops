// run the program

// reading and writing to a file
const fs = require('fs/promises')
const countReturnToStart = require('./countReturnToStart.js')
const formatAnswer = require('./formatAnswer.js')
const parseFileData = require('./parseFileData.js')
const fileName = 'answer.txt'

// async?
const run = async () => {
  try {
    const data = await fs.readFile('input.txt')
    const lines = parseFileData(data)
    // do some with work => problem solving
    const count = countReturnToStart(lines)
    // transform into the accepted format
    const answer = formatAnswer(count)
    // write to a file
    console.log(answer)
    // fs.writeFile(fileName, answer, (err) => {
    //   if (err) throw err;
    //   console.log('The file has been saved!');
    // })
  } catch (err) {
    // When a request is aborted - err is an AbortError
    console.error(err);
  }
}

run()

// fs.readFile('input.txt', (err, data) => {
//   if (err) throw err // how to handle file reading errors
//
//   // data transformation
//   const lines = parseFileData(data)
//   // do some with work => problem solving
//   const count = countReturnToStart(lines)
//   // transform into the accepted format
//   const answer = formatAnswer(count)
//   // write to a file
//   fs.writeFile(fileName, answer, (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
//   })
//   // console.log(answer) // come back to this later
// })
