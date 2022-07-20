const fs = require("fs");
const isBackToStart = require("./isBackToStart");

// Extension
fs.readFile("./extension-input.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const answer = String(isBackToStart(data));

  fs.writeFile("./answer.txt", answer, (err) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log("Done!");
  });
});
