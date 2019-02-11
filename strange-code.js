function strangeCounter(findS, first = 1, startVal = 3) {
  if (first + startVal - 1 < findS) {
    return strangeCounter(findS, first + startVal, startVal * 2);
  }

  return startVal - (findS - first);
}

console.log(strangeCounter(21));
