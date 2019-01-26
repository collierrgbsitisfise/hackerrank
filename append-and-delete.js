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

// Complete the appendAndDelete function below.
function appendAndDelete(s, t, k) {
    const SL = s.length;
    const TL = t.length;
    let commonLength = 0;
    for (let i = 0; i < Math.min(SL,TL); i++) {
        if (s[i] == t[i]) {
            commonLength++
        } else {
            break;
        }
    }

    if ((SL + TL - 2*commonLength)>k){
        return 'No';
    } else if ((SL + TL - 2*commonLength)%2==k%2){
        return 'Yes';
    } else if(SL + TL - k < 0) {
        return 'Yes';
    } else {
        return 'No';
    }
}
const isSubstring = (s1, s2) => {
    let tmpS = '';
    for (let i=0; i<s2.length; i++) {
        tmpS = s2.substring(0,s2.length - i);
        if (s1.includes(tmpS)) {
            return tmpS; 
        }
    }
    return false;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const t = readLine();

    const k = parseInt(readLine(), 10);

    let result = appendAndDelete(s, t, k);

    ws.write(result + "\n");

    ws.end();
}
