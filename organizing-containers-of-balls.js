function organizingContainers(container) {
  let ballsSum = [];
  let containerSum = [];
  for (let i = 0; i < container.length; i++) {
    let sumB = 0;
    let sumC = 0;
    for (let j = 0; j < container.length; j++) {
      sumC += container[i][j];
      sumB += container[j][i];
    }

    ballsSum.push(sumB);
    containerSum.push(sumC);
  }

  ballsSum = ballsSum.sort((a, b) => a - b);
  containerSum = containerSum.sort((a, b) => a - b);

  return ballsSum.every((it, i) => it === containerSum[i]) ? 'Possible' : 'Impossible'
}

const input = [
  [0, 2, 1],
  [1, 1, 1],
  [2, 0, 1],
];

const res = organizingContainers(input);
console.log(res);