function minimumSwaps(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    !!(arr[i] - (i + 1)) && ++result;
  }

  console.log("NOT ON PLACE : ", result);
  return result > 0 ? result - 1 : 0;
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
