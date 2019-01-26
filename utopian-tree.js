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

// Complete the utopianTree function below.
function utopianTree(n) {
    let currentH = 1;
    let isSpring = true;

    let cyleMapper = {
        'spring': input => input * 2,
        'summer': input => input + 1
    }

    return n !== 0 ? Array(n).fill(0).map((_,indx) => indx + 1).map(it => {
        let res = it % 2 === 0 ?  currentH + 1 : currentH * 2;
        currentH = res;
        return currentH;
    }).pop() : currentH;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        let result = utopianTree(n);

        ws.write(result + "\n");
    }

    ws.end();
}
