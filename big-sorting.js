// INPUT
// 8;
// 1;
// 2;
// 100;
// 12303479849857341718340192371;
// 3084193741082937;
// 3084193741082938;
// 111;
// 200;

//OUTPUT
// 1;
// 2;
// 100;
// 111;
// 200;
// 3084193741082937;
// 3084193741082938;
// 12303479849857341718340192371;
const fs = require("fs");
const input = fs
  .readFileSync("big-sorts.txt")
  .toString()
  .split("\n");

function bigSorting(unsorted) {
  let wasAnySwap = false;

  do {
    wasAnySwap = false;
    for (let i = 0; i < unsorted.length - 1; i++) {
      if (compareTwoBigInt(unsorted[i], unsorted[i + 1])) {
        wasAnySwap = true;
        [unsorted[i], unsorted[i + 1]] = [unsorted[i + 1], unsorted[i]];
      }
    }
  } while (wasAnySwap);

  return unsorted;
}

const compareTwoBigInt = (a, b) => {
  if (a.length > b.length) {
    return true;
  } else if (a.length < b.length) {
    return false;
  } else {
    for (let i = 0; i < a.length; i++) {
      if (+a[i] > +b[i]) {
        return true;
      } else if (+a[i] < +b[i]) {
        return false;
      }
    }

    return false;
  }
};

console.log(bigSorting(input));
