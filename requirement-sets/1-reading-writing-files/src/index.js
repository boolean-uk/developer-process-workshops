const events = require('events');
const fs = require('fs');
const readline = require('readline');

const inputFilename = "input.txt"
const outputFilename = "answer.txt"

let countInitialPositions = 0;

function evaluateinitialPosition(directions) {
    let initialPosition = { 'x': 0, 'y': 0 };

    for (const letter of directions) {
        switch (letter) {
            case "W":
                initialPosition['x'] -= 1;
                break;
            case "E":
                initialPosition['x'] += 1;
                break;
            case "N":
                initialPosition['y'] += 1;
                break;
            case "S":
                initialPosition['y'] -= 1;
                break;
            default:
                break;
        }
    }

    if (initialPosition['x'] == 0 && initialPosition['y'] == 0) {
        countInitialPositions ++;
    }
}

function writeToAnswerFile(finalCount) {
    let dataToSave = `count: ${finalCount}`;
    fs.writeFile(outputFilename, dataToSave, function (err) {
        if (err) return console.log(err);
    });
    return;
}

async function processFileLineByLine(filePath) {
  try {
    const lineRead = readline.createInterface({
      input: fs.createReadStream(filePath),
      crlfDelay: Infinity
    });

    lineRead.on('line', (line) => {
      evaluateinitialPosition(line);
    });

    await events.once(lineRead, 'close');
    writeToAnswerFile(countInitialPositions);
} catch (err) {
    console.error(err);
  }
};

processFileLineByLine(`./${inputFilename}`);
