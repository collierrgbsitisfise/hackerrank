"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", inputStdin => {
  inputString += inputStdin;
});

process.stdin.on("end", _ => {
  inputString = inputString
    .replace(/\s*$/, "")
    .split("\n")
    .map(str => str.replace(/\s*$/, ""));

  main();
});

function readLine() {
  return inputString[currentLine++];
}

// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
  let res = 0;
  let currPos = 0;
  while (currPos < c.length - 1) {
    if (c[currPos + 2] - 1 && c.length - currPos - 2) {
      currPos += 2;
      res++;
      continue;
    }
    currPos += 1;
    res++;
  }

  return res;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine(), 10);

  const c = readLine()
    .split(" ")
    .map(cTemp => parseInt(cTemp, 10));

  let result = jumpingOnClouds(c);

  ws.write(result + "\n");

  ws.end();
}
