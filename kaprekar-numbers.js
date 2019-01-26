'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', function () {
  inputString = inputString.replace(/\s*$/, '')
    .split('\n')
    .map(str => str.replace(/\s*$/, ''));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the kaprekarNumbers function below.
function kaprekarNumbers(p, q) {
  const res = [];
  for (let i = p; i <= q; i++) {
    if (isKaprekar(i * i, i)) {
      res.push(i);
    }
  }

  console.log(res.join(' ') || 'INVALID RANGE');
}

const isKaprekar = (squareNumber, number) => {
  const nS = String(squareNumber).split('');

  let p1 = nS.splice(0, Math.floor((nS.length / 2)));
  let p2 = nS;

  const p1AsNumber = +p1.join('');
  const p2AsNumber = +p2.join('');

  if (p1AsNumber + p2AsNumber === number) {
    return true;
  }

  return false;
}

function main() {
  const p = parseInt(readLine(), 10);

  const q = parseInt(readLine(), 10);

  kaprekarNumbers(p, q);
}