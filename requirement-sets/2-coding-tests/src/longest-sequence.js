const longestSequence = (str) => {
  let longestSequence = { a: 0 };
  let currentSequence = {};

  for (let i = 0; i < str.length - 1; i++) {
    const char = str[i].toLowerCase();
    const nextChar = str[i + 1].toLowerCase();

    if (!currentSequence[char]) {
      currentSequence = {};
      currentSequence[char] = 1;
    }

    if (char === nextChar) {
      currentSequence[char] += 1;
    }
    if (Object.values(currentSequence)[0] > Object.values(longestSequence)[0]) {
      longestSequence = { ...currentSequence };
    } else if (
      Object.values(currentSequence)[0] === Object.values(longestSequence)[0]
    ) {
      if (Object.keys(currentSequence)[0] < Object.keys(longestSequence)[0]) {
        longestSequence = { ...currentSequence };
      }
    }
  }
  return longestSequence;
};

module.exports = longestSequence;
