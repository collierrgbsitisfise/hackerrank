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

// Complete the equalizeArray function below.
function equalizeArray(arr) {
    return arr.length  - arr.filter(it => it === +getKeyWithMaxValue(groupByCount(arr))).length;
}

const groupByCount = arr => arr.reduce((acc,curr) => ({...acc, [curr]: acc[curr] ? acc[curr] + 1 : 1}), {});
const getKeyWithMaxValue = obj => Object.keys(obj).reduce((acc,curr) => obj[curr] > obj[acc] ? curr : acc, Object.keys(obj)[0]);

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = equalizeArray(arr);

    ws.write(result + "\n");

    ws.end();
}
