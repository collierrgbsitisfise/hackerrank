// n: 5;
// queries: [[1, 2, 100], [2, 5, 100], [3, 4, 100]];
// Expected Output: 200
function arrayManipulation(n, queries) {
  const initArray = Array(n).fill(0);
  for (let query of queries) {
    const value = query[2];
    const startIdx = query[0] - 1;
    const endIdx = query[1] - 1;
    for (let i = startIdx; i <= endIdx; i++) {
      initArray[i] += value;
    }
  }

  return Math.max(...initArray);
}

const queries = [[1, 2, 100], [2, 5, 100], [3, 4, 100]];
const n = 5;

console.log(arrayManipulation(n, queries));
