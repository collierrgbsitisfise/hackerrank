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
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the pageCount function below.
 */
function pageCount(n, p) {
    let arrEx = [];
    let currPage = 0;
    for (let i = 0; i <= Math.trunc(n / 2); i++) {
        arrEx.push([
            currPage++,
            !(n % 2) && i == Math.trunc(n / 2) ? null : currPage++
        ]);
    }

    const findIndex = arrEx.findIndex(it => it.find(it2 => it2 == p));
    return Math.min.apply(null, [arrEx.length - findIndex - 1, findIndex]);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const p = parseInt(readLine(), 10);

    let result = pageCount(n, p);

    ws.write(result + "\n");

    ws.end();
}
