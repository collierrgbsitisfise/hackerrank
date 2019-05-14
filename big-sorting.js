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
  return quickSort(unsorted, 0, unsorted.length - 1);
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
/*reolve using quickSort not bubleSort*/
function swap(items, firstIndex, secondIndex) {
  const temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}

function partition(items, left, right) {
  let pivot = items[Math.floor((right + left) / 2)];
  let leftIdx = left;
  let rightIdx = right;

  while (leftIdx <= rightIdx) {
    while (compareTwoBigInt(items[rightIdx], pivot)) {
      rightIdx--;
    }

    while (compareTwoBigInt(pivot, items[leftIdx])) {
      leftIdx++;
    }

    if (leftIdx <= rightIdx) {
      swap(items, leftIdx, rightIdx);
      leftIdx++;
      rightIdx--;
    }
  }
  return leftIdx;
}

function quickSort(items, left, right) {
  let index;
  if (items.length > 1) {
    index = partition(items, left, right);
    if (left < index - 1) {
      quickSort(items, left, index - 1);
    }
    if (index < right) {
      quickSort(items, index, right);
    }
  }
  return items;
}

console.log(bigSorting(input));
