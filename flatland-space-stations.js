function flatlandSpaceStations(n, c) {
  const arrOfRes = [];
  for (let i = 0; i < n; i++) {
    let minDist = Math.abs(c[0] - i);
    for (let j = 0; j < c.length; j++) {
      const currentDist = Math.abs(c[j] - i);
      if (currentDist < minDist) {
        minDist = currentDist;
      }
    }
    arrOfRes.push(minDist);
  }

  let max = arrOfRes[0];
  for (let i = 0; i < arrOfRes.length; i++) {
    if (arrOfRes[i] > max) {
      max = arrOfRes[i];
    }
  }
  return max;
}

console.log(flatlandSpaceStations(5, [0, 4]));