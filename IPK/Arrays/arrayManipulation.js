// n: 5;
// queries: [[1, 2, 100], [2, 5, 100], [3, 4, 100]];
// Expected Output: 200
function arrayManipulation(n, queries) {
  let max = 0;
  for (let i = 1; i <= n; i++) {
    let current = 0;
    for (let query of queries) {
      if (i >= query[0] && i <= query[1]) {
        current += query[2];
      }
    }

    max = Math.max(max, current);
  }

  return max;
}

const queries = [[1, 2, 100], [2, 5, 100], [3, 4, 100]];
const n = 5;

console.log(arrayManipulation(n, queries));
