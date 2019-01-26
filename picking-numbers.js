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

// Complete the pickingNumbers function below.
function pickingNumbers(a) {
    let res = [];

    for (let i=0; i<a.length; i++) {
        let arrInsert = [];
        let currValue = a[i];
        for (let j=0; j<a.length; j++) {
            if (Math.abs(a[j] - currValue) <= 1 && !arrInsert.find(el => Math.abs(a[j] - el) > 1)) {
                arrInsert.push (a[j]);
            }
        }
        res.push(arrInsert);
    }

    return res.map(it => it.length).sort((a,b) => {
        return a == b ? 0 : a < b ? -1 : 1
    }).pop();
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    let result = pickingNumbers(a);

    ws.write(result + "\n");

    ws.end();
}
