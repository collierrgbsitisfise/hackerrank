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
 * Complete the getMoneySpent function below.
 */
function getMoneySpent(keyboards, drives, b) {
    let pairsB = [];
    
    for (let i=0; i<keyboards.length; i++) {
        for(let j=0; j<drives.length; j++) {
            pairsB.push([keyboards[i],drives[j]]);
        }
    }

    pairsB = pairsB.sort((a, b) => {
        let sumA = a.reduce((it1, it2) => it1 + it2, 0);
        let sumB = b.reduce((it1, it2) => it1 + it2, 0);

        return sumA == sumB ? 0 : sumA > sumB ? 1 : -1;
    }).filter(it => it.reduce((it1, it2) => it1 + it2, 0) <= b);

    return pairsB.length === 0 ? -1 : pairsB.pop().reduce((it1 ,it2) => it1 + it2, 0);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const bnm = readLine().split(' ');

    const b = parseInt(bnm[0], 10);

    const n = parseInt(bnm[1], 10);

    const m = parseInt(bnm[2], 10);

    const keyboards = readLine().split(' ').map(keyboardsTemp => parseInt(keyboardsTemp, 10));

    const drives = readLine().split(' ').map(drivesTemp => parseInt(drivesTemp, 10));

    /*
     * The maximum amount of money she can spend on a keyboard and USB drive, or -1 if she can't purchase both items
     */

    let moneySpent = getMoneySpent(keyboards, drives, b);

    ws.write(moneySpent + "\n");

    ws.end();
}