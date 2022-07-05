const fs = require("fs");
const countReturnsToStart = require("./countReturnsToStart");
const formatAnswer = require("./formatAnswer");
const parseFileData = require("./parseFileData");

// Main exercise
fs.readFile("./input.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const parsedLines = parseFileData(data);

  const count = countReturnsToStart(parsedLines);

  const answer = formatAnswer(count);

  fs.writeFile("./answer.txt", answer, (err) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log("Done!");
  });
});
