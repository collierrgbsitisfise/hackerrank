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

function climbingLeaderboard(scores, alice) {
    let res = [];
    for (let i = 0; i < alice.length; i++) {
        let currentValue = alice[i];
        let groupedInfo = groupByValues([
            ...scores,
            currentValue
        ].sort((a,b) => b - a));
        
        let currPositions = Object.keys(groupedInfo).find(key => groupedInfo[key].includes(currentValue));
        res.push(currPositions);
    }
    return res.map(it => +it);
}

function groupByValues(values) {
    let output = {};
    let currentRank = 1;

    for (let i = 0; i < values.length; i++) {
        let current = values[i];
        let isFirstFinded = true;
        for (let j = 0; j < Object.keys(output).length; j++) {
            if (output[Object.keys(output)[j]].includes(current)) {
                isFirstFinded = false;
                output[Object.keys(output)[j]] = [...output[Object.keys(output)[j]], current];
            }
        }
        if (isFirstFinded) {
            output[currentRank] = [current];
            currentRank++;
        }
    }

    return output;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const scoresCount = parseInt(readLine(), 10);

    const scores = readLine().split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

    const aliceCount = parseInt(readLine(), 10);

    const alice = readLine().split(' ').map(aliceTemp => parseInt(aliceTemp, 10));

    let result = climbingLeaderboard(scores, alice);

    ws.write(result.join("\n") + "\n");

    ws.end();
}
