const BgGreen = "\x1b[42m";
const BgBlue = "\x1b[44m";

function colorize(color, output) {
  return ["\033[", color, "m", output, "\033[0m"].join("");
}

const input = [
  "GGGGGGGG",
  "GBGBGGBG",
  "GBGBGGBG",
  "GGGGGGGG",
  "GBGBGGBG",
  "GGGGGGGG",
  "GBGBGGBG",
  "GGGGGGGG"
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
      console.log();
      console.log("----------------------------");
      console.log();
      gridAs2DArray[i][j] === "G" &&
        plusAreases.push(
          getPlusAreaByCordinates(
            {
              i,
              j
            },
            gridAs2DArray
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

const getPlusAreaByCordinates = (cordinates, arr) => {
  let { i, j } = cordinates;

  let currentArr = 1;

  while (true) {
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

    arr[i][j - currentArr] = "K";
    arr[i][j + currentArr] = "K";
    arr[i + currentArr][j] = "K";
    arr[i - currentArr][j] = "K";
    arr[i][j] = "K";
    currentArr++;
  }

  return currentArr * 4 + 1;
};

console.log("result");
console.log(twoPluses(input));
