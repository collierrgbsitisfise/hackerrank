function saveThePrisoner(n, m, s) {
    const prisonerArr = Array(n).fill(0).map((_, i) => ++i);
    const firstOnedIndex = prisonerArr.findIndex(el => el === s);

    const normalizedPrisonerArr = [
        ...prisonerArr.splice(firstOnedIndex, prisonerArr.length),
        ...prisonerArr.splice(0, firstOnedIndex)
    ];

    const D = Math.floor(m / normalizedPrisonerArr.length);
    const R = m % normalizedPrisonerArr.length;

    return Array(D)
        .fill(0)
        .map(_ => normalizedPrisonerArr)
        .reduce((a, b) => [...a, ...b], [])
        .concat(normalizedPrisonerArr.splice(0, R))[m - 1];
}


console.log(saveThePrisoner(7, 19, 2));