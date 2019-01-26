'use strict';

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

// Complete the extraLongFactorials function below.
function extraLongFactorials(userInt) {
  if (userInt === 0) return "1";

  if (!userInt) return "";

  var i,
    nextNumber,
    carret,
    result = userInt
      .toString()
      .split("")
      .reverse()
      .map(Number);

  while (--userInt) {
    i = carret = 0;

    while ((nextNumber = result[i++]) !== undefined || carret) {
      carret = (nextNumber || 0) * userInt + carret;
      result[i - 1] = carret % 10;
      carret = parseInt(carret / 10);
    }
  }
    
  return result.reverse().join("");

}

function main() {
    const n = parseInt(readLine(), 10);

    console.log(extraLongFactorials(n));
}
