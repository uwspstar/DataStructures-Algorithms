// 1492. The kth Factor of n
const kthFactor = (n, k) => {
    for (let x = 1; x < (n / 2 + 1); x++) {
        if (n % x === 0) k--;
        if (k === 0) return x;
    }
    return k === 1 ? n : -1;
}