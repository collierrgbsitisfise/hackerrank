'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', _ => {
  inputString = inputString.replace(/\s*$/, '')
    .split('\n')
    .map(str => str.replace(/\s*$/, ''));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the encryption function below.
function encryption(s) {
  let matrix = [];

  s = s.split('').filter(it => it !== ' ');

  const L = s.length;
  const RL = Math.floor(Math.sqrt(L));
  const CL = Math.ceil(Math.sqrt(L));

  for (let i = 0; i < RL; i++) {
    let arr = s.slice(i * CL, i * CL + CL);
    if (arr.length < CL) {
      arr = [...arr, ...Array(CL - arr.length).fill('')];
    }

    matrix[i] = arr;
  }

  if (RL * CL < L) {
    let tmp = s.slice(RL * CL, L);
    matrix[RL] = [...tmp, ...Array(CL - tmp.length).fill('')]
  }

  let res = '';

  for (let i = 0; i < CL; i++) {
    let str = '';
    for (let j = 0; j < matrix.length; j++) {
      str += matrix[j][i];
    }
    res += str + (i === CL - 1 ? '' : ' ');
  }
  return res;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s = readLine();

  let result = encryption(s);

  ws.write(result + "\n");

  ws.end();
}