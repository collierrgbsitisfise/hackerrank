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

function gridSearch(G, P) {
  const numColumns = P[0].length;
  const numRows = P.length;
  const pASString = P.join("");

  // step convert array of strings to 2d arrays
  const [gAS2DArray, pAS2DArray] = [G, P].map(converArrayOfStringsTo2DArray);

  for (let i = 0; i <= gAS2DArray.length - numRows; i++) {
    for (let j = 0; j <= gAS2DArray[i].length - numColumns; j++) {
      let flag = true;
      for (let k = 0; k < pAS2DArray.length; k++) {
        if (!flag) break;
        for (let m = 0; m < pAS2DArray[k].length; m++) {
          if (pAS2DArray[k][m] !== gAS2DArray[i + k][j + m]) {
            flag = false;
            break;
          }
        }
      }
      if (flag) return "YES";
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
