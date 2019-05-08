// n: 5;
// queries: [[1, 2, 100], [2, 5, 100], [3, 4, 100]];
// Expected Output: 200
//HINT here is used prefix sum algo to decrease time complexety from O(N * M) -> O(N)

function arrayManipulation(n, queries) {
  let max = 0;
  const arr = new Array(n + 2).fill(0);

  for (let query of queries) {
    arr[query[0]] += query[2];
    arr[query[1] + 1] -= query[2];
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + (i !== 0 ? arr[i - 1] : 0);
    max = Math.max(max, arr[i]);
  }

  return max;
}

const queries = [[1, 2, 100], [2, 5, 100], [3, 4, 100]];
const n = 5;

console.log(arrayManipulation(n, queries));
