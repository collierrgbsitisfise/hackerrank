// INPUT:
// s1 = hello;
// s2 = world;
// RESULT:  YES
// INPUT:
// s1 = hi
// s2 = world

const fromArrayToHasMapaWordNumber = words => {
  let result = {};

  for (let i = 0; i < words.length; i++) {
    result[words[i]] = true;
  }

  return result;
};

function twoStrings(s1, s2) {
  const hashMap = fromArrayToHasMapaWordNumber(s1);

  for (let i = 0; i < s2.length; i++) {
    if (hashMap[s2[i]]) {
      return "YES";
    }
  }

  return "NO";
}
