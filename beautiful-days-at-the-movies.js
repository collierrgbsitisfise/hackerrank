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

// Complete the beautifulDays function below.
function beautifulDays(i, j, k) {
    let values = new Array(j - i + 1).fill(0)
        .map((_, index) => i + index)

    let reversedValues = values
        .map(reverseNumber)
        .map(trimZeroesFromStart);

    return reversedValues.filter((it, index) => isBD(Math.abs(it - values[index]), k)).length;
}

const trimZeroesFromStart = input => input[0] === '0' && trimZeroesFromStart(input.substring(1, input.length)) || input;

const reverseNumber = input => +String(input).split('').reverse().join('');

const isBD = (in1, in2) => !Boolean(in1%in2);


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const ijk = readLine().split(' ');

    const i = parseInt(ijk[0], 10);

    const j = parseInt(ijk[1], 10);

    const k = parseInt(ijk[2], 10);

    let result = beautifulDays(i, j, k);

    ws.write(result + "\n");

    ws.end();
}