function absolutePermutation(n, k) {
  const setInput = new Array(n).fill(0).map((_, i) => ++i);
  const corectPerm = getPermutations(setInput, k);

  if (corectPerm) {
    return corectPerm;
  }

  return -1;
}

const isAbsolutePermutation = (arr, k) => {
  let isAbsolute = true;
  for (let i = 0; i < arr.length; i++) {
    if (Math.abs(arr[i] - i - 1) - k !== 0) {
      return false;
    }
  }

  return isAbsolute;
}

const getPermutations = (arr, k) => {
  let res = false;
  const permutations = (arr, permut = []) => {
    if (!arr.length && isAbsolutePermutation(permut, k)) {
      res = permut;
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      permut = [...permut, arr[i]];
      permutations([...arr.slice(0, i), ...arr.slice(i + 1)], permut);
      permut = permut.slice(0, permut.length - 1);
    }
  };

  permutations(arr);

  return res;
}



console.log(absolutePermutation(10, 5));