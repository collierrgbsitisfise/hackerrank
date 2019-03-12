const BOMB = "O";
const NO_BOMB = ".";

const smapleInput = [
  "O.....O",
  ".......",
  ".O..O..",
  "...O...",
  ".......",
  "O.....O"
];

function bomberMan(n, grid) {
  //special keyses
  if (n <= 1) {
    return grid;
  }

  if (n % 2 === 0) {
    let result = [];
    for (let i = 0; i < grid.length; i++) {
      result.push(BOMB.repeat(grid[i].length));
    }
    return result;
  }

  const v1 = twoDArrayInArrayOfStrings(threeSecondIteration(arrayOfStringTo2DArray(grid)));
  const v2 = twoDArrayInArrayOfStrings(threeSecondIteration(arrayOfStringTo2DArray(v1)));

  if (n % 4 === 1) {
    return v1;
  }

  return v2;
}

const arrayOfStringTo2DArray = arrOfStrings => {
  const result = [];

  for (let i = 0; i < arrOfStrings.length; i++) {
    result.push(arrOfStrings[i].split(""));
  }

  return result;
};

const twoDArrayInArrayOfStrings = twoDArray => {
  const result = [];

  for (let i = 0; i < twoDArray.length; i++) {
    result.push(twoDArray[i].join(""));
  }

  return result;
};

const arrayOfStringInStringBySeporator = (arrOfStrings, separator = "\n") =>
  arrOfStrings.join(separator);

const getBombsCordinates = grid => {
  const result = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === BOMB) {
        result.push([i, j]);
      }
    }
  }
  return result;
};

const exploreByCordinates = (grid, cordinates) => {
  for (let i = 0; i < cordinates.length; i++) {
    const iCordinate = cordinates[i][0];
    const jCordinate = cordinates[i][1];
    grid[iCordinate][jCordinate] = NO_BOMB;

    //explore 1 cell left
    grid[iCordinate][jCordinate - 1] &&
      (grid[iCordinate][jCordinate - 1] = NO_BOMB);

    //explore 1 cell right
    grid[iCordinate][jCordinate + 1] &&
      (grid[iCordinate][jCordinate + 1] = NO_BOMB);

    //explore 1 cell up
    grid[iCordinate - 1] && (grid[iCordinate - 1][jCordinate] = NO_BOMB);

    //explore 1 cell down
    grid[iCordinate + 1] && (grid[iCordinate + 1][jCordinate] = NO_BOMB);
  }

  return grid;
};

const threeSecondIteration = (grid) => {
  const cordinates = getBombsCordinates(grid);

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      grid[i][j] = BOMB;
    }
  }

  return exploreByCordinates(grid, cordinates);
};

console.log(bomberMan(9, smapleInput));