//343. Integer Break
/*
Given an integer n, break it into the sum of k positive integers, where k >= 2, and maximize the product of those integers.

Return the maximum product you can get.

Input: n = 2 Output: 1
Explanation: 2 = 1 + 1, 1 × 1 = 1.

Input: n = 10 Output: 36
Explanation: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36.
*/
//dp[i] = max(dp[i], max((i - j) * j, dp[i - j] * j));
//对于的正整数 n，当 n≥2 时，可以拆分成至少两个正整数的和。令 k 是拆分出的第一个正整数，则剩下的部分是 n−k，n−k 可以不继续拆分，或者继续拆分成至少两个正整数的和。由于每个正整数对应的最大乘积取决于比它小的正整数对应的最大乘积，因此可以使用动态规划求解。
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
    //Maximize Number of Nice Divisors
}