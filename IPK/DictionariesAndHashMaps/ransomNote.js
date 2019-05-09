// 6 4
// give me one grand today night
// give one grand today
// result: Yes

// 6 5
// two times three is not four
// two times two is four
// result: No
const fromArrayToHasMapaWordNumber = words => {
  let result = {};

  for (let i = 0; i < words.length; i++) {
    result[words[i]] = !!result[words[i]] ? result[words[i]] + 1 : 1;
  }

  return result;
};

const fromArrayToHasMapaWordNumber2 = words =>
  words.reduce(
    (curr, acc) => ({
      ...acc,
      [acc]: !!acc[curr] ? acc[curr] + 1 : 1
    }),
    {}
  );

function checkMagazine(magazine, note) {
  if (magazine.length < note.length) {
    return "No";
  }

  const hashMap = fromArrayToHasMapaWordNumber(magazine);
  for (let word of note) {
    const wordExist = !!hashMap[word];

    if (!wordExist) {
      return "No";
    }

    hashMap[word]--;
  }

  return "Yes";
}

const magazineInput = "give me one grand today night".split(" ");
const notInput = "give one grand today one".split(" ");

console.log(checkMagazine(magazineInput, notInput));

//Performance test for loop vs reduce
const bigInput1 = Array(100000000).map(
  () => Math.floor(Math.random() * 100000000) + 1 + ""
);

const bigInput2 = Array(100000000).map(
  () => Math.floor(Math.random() * 100000000) + 1 + ""
);

console.time("T2");
fromArrayToHasMapaWordNumber2(bigInput2);
console.timeEnd("T2");

console.time("T1");
fromArrayToHasMapaWordNumber(bigInput1);
console.timeEnd("T1");
