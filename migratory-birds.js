'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the migratoryBirds function below.
function migratoryBirds(arr) {
    let mapRes = {};

    for(let i = 0; i<arr.length; i++) {
        if (mapRes[arr[i]]) {
            mapRes[arr[i]] = mapRes[arr[i]] + 1;
            continue;
        }

        mapRes[arr[i]] = 1;
    }

    const maxVale = Math.max.apply(null, Object.values(mapRes));
    const minKeyFromMaxValue = Math.min.apply(null, Object.keys(mapRes).filter(it => mapRes[it] === maxVale))
    return minKeyFromMaxValue;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = migratoryBirds(arr);

    ws.write(result + '\n');

    ws.end();
}