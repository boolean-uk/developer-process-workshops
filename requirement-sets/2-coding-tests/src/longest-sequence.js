const longest_sequence = (str) => {
  // the longest sequence
  let longestSequence = { a: 0 };
  // the current sequence
  let currentSequence = {};

  // loop
  for (let i = 0; i < str.length - 1; i++) {
    // 1. find the current char
    const char = str[i].toLowerCase();
    // 2. find the next char
    const nextChar = str[i + 1].toLowerCase();

    // reset the current sequence
    if (!currentSequence[char]) {
      currentSequence = {};
      currentSequence[char] = 1;
    }

    // check the next char
    if (char === nextChar) {
      currentSequence[char] += 1;
    } else {
      // update the longest sequence if 1. is longer, 2. is the same and alphabetically earlier
      // look at the values, compare them?
      if (
        Object.values(currentSequence)[0] > Object.values(longestSequence)[0]
      ) {
        // if the current sequence is longer, we update longest sequence
        longestSequence = { ...currentSequence };
        // 2. is the same and alphabetically earlier
      } else if (
        Object.values(currentSequence)[0] === Object.values(longestSequence)[0]
      ) {
        if (Object.keys(currentSequence)[0] < Object.keys(currentSequence)[0]) {
          longestSequence = { ...currentSequence };
        }
      }
    }
  }

  return longestSequence;
};

module.exports = longest_sequence;
