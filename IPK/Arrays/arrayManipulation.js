// n: 5;
// queries: [[1, 2, 100], [2, 5, 100], [3, 4, 100]];
// Expected Output: 200
function arrayManipulation(n, queries) {
  let max = 0;
  let hashMapHelper = {};
  for (let query of queries) {
    for (let i = query[0]; i <= query[1]; i++) {
      const prevValue = hashMapHelper[i];
      const newVlaue =
        typeof hashMapHelper[i] === "undefined"
          ? query[2]
          : prevValue + query[2];

      max = Math.max(max, newVlaue);
      hashMapHelper[i] = newVlaue;
    }
  }

  return max;
}

const queries = [[1, 2, 100], [2, 5, 100], [3, 4, 100]];
const n = 5;

console.log(arrayManipulation(n, queries));
