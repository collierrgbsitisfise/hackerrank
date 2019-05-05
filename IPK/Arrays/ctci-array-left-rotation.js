// 5 4
// 1 2 3 4 5

function rotLeft(arrLength, n) {
  const result = [];
  const modulo = arrLength % n;

  if (!modulo && n !== 1) {
    return Array(arrLength)
      .fill(0)
      .map((_, idx) => idx + 1);
  }

  for (let i = 0; i < arrLength; i++) {
    const currentValue = i + 1;
    const newIdx = i - n >= 0 ? i - n : n !== 1 ? i + modulo : arrLength - n;
    result[newIdx] = currentValue;
  }

  return result;
}

// 5 1 2 3 4
console.log(rotLeft(5, 1));
