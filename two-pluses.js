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
      gridAs2DArray[i][j] === "G" &&
        plusAreases.push(
          getPlusAreaByCordinates(
            {
              i,
              j
            },
            gridAs2DArray,
            plusAreases
          )
        );
    }
  }

  if (plusAreases.length === 1) {
    return plusAreases.pop();
  }

  plusAreases = plusAreases.sort((a, b) => b - a);
  return plusAreases[0] * plusAreases[1];
}

const getPlusAreaByCordinates = (cordinates, arr, areas) => {
  let { i, j } = cordinates;
  arr[i][j] = areas.length;
  let currentArr = 1;

  while (true) {
    let overlapedPluses = [];

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
      overlapedPluses.push(areas[arr[i][j - currentArr]]);
      if (areas[arr[i][j - currentArr]] > currentArr * 4 + 1) {
        currentArr--;
        break;
      }
    }

    if (arr[i][j - currentArr] !== "G") {
      overlapedPluses.push(areas[arr[i][j + currentArr]]);
      if (areas[arr[i][j + currentArr]] > currentArr * 4 + 1) {
        currentArr--;
        break;
      }
    }

    if (arr[i][j - currentArr] !== "G") {
      overlapedPluses.push(areas[arr[i + currentArr][j]]);
      if (areas[arr[i + currentArr][j]] > currentArr * 4 + 1) {
        currentArr--;
        break;
      }
    }

    if (arr[i][j - currentArr] !== "G") {
      overlapedPluses.push(areas[arr[i - currentArr][j]]);
      if (areas[arr[i - currentArr][j]] > currentArr * 4 + 1) {
        currentArr--;
        break;
      }
    }

    // for (let i = 0; i < arr.length; i++) {
    //   for (let j = 0; j < arr[i].length; j++) {
    //     if (overlapedPluses)
    //   }
    // }
    arr[i][j - currentArr] = areas.length;
    arr[i][j + currentArr] = areas.length;
    arr[i + currentArr][j] = areas.length;
    arr[i - currentArr][j] = areas.length;
    currentArr++;
  }

  return currentArr * 4 + 1;
};

console.log("result");
console.log(twoPluses(input));
