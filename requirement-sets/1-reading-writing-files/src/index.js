const events = require('events');
const fs = require('fs');
const readline = require('readline');

let count = 0;

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
        count ++;
    }
}

function writeToAnswerFile(finalCount) {
    let dataToSave = "Count: " + finalCount;
    fs.writeFile('answer.txt', dataToSave, function (err) {
        if (err) return console.log(err);
        console.log(finalCount, 'answer.txt');
      });
}

(async function processLineByLine() {
  try {
    const rl = readline.createInterface({
      input: fs.createReadStream('./input.txt'),
      crlfDelay: Infinity
    });

    rl.on('line', (line) => {
      console.log(`Movement steps from file: ${line}`);
      evaluateinitialPosition(line)
    });

    await events.once(rl, 'close');

    console.log('The file is done.');
    writeToAnswerFile(count);
  } catch (err) {
    console.error(err);
  }
})();
