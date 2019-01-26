function workbook(n, k, arr) {
  let res = 0;
  let currentPage = 1;
  return arr.reduce((acc, curr) => {
    let res = 0;
    const pageTaken = Math.ceil(curr / k);
    const arr = (new Array(pageTaken).fill(0).map((_, index) => currentPage + index)).map((page, pos) => {
      curr / k
      return page;
    });
    let z = 0;
    for (let i = 1; i <= curr; i++) {
      let currK = arr[z];
      if (i === currK) {
        res++
      }
      if (!(i % k)) {
        z++;
      }
    }
    currentPage += pageTaken;
    return acc += res;
  }, 0);
}

console.log(workbook(25, 10, [1, 29, 94, 15, 87, 100, 20, 55, 100, 45, 82, 80, 100, 100, 3, 53, 100, 2, 100, 100, 100, 100, 100, 100, 1]));