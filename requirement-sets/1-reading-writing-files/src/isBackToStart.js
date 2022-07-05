const movementMap = { N: 1, S: -1, E: 1, W: -1 };

const isBackToStart = (line) => {
  const yAxisMovements = line
    .split("")
    .filter((step) => step === "N" || step === "S");

  const xAxisMovements = line
    .split("")
    .filter((step) => step === "E" || step === "W");

  return (
    xAxisMovements.reduce((acc, cur) => (acc += movementMap[cur]), 0) === 0 &&
    yAxisMovements.reduce((acc, cur) => (acc += movementMap[cur]), 0) === 0
  );
};

module.exports = isBackToStart;
