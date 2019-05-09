// 6 4
// give me one grand today night
// give one grand today
// result: Yes

// 6 5
// two times three is not four
// two times two is four
// result: No
const fromArrayToHasMapaWordNumber = arr =>
  arr.reduce(
    (acc, curr) => ({
      ...acc,
      [curr]: acc[curr] ? ++acc[curr] : 1
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
