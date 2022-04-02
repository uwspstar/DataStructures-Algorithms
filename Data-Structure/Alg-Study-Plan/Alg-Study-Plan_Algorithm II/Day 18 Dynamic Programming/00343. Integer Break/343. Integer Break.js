// 343. Integer Break
/*
Given an integer n, break it into the sum of k positive integers, where k >= 2, and maximize the product of those integers.

Return the maximum product you can get.

 

Example 1:

Input: n = 2
Output: 1
Explanation: 2 = 1 + 1, 1 × 1 = 1.
Example 2:

Input: n = 10
Output: 36
Explanation: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36.
*/
{
    var integerBreak = function (n) {
        //dp[i]为正整数i拆分结果的最大乘积
        let dp = Array(n + 1).fill(0);
        dp[2] = 1;
        for (let i = 3; i <= n; ++i) {
            for (let j = 1; j < i - 1; ++j) {
                //j*(i-j)代表把i拆分为j和i-j两个数相乘
                //j*dp[i-j]代表把i拆分成j和继续把(i-j)这个数拆分，取(i-j)拆分结果中的最大乘积与j相乘
                dp[i] = Math.max(dp[i], Math.max(j * (i - j), j * dp[i - j]));
            }
        }
        return dp[n];
    };
}
{
    // https://leetcode.com/problems/integer-break/discuss/1214718/Recursion-Memoization-JS-Solution
    var integerBreak = function (n) {
        if (n < 2) {
            return -1;
        }
        return dfs(n, new Map());
        // T.C: O(N^2)
        // S.C: O(N^2)
    };


    // returns the possible maximum product
    const dfs = (n, memo) => {
        if (n === 1) {
            return 1;
        }
        if (memo.has(n)) {
            return memo.get(n);
        }
        let max = 0;
        for (let i = 1; i < n; i++) {
            max = Math.max(max, i * Math.max(n - i, dfs(n - i, memo)));
        }
        memo.set(n, max);
        return max;
    }

    // Maximize Number of Nice Divisors (H)
}