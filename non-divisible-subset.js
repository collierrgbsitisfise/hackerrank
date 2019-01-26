function nonDivisibleSubset(k, s) {
    let N = s.length;
    let F = Array(k).fill(0);

    for (let i=0; i<N; i++) {
        F[s[i] % k] += 1;
    }

    console.log(F);
    console.log('*****');
    if (k %  2 == 0) {
        F[Math.floor(k/2)] = Math.min(Math.floor(F[k / 2]), 1)
    }
    console.log(F);
    console.log('*****');
    let res = Math.min(F[0], 1);

    for (let i = 1; i <= Math.floor(k/2); i++) {
        res += Math.max(F[i], F[k - i]);
    }
    return res;
}

console.log(nonDivisibleSubset(3, [1, 7, 2, 4]));