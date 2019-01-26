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

function getAllPairsByCondition(arr) {
    let res = [];

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i; j < arr.length - 1; j++) {
            res.push([arr[i], arr[j + 1]]);
        }
    }

    return res;
};

function divisibleSumPairs(n, k, ar) {
    return getAllPairsByCondition(ar).filter(it => (it[0] + it[1]) % k === 0).length;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nk = readLine().split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = divisibleSumPairs(n, k, ar);

    ws.write(result + "\n");

    ws.end();
}