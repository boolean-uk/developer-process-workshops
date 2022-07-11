// 1

const longestSequence = (str) => {
  const strToParse = str.toLowerCase();
  let curLetter = strToParse[0];
  let highestletter = strToParse[0];
  let curCount = 1;
  let highestCount = 1;

  for (let i = 1; i < strToParse.length; i++) {
    if (strToParse[i] === curLetter) {
      curCount++;
    } else {
      curLetter = strToParse[i];
      curCount = 1;
    }

    if (curCount === highestCount) {
      highestletter = curLetter < highestletter ? curLetter : highestletter;
    }

    if (curCount > highestCount) {
      highestCount = curCount;
      highestletter = curLetter;
    }
  }
  return { [highestletter]: highestCount };
};

module.exports = longestSequence;
