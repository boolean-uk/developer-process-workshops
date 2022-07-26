const movements = {
  'N': { y: 1, x: 0},
  'E': { y: 0, x: 1},
  'S': { y: -1, x: 0},
  'W': { y: 0, x: -1},
}
const directions = Object.keys(movements)
const initial = { x: 0, y: 0 }

module.exports = {
  movements,
  directions,
  initial
}
