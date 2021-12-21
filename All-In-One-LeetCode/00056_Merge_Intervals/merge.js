const merge = arr => {
    if (arr.length === 1) return [arr[0]];
    let N = arr.length;
    arr.sort((a, b) => a[0] - b[0]);
    let res = [arr[0]];

    for (let i = 1; i < N; i++) {
        let last = res[res.length - 1];
        let curr = arr[i];

        if (last[1] >= curr[0]) {
            last[1] = Math.max(last[1], curr[1]);
        } else {
            res.push(curr);
        }
    }
    return res;
}