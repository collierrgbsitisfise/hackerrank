function getPINs(observed) {
    observed = observed.split('').map(it => +it);
    observed = getArrayOfPosibles(observed);

    return observed.reduce((acc, cu) => {
        let ret = [];
        acc.map(obj => {
            cu.map(obj_1 => {
                ret.push(obj + '' + obj_1)
            });
        });
        return ret;
    })
}

const getArrayOfPosibles = observer => observer.map(it => getPosibleForOne(it));
const getPosibleForOne = n => {
    return [
        n + 1 > 9 ? null : n + 1,
        n - 1 < 1 ? null : n - 1,
        n - 3 < 1 ? null : n - 3,
        n + 3 > 9 ? null : n + 3,
        n === 8 ? 0 : null,
    ].filter(a => typeof (a) === 'number').concat(n);
}


const res = getPINs('312');
console.log(res);
// "11": ["11", "22", "44", "12", "21", "14", "41", "24", "42"]
// [ '11', '21', '41', '11', '12', '14', '111', '121', '141' ]


// ┌───┬───┬───┐
// │ 1 │ 2 │ 3 │
// ├───┼───┼───┤
// │ 4 │ 5 │ 6 │
// ├───┼───┼───┤
// │ 7 │ 8 │ 9 │
// └───┼───┼───┘
//     │ 0 │
//     └───┘