function timeConversion(s) {
    const splited = s.split(':');

    let [
        h,
        min,
        secWithIndicator
    ] = splited;

    const sec = secWithIndicator.slice(0, 2);
    const indicator = secWithIndicator.slice(2);

    if (h === '12' && indicator === 'AM') {
        h = '00';
    } else if (h === '12' && indicator === 'PM') {
        h = '12'
    } else {
        h = indicator === 'PM' ? String(+h + 12) : h;
    }

    return `${h}:${min}:${sec}`;
}

console.log(timeConversion('12:00:00AM'));