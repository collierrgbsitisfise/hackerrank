const BgGreen = "\x1b[42m";
const BgBlue = "\x1b[44m";

function colorize(color, output) {
  return ["\033[", color, "m", output, "\033[0m"].join("");
}

const input = [
  "BBBBBGGBGG",
  "GGGGGGGGGG",
  "GGGGGGGGGG",
  "BBBBBGGBGG",
  "BBBBBGGBGG",
  "GGGGGGGGGG",
  "BBBBBGGBGG",
  "GGGGGGGGGG",
  "BBBBBGGBGG",
  "GGGGGGGGGG"
];

const coloredOutput = grid => {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "G") {
        process.stdout.write(colorize(92, " " + grid[i][j] + " "));
      } else if (grid[i][j] === "B") {
        process.stdout.write(colorize(91, " " + grid[i][j] + " "));
      } else {
        process.stdout.write(colorize(94, " " + grid[i][j] + " "));
      }
    }
    process.stdout.write("\n");
  }
};

function twoPluses(grid) {
  let plusAreases = [];
  const gridAs2DArray = grid.map(str => str.split(""));
  for (let i = 0; i < gridAs2DArray.length; i++) {
    for (let j = 0; j < gridAs2DArray[i].length; j++) {
      coloredOutput(gridAs2DArray);
      console.log("\n");
      gridAs2DArray[i][j] === "G" &&
        plusAreases.push({
          area: getPlusAreaByCordinates(
            {
              i,
              j
            },
            gridAs2DArray,
            i + "" + j
          ),
          idx: i + "" + j
        });

      if (plusAreases.length > 2) {
        plusAreases = plusAreases.sort((a, b) => b.area - a.area);
        let a1 = plusAreases[0];
        let a2 = plusAreases[1];
        [...plusAreases.slice(2)].forEach(({ idx }) => {
          for (let i = 0; i < gridAs2DArray.length; i++) {
            for (let j = 0; j < gridAs2DArray[i].length; j++) {
              if (gridAs2DArray[i][j] === idx) {
                gridAs2DArray[i][j] = "G";
              }
            }
          }
        });

        plusAreases = [a1, a2];
      }
    }
  }

  if (plusAreases.length === 1) {
    return plusAreases.pop().area;
  }

  plusAreases = plusAreases.sort((a, b) => b.area - a.area);
  return plusAreases[0].area * plusAreases[1].area;
}

const getAreaByIndex = (idx, arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === idx) {
        sum++;
      }
    }
  }
  return sum;
};

const getPlusAreaByCordinates = (cordinates, arr, idx) => {
  let { i, j } = cordinates;
  arr[i][j] = idx;
  let currentArr = 1;

  while (true) {
    let overlapedPluses = [];
    let overIdx = [];

    //check left
    if (!arr[i][j - currentArr] || arr[i][j - currentArr] === "B") {
      currentArr--;
      break;
    }

    // check right
    if (!arr[i][j + currentArr] || arr[i][j + currentArr] === "B") {
      currentArr--;
      break;
    }

    // check down
    if (!arr[i + currentArr] || arr[i + currentArr][j] === "B") {
      currentArr--;
      break;
    }

    //check up
    if (!arr[i - currentArr] || arr[i - currentArr][j] === "B") {
      currentArr--;
      break;
    }

    if (arr[i][j - currentArr] !== "G") {
      overlapedPluses.push([i, j - currentArr]);
      overIdx.push(arr[i][j - currentArr]);
      if (getAreaByIndex(arr[i][j - currentArr], arr) > currentArr * 4 + 1) {
        currentArr--;
        break;
      }
    }

    if (arr[i][j + currentArr] !== "G") {
      overlapedPluses.push([i, j + currentArr]);
      overIdx.push(arr[i][j + currentArr]);
      if (getAreaByIndex(arr[i][j + currentArr], arr) > currentArr * 4 + 1) {
        currentArr--;
        break;
      }
    }

    if (arr[i + currentArr][j] !== "G") {
      overlapedPluses.push([i + currentArr, j]);
      overIdx.push(arr[i + currentArr][j]);
      if (getAreaByIndex(arr[i + currentArr][j], arr) > currentArr * 4 + 1) {
        currentArr--;
        break;
      }
    }

    if (arr[i - currentArr][j] !== "G") {
      overlapedPluses.push([i - currentArr, j]);
      overIdx.push(arr[i - currentArr][j]);
      if (getAreaByIndex(arr[i - currentArr][j], arr) > currentArr * 4 + 1) {
        currentArr--;
        break;
      }
    }

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if (overlapedPluses.find(it => it[0] === i && it[1] === j)) {
          arr[i][j] = idx;
        }
      }
    }

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if (overIdx.includes(arr[i][j])) {
          arr[i][j] = "G";
        }
      }
    }

    arr[i][j - currentArr] = idx;
    arr[i][j + currentArr] = idx;
    arr[i + currentArr][j] = idx;
    arr[i - currentArr][j] = idx;
    currentArr++;
  }

  return currentArr * 4 + 1;
};

console.log("result");
console.log(twoPluses(input));
