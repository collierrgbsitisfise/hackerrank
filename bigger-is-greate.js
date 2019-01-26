function biggerIsGreater(word) {
  const answer = findMinimalLexical(fromCharsToNumbers(word));
  if (!answer) {
    return 'no answer';
  }

  return fromNumberToCharsets(answer);
}

const findMinimalLexical = (array) => {
  // Find non-increasing suffix
  var i = array.length - 1;
  while (i > 0 && array[i - 1] >= array[i])
    i--;
  if (i <= 0)
    return false;

  // Find successor to pivot
  var j = array.length - 1;
  while (array[j] <= array[i - 1])
    j--;
  var temp = array[i - 1];
  array[i - 1] = array[j];
  array[j] = temp;

  // Reverse suffix
  j = array.length - 1;
  while (i < j) {
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    i++;
    j--;
  }
  return array;
}

const findLongerNonIncreasingSuffixIndex = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i - 1] < arr[i]) {
      return i;
    }
  }
  return 0;
}

const fromCharsToNumbers = (word) => word.split('').map(l => l.charCodeAt(0));
const fromNumberToCharsets = (arr) => arr.map(num => String.fromCharCode(num)).join('');
console.log(biggerIsGreater('bb'));