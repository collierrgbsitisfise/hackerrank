const fs = require("fs");
//Input example
// 1234567890
// 0987654321
// 1111111111
// 1111111111
// 2222222222

// 876543
// 111111
// 111111

//Answer: YES
const converArrayOfStringsTo2DArray = arr =>
  arr.reduce((acc, curr) => [...acc, curr.split("")], []);

const isEqual2DArrays = (arr, arr2) => {
  for (let i = 0; i < arr.length; i++) {
    if (!arr2[i]) {
      return false;
    }
    for (let j = 0; j < arr[i].length; j++) {
      if (!arr2[i][j]) {
        return false;
      }

      if (arr2[i][j] !== arr[i][j]) {
        return false;
      }
    }
  }

  return true;
};

const getSubMatrix = (arr, numRows, numColumns, currRow, currColumn) => {
  let result = [];

  for (let i = currRow; i < currRow + numRows; i++) {
    result.push(arr[i].slice(currColumn, currColumn + numColumns));
  }

  return converArrayOfStringsTo2DArray(result);
};

function gridSearch(G, P) {
  const numColumns = P[0].length;
  const numRows = P.length;

  // step convert array of strings to 2d arrays
  const [gAS2DArray, pAS2DArray] = [G, P].map(converArrayOfStringsTo2DArray);

  for (let i = 0; i <= gAS2DArray.length - numRows; i++) {
    for (let j = 0; j <= gAS2DArray[i].length - numColumns; j++) {
      const firstLine = gAS2DArray[i].join('').slice(j, j + numColumns);
      if (firstLine === P[0]) {
        const subMatrix = getSubMatrix(G, numRows, numColumns, i, j);
        if (isEqual2DArrays(pAS2DArray, subMatrix)) {
          return "YES";
        }
      }
    }
  }

  return "NO";
}

const [GDATA, PDATA] = ["input1.txt", "input2.txt"]
.map(path => fs.readFileSync(path))
  .map(String)
  .map(data => data.split("\n"));

console.log(GDATA);
console.log(PDATA);

// const G = GDATA.split("\n");
// console.log(G);

const P = ["115", "116"];

console.log(gridSearch(GDATA, PDATA));
// console.log(getSubMatrix(G, 5, 6, 1, 1));