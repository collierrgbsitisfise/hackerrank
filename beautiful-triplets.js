function beautifulTriplets(conditionValue, arr) {
  return findTriplets(arr, conditionValue).length;
}

//The algrthm complexety if O(n^3)
const findTriplets = (arr, conditionValue) => {
  const result = [];

  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      if ((arr[j] - arr[i] === conditionValue)) {
        for (let k = j + 1; k < arr.length; k++) {
          (arr[k] - arr[j] === conditionValue) &&
          result.push([i, j, k]);
        }
      }
    }
  }

  return result;
}

console.log(beautifulTriplets(1, [2, 2, 3, 4, 5]));