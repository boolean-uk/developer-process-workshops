const events = require('events');
const fs = require('fs');
const readline = require('readline');

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

    console.log("These are the coordinates: ", initialPosition);

    if (initialPosition['x'] == 0 && initialPosition['y'] == 0) {
        console.log("True - Back on the starting position!\n");
    } else {
        console.log("False - Not on starting position!\n");
    }
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
  } catch (err) {
    console.error(err);
  }
})();
