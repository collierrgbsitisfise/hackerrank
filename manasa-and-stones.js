function stones(n, a, b) {
  const num = n - 1;
  const iterationArr = [...new Array(num).fill(a), ...new Array(num).fill(b)];
  const hMap = {};

  for (let i = 0; i < iterationArr.length; i++) {
    if (i + num > iterationArr.length) {
      continue;
    }
    let sum = 0;
    for (let j = i; j < i + num; j++) {
      sum += iterationArr[j];
    }
    if (!hMap[sum]) hMap[sum] = true;
  }
  return Object.keys(hMap).sort((a, b) => a - b);
}

console.log(stones(4, 10, 100));
