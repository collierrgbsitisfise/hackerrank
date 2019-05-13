// aaabccddd → abccddd → abddd → abd
function superReducedString(s) {
  if (!s.length) {
    return "Empty String";
  }

  if (s.length === 1) {
    return s;
  }

  let i = 0;
  let result = "";
  while (i < s.length) {
    if (s[i] === s[i + 1]) {
      return superReducedString(s.slice(0, i) + s.slice(i + 2));
    }

    result += s[i];
    i += 1;
  }

  return result;
}

console.log(superReducedString("aaabccddd"));
