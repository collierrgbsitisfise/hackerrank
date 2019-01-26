function timeInWords(h, m) {
  let minAsString = '';
  let hoursAsString = '';

  if ((+m) == 0) {
    minAsString = returnOClockFormat();
    hoursAsString = values[h];
    return `${hoursAsString} ${minAsString}`;
  } else if ((+m) <= 30) {
    minAsString = returnPastFormat(+m);
    hoursAsString = values[h];
    return `${minAsString} ${hoursAsString}`
  } else {
    minAsString = returnToformat(60 - (+m));
    hoursAsString = values[h] === 'twelve' ? 'one' : values[(1 + h)];
    return `${minAsString} ${hoursAsString}`
  }
}


/**util functions */

const returnOClockFormat = _ => "o' clock";

const returnPastFormat = minute => {
  if (roundValues[minute]) {
    return `${roundValues[minute]} past`;
  } else if (values[minute]) {
    return `${values[minute]} ${minute === 1 ? 'minute' : 'minutes'} past`;
  }

  const dec = +(String(minute)[0] + '0');
  const single = +(String(minute)[1]);
  return `${values[dec]} ${values[single]} minutes past`;
}

const returnToformat = minute => {
  if (roundValues[minute]) {
    return `${roundValues[minute]} to`;
  } else if (values[minute]) {
    return `${values[minute]} ${minute === 1 ? 'minute' : 'minutes'} to`;
  }

  const dec = +(String(minute)[0] + '0');
  const single = +(String(minute)[1]);
  return `${values[dec]} ${values[single]} minutes to`;
}

/**util structures */
const roundValues = {
  15: 'quarter',
  30: 'half',
}

const values = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
}

console.log(timeInWords(1, 1));