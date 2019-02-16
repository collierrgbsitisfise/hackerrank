function surfaceArea(A) {
  let totalArea = 0;
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[i].length; j++) {
      const cH = A[i][j];
      const rN = j !== A[i].length - 1 ? A[i][j + 1] : null;
      const lN = j !== 0 ? A[i][j - 1] : null;
      const dN = i !== A.length - 1 ? A[i + 1][j] : null;
      const uN = i !== 0 ? A[i - 1][j] : null;

      console.log(`i: ${i}, j: ${j} = `, areaOfOneColumn(cH, lN, rN, uN, dN));
      totalArea += areaOfOneColumn(cH, lN, rN, uN, dN)
    }
  }

  return totalArea;
}

/**
 * 
 * @param {number} cH  - column height
 * @param {number | null} lN  - left neighbour heigh
 * @param {number | null} rN  - right neighbour heigh
 * @param {number | null} uN  - up neighbour heigh
 * @param {number | null} dN  - down neighbour heigh
 */
const areaOfOneColumn = (cH, lN, rN, uN, dN) => {
  const areaWithoutNeighbours = areaOfOneColumnWithoutNeighbours(cH);

  let lNH = 0;
  let rNH = 0;
  let uNH = 0;
  let dNH = 0;

  if (lN !== null) {
    lNH = lN >= cH ? cH : lN;
  }

  if (rN !== null) {
    rNH = rN >= cH ? cH : rN;
  }

  if (uN !== null) {
    uNH = uN >= cH ? cH : uN;
  }

  if (dN !== null) {
    dNH = dN >= cH ? cH : dN;
  }

  return areaWithoutNeighbours - lNH - rNH - uNH - dNH;
}

const areaOfOneColumnWithoutNeighbours = n => ((n * 4) + 2);

console.log(surfaceArea([
  [1, 3, 4],
  [2, 2, 3],
  [1, 2, 4],
]));