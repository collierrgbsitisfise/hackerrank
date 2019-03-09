function absolutePermutation(n, k) {

}

const getPermutations = arr => {
  let result = [];

  const permutations = (arr, permut = []) => {
    if (!arr.length) {
      result.push(permut);
    }

    for (let i = 0; i < arr.length; i++) {
      permut = [...permut, arr[i]];
      permutations([...arr.slice(0, i), ...arr.slice(i + 1)], permut);
      permut = permut.slice(0, permut.length - 1);
    }
  };

  permutations(arr);

  return result;
}


console.log(getPermutations([1, 2, 3]));