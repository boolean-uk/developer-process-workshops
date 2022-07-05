const isBackToStart = require("./isBackToStart");

const countReturnsToStart = (lines) => {
  const resulsOfMovements = lines.map((line) => {
    return isBackToStart(line);
  });

  return resulsOfMovements.filter((result) => result).length;
};

module.exports = countReturnsToStart;
