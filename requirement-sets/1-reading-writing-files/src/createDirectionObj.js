const createDirectionObj = (line) => {
  let directionObj = {};
  for (let i = 0; i < line.length; i++) {
    const direction = line[i];
    if (!directionObj[direction]) {
      directionObj[direction] = 1;
    } else {
      directionObj[direction]++;
    }
  }
  return directionObj;
};

module.exports = {
    createDirectionObj
}