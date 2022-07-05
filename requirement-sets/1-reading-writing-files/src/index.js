const fs = require("fs");

const movementMap = { N: 1, S: -1, E: 1, W: -1 };

// Main exercise
let countStr = "Count: ";

fs.readFile("./input.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const parsedLines = data.trim().split("\n");

  let samePosCount = 0;
  for (const line of parsedLines) {
    const yAxisMovements = line
      .split("")
      .filter((step) => step === "N" || step === "S");

    const xAxisMovements = line
      .split("")
      .filter((step) => step === "E" || step === "W");

    let [yStepCount, xStepCount] = [0, 0];
    for (const yStep of yAxisMovements) {
      yStepCount += movementMap[yStep];
    }

    if (yStepCount !== 0) continue;

    for (const xStep of xAxisMovements) {
      xStepCount += movementMap[xStep];
    }

    if (xStepCount !== 0) continue;

    samePosCount++;
  }

  countStr += samePosCount;

  fs.writeFile("./answer.txt", countStr, (err) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log("Done!");
  });
});

// EXTENSION

// let boolStr;

// fs.readFile("./input.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }

//   const parsedLines = data.trim().split("\n");

//   for (const line of parsedLines) {
//     const yAxisMovements = line
//       .split("")
//       .filter((step) => step === "N" || step === "S");

//     const xAxisMovements = line
//       .split("")
//       .filter((step) => step === "E" || step === "W");

//     let [yStepCount, xStepCount] = [0, 0];
//     for (const yStep of yAxisMovements) {
//       yStepCount += movementMap[yStep];
//     }

//     for (const xStep of xAxisMovements) {
//       xStepCount += movementMap[xStep];
//     }

//     if (xStepCount === 0 && yStepCount === 0) boolStr = "true";
//   }

//   fs.writeFile("./answer.txt", boolStr, (err) => {
//     if (err) {
//       console.error(err);
//       return;
//     }

//     console.log("Done!");
//   });
// });
