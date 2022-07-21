const fs = require('fs');

const data = fs.readFileSync('../input.txt');
const dataArray = data.toString().toUpperCase().trim().split('\r\n');
console.log(dataArray);

function checkPosition(data) {
  let count = 0;
  dataArray.forEach((el) => {
    const counts = { W: 0, E: 0, N: 0, S: 0 };
    el.split('').forEach((letter) => (counts[letter] += 1));
    if (counts.W === counts.E && counts.S === counts.N) count += 1;
  });
  const output = `count: ${count}`;
  fs.writeFile('../answer.txt', output, (err) => {
    if (err) {
      console.error(err);
    }
  });
  return count;
}

console.log(checkPosition(data));
