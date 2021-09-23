var integerBreak = function (n) {
    let dp = new Array(n + 1).fill(0)
    dp[2] = 1

    for (let i = 3; i <= n; i++) {
        for (let j = 1; j < i; j++) {
            dp[i] = Math.max(dp[i], dp[i - j] * j, (i - j) * j)
        }
    }
    return dp[n]
};

var integerBreak2 = function (n) {
    let dp = new Array(n + 1).fill(0)
    dp[2] = 1

    for (let i = 3; i <= n; i++) {
        for (let j = 1; j < i; j++) {
            dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j]);
        }
    }
    return dp[n]
};


console.log(integerBreak(10))
console.log(integerBreak2(10))