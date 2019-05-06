// n: 5;
// queries: [[1, 2, 100], [2, 5, 100], [3, 4, 100]];
// Expected Output: 200
function arrayManipulation(n, queries) {
  let max = 0;
  let hashMapHelper = new Map();
  for (let query of queries) {
    for (let i = query[0]; i <= query[1]; i++) {
      const prevValue = hashMapHelper.get(i);
      const newVlaue =
        typeof hashMapHelper.get(i) === "undefined"
          ? query[2]
          : prevValue + query[2];

      hashMapHelper.set(i, newVlaue);
    }
  }

  for (const [_, value] of hashMapHelper) {
    max = Math.max(max, value);
  }

  return max;
}

const queries = [[1, 2, 100], [2, 5, 100], [3, 4, 100]];
const n = 5;

console.log(arrayManipulation(n, queries));
