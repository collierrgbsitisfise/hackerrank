function hourglassSum(matrix) {
  let sums = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (isCorrectPositionForHourGlass(i, j, 6)) {
        sums.push(getHourglasSum(i, j, matrix));
      }
    }
  }

  return Math.max(...sums);
}

const isCorrectPositionForHourGlass = (i, j, matLen) => {
  const isCorrectJIndex = j + 3 <= matLen;
  const isCorrectIIndex = i + 3 <= matLen;
  return isCorrectJIndex && isCorrectIIndex;
};

const getHourglasSum = (iIdx, jIdx, matrix) => {
  let sum = 0;
  for (let i = iIdx; i < iIdx + 3; i++) {
    for (let j = jIdx; j < jIdx + 3; j++) {
      if (i - 1 === iIdx && (j === jIdx || j === jIdx + 2)) {
        continue;
      }
      sum += matrix[i][j];
    }
  }

  return sum;
};
