const fs = require('fs');

function checkPosition(data) {
  const answers = [];
  const dataArray = data.toString().toUpperCase().split('\r\n');

  dataArray.forEach((el) => {
    const counts = {
      W: 0,
      E: 0,
      N: 0,
      S: 0,
    };

    el.split('').forEach((letter) => (counts[letter] += 1));

    answers.push(counts.W === counts.E && counts.S === counts.N);
  });
  return answers;
}

const data = fs.readFileSync('../input.txt');
console.log(checkPosition(data));
