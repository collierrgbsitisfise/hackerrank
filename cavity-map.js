function cavityMap(grid) {
  const N = grid.length;
  const M = grid[0].length;

  const resCor = new Array(N).fill(0).map(_ => new Array(M).fill(0));

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      const currPos = {
        x: i,
        y: j
      };
      if (!isCutOff(currPos, N, M) && isRoundedBySmallerValues(currPos, grid[i][j], grid)) {
        resCor[i][j] = 'X';
      } else {
        resCor[i][j] = grid[i][j];
      }
    }
  }
  return outMatrix(resCor);
}

/**
 * @param {Object} { x, y } x -row position, y - column position
 * @param {Nmber} n - number of rows
 * @param {Number} m - number of columns
 */
const isCutOff = ({
  x,
  y
}, n, m) => isCutOfByX(x, n) || isCutOfByY(y, m);

const isCutOfByX = (x, n) => x == 0 || x == (n - 1);
const isCutOfByY = (y, m) => y == 0 || y == (m - 1);

const isRoundedBySmallerValues = ({
    x,
    y
  }, currVal, grid) =>
  grid[x][y - 1] < currVal &&
  grid[x][y + 1] < currVal &&
  grid[x - 1][y] < currVal &&
  grid[x + 1][y] < currVal;

const outMatrix = (mat) => {
  let resStr = '';
  mat.forEach((element, index) => {
    resStr += element.join('') + ((index === mat.length - 1) ? '' : '\n');
  });
  return resStr;
}

const inputArr = [
  [1, 1, 1, 2],
  [1, 9, 1, 2],
  [1, 8, 9, 2],
  [1, 2, 3, 4]
];

console.log(cavityMap(inputArr));