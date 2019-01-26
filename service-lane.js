function serviceLane(n, cases) {
  return cases.map(curr => getMinFromArr(n.slice(curr[0], curr[1] + 1)));
}

const getMinFromArr = arr =>
  arr.reduce((acc, curr) => curr < acc ? curr : acc, arr.shift());