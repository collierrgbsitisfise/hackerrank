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
const converArrayOfStringsTo2DArray = (arr) => arr.reduce((acc, curr) => [...acc, curr.split('')], []);

const isEqual2DArrays = (arr, arr2) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].join('') !== arr2[i].join('')) {
      return false;
    }
  }

  return true;
}

const getSubMatrix = (arr, numRows, numColumns, currRow, currColumn) => {
  let result = [];

  for (let i = currRow; i < arr.length - numRows; i++) {
    result.push(arr[i].slice(currColumn, currColumn + numColumns));
  }

  return converArrayOfStringsTo2DArray(result);
}

function gridSearch(G, P) {
  const numColumns = P[0].length;
  const numRows = P.length;
  // step convert array of strings to 2d arrays
  const [gAS2DArray, pAS2DArray] = [G, P].map(converArrayOfStringsTo2DArray);

  for (let i = 0; i < gAS2DArray.length - numRows; i++) {
    for (let j = 0; j < gAS2DArray[i].length - numColumns; j++) {
      const subMtx = getSubMatrix(G, numRows, numColumns, i, j);
      if (isEqual2DArrays(pAS2DArray, subMtx)) {
        return 'YES';
      }
    }
  }

  return 'NO'
}


const G = [
  '7283455864',
  '6731158619',
  '8988242643',
  '3830589324',
  '2229505813',
  '5633845374',
  '6473530293',
  '7053106601',
  '0834282956',
  '4607924137'
];

const P = ['9505', '3845', '3530'];


console.log(gridSearch(G, P));
// console.log(getSubMatrix(G, 5, 6, 1, 1));