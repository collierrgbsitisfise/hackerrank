function minimumDistances(arr) {
  const hashMap = {};
  for (let i = 0; i < arr.length; i++) {
    if (hashMap[arr[i]] && hashMap[arr[i]].length < 2) {
      hashMap[arr[i]].push(i);
      continue;
    }

    hashMap[arr[i]] = [i];
  }

  const filteredByPairsOnly = Object.entries(hashMap).filter(
    val => val[1].length === 2
  );

  if (!filteredByPairsOnly.length) {
    return -1;
  }
  let min = Math.abs(
    filteredByPairsOnly[0][1][0] - filteredByPairsOnly[0][1][1]
  );
  for (let i = 0; i < filteredByPairsOnly.length; i++) {
    const current = Math.abs(
      filteredByPairsOnly[i][1][0] - filteredByPairsOnly[i][1][1]
    );
    if (current < min) {
      min = current;
    }
  }

  return min;
}

console.log(minimumDistances([7, 1, 3, 4, 1, 7]));
