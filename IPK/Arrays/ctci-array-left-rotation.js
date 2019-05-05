// 5 4
// 1 2 3 4 5

function rotLeft(arr, n) {
  const result = [];
  const arrLength = arr.length;

  if (n === arrLength || n === 0) {
    return arr;
  }

  const nIsBiggerOrThanLength = n > arrLength;
  const getIdxForNGratherThanN = (i, n) =>
    i - n >= 0 ? i - n : arrLength - Math.abs(i - n);

  for (let i = 0; i < arrLength; i++) {
    const currentValue = arr[i];
    const newIdx =
      i - n >= 0
        ? i - n
        : !nIsBiggerOrThanLength
        ? arrLength - Math.abs(i - n)
        : getIdxForNGratherThanN(i, n);

    result[newIdx] = currentValue;
  }

  return result;
}

// 5 1 2 3 4
const arrInput = [
  41,
  73,
  89,
  7,
  10,
  1,
  59,
  58,
  84,
  77,
  77,
  97,
  58,
  1,
  86,
  58,
  26,
  10,
  86,
  51
];

console.log(rotLeft(arrInput, 10));
