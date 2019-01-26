function queensAttack(n, k, r_q, c_q, obstacles) {
    let topN = n - r_q;
    let bottomN = r_q - 1;
    let rightN = n - c_q;
    let leftN = c_q - 1;
    let topLeftN = Math.min(topN, leftN);
    let topRightN = Math.min(topN, rightN);
    let bottomLeftN = Math.min(bottomN, leftN);
    let bottomRightN = Math.min(bottomN, rightN);

    for (let i = 0; i < k; i++) {
        let currI = obstacles[i][0];
        let currJ = obstacles[i][1];
        
        //right
        if (currI === r_q && currJ > c_q) {
            rightN = Math.min(currJ - c_q - 1, rightN);
            continue;
        }

        //left
        if (currI === r_q && currJ < c_q) {
            leftN = Math.min(c_q - currJ - 1, leftN);
            continue;
        }

        //top
        if (currJ === c_q && currI > r_q) {
            topN = Math.min(currI - r_q - 1, topN);
            continue;
        }


        //bottom
        if (currJ === c_q && currI < r_q) {
            bottomN = Math.min(r_q - currI - 1, bottomN);
            continue;
        }

        //topLeft
        if (currI - r_q ===  c_q - currJ && currI > r_q && currJ < c_q) {
            topLeftN = Math.min(currI - r_q - 1, topLeftN);
            continue;
        }

        //topRight
        if (currI - r_q ===  currJ - c_q && currI > r_q && currJ > c_q) {
            topRightN = Math.min(currI - r_q - 1, topRightN);
            continue;
        }

        //bottomLeft
        if (r_q - currI ===  c_q - currJ && currI < r_q && currJ < c_q) {
            bottomLeftN = Math.min(r_q - currI - 1, bottomLeftN);
            continue;
        }

        //bottomRight
        if (r_q - currI ===  currJ - c_q && currI < r_q && currJ > c_q) {
            bottomRightN = Math.min(r_q - currI - 1, bottomRightN);
            continue;
        }
    }
    
    return topN + bottomN + rightN + leftN + topLeftN + topRightN + bottomLeftN + bottomRightN;
}

console.log(queensAttack(5, 8, 4, 3, [ [ 4, 5 ], [4, 1], [5,3], [2, 3], [5,2], [5, 4], [2,1], [2,5]]));