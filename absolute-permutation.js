function absolutePermutation(n, k) {
  let vector = [];
  if (!k) {
    return Array(n)
      .fill(0)
      .map((_, i) => ++i);
  }

  if (n % k == 0 && (n / k) % 2 == 0) {
    for (let i = 1; i <= n; i++) {
      vector.push(i + (Math.floor((i - 1) / k) % 2 ? -k : k));
    }
  } else {
    return [-1];
  }

  return vector;
}

console.log(absolutePermutation(2, 1));
