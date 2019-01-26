'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
    console.log('input strig');
    console.log(inputString);
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

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    arr = arr.map(a => Number(a));

    const minV = Math.min.apply(null, arr);
    const maxV = Math.max.apply(null, arr);

    const minVIndex = arr.findIndex(x => x === minV);
    const maxVIndex = arr.findIndex(x => x === maxV);

    const arrWithoutMin = [...arr];
    arrWithoutMin.splice(minVIndex, 1)
    const arrWithoutMax = [...arr];
    arrWithoutMax.splice(maxVIndex, 1)

    return `${arrWithoutMax.reduce((a,b) => a + b, 0)} ${arrWithoutMin.reduce((a,b) => a + b, 0)}`
}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let res = miniMaxSum(arr);
    console.log(res);
}


// main();