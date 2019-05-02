function minimumSwaps(arr) {
  const newArr = [...arr];
  let result = 0;
  let wasSwapedAnyElement = false;
  do {
    wasSwapedAnyElement = false;
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i] !== i + 1) {
        wasSwapedAnyElement = true;
        let tmp = newArr[newArr[i] - 1];
        newArr[newArr[i] - 1] = newArr[i];
        newArr[i] = tmp;
        ++result;
      }
    }
  } while (wasSwapedAnyElement);

  return result > 0 ? result : 0;
}

const input = [
  2,
  31,
  1,
  38,
  29,
  5,
  44,
  6,
  12,
  18,
  39,
  9,
  48,
  49,
  13,
  11,
  7,
  27,
  14,
  33,
  50,
  21,
  46,
  23,
  15,
  26,
  8,
  47,
  40,
  3,
  32,
  22,
  34,
  42,
  16,
  41,
  24,
  10,
  4,
  28,
  36,
  30,
  37,
  35,
  20,
  17,
  45,
  43,
  25,
  19
];

console.log(minimumSwaps(input));
