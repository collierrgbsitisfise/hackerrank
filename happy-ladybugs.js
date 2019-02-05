function happyLadybugs(inputStr) {
  const mapped = getMapWithVal(inputStr);

  const single = Object.keys(mapped)[0];


  //only one character and it is space
  if (Object.keys(mapped).length === 1 && single === '_') {
    return 'YES';
  }

  //one caracter and it is ladyBug
  if (Object.keys(mapped).length === 1 && single !== '_' && mapped[single] === 1) {
    return 'NO';
  }


  //exist single ladybug
  if (singleLadyBug(mapped)) {
    return 'NO';
  }

  // non space and ladyBugs not are "happy"
  if (!existSpace(mapped) && !areAllbugsAlreadyHappy(inputStr)) {
    return 'NO';
  }

  // non space and ladyBugs already "happy"
  if (!existSpace(mapped) && areAllbugsAlreadyHappy(inputStr)) {
    return 'YES';
  }

  //otherwise
  return 'YES'
}

const areAllbugsAlreadyHappy = (inputStr) => {
  for (let i = 0; i < inputStr.length; i++) {
    if ((inputStr[i - 1] && inputStr[i - 1] !== inputStr[i]) && (inputStr[i + 1] && inputStr[i + 1] !== inputStr[i])) {
      return false
    }
  }

  return true;
}
const singleLadyBug = (map) => Object.keys(map).some(val => map[val] === 1 && val !== '_');

const existSpace = (map) => Object.keys(map).some(val => val === '_');

const getMapWithVal = (input) =>
  input.split('').reduce((acc, curr) => Object.assign(acc, {
    [curr]: acc[curr] ? acc[curr] + 1 : 1,
  }), {});


console.log(happyLadybugs('RRGGBBXX'));