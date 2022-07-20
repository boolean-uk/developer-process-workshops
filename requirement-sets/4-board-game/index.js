const directions = {
  N: {
    move: [0, 1],
    L: "W",
    R: "E",
  },
  E: {
    move: [1, 0],
    L: "N",
    R: "S",
  },
  S: {
    move: [0, -1],
    L: "E",
    R: "W",
  },
  W: {
    move: [-1, 0],
    L: "S",
    R: "N",
  },
};

const movePiece = (intructionsStr) => {
  const intructions = intructionsStr.toUpperCase().split("");

  let currentDirection = "N";
  let currentCoords = [0, 0];

  for (const intruction of intructions) {
    if (!isAMove(intruction)) {
      currentDirection = directions[currentDirection][intruction];
      continue;
    }

    currentCoords = currentCoords.map((coord, i) => {
      const step = directions[currentDirection].move[i];

      if (!isValidMove(coord, step)) return coord;

      return coord + step;
    });
  }

  return formattedResult(currentCoords, currentDirection);
};

const isAMove = (instruction) => instruction === "M";

const isValidMove = (currentPosition, step) =>
  currentPosition + step >= 0 && currentPosition + step <= 4;

const formattedResult = (coord, direction) => `${coord.join(" ")} ${direction}`;

module.exports = movePiece;
