//343. Integer Break
//343. 整数拆分

/*
Given an integer n, break it into the sum of k positive integers, where k >= 2, and maximize the product of those integers.

Return the maximum product you can get.

Input: n = 2 Output: 1
Explanation: 2 = 1 + 1, 1 × 1 = 1.

Input: n = 10 Output: 36
Explanation: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36.
1------------- n = a + (n - a)
2--------(n - a) = a + (n'- a)
3--------(n'- a) = a + (n''- a)
--------------------------------

每个正整数对应的最大乘积取决于比它小的正整数对应的最大乘积

dp[i] 为正整数i拆分结果的最大乘积
递归公式：dp[i] = max(dp[i], max((i - j) * j, dp[i - j] * j));

对于的正整数 n，当 n≥2 时，可以拆分成至少两个正整数的和。令 k 是拆分出的第一个正整数，则剩下的部分是 n−k，n−k 可以不继续拆分，或者继续拆分成至少两个正整数的和。由于每个正整数对应的最大乘积取决于比它小的正整数对应的最大乘积，因此可以使用动态规划求解。

示例 2: 输入: 10 输出: 36 解释: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36。 说明: 你可以假设 n 不小于 2 且不大于 58。
*/
{
    // n , 1 ~ n, 
    var integerBreak = function (n) {
        // dp[i] 为正整数i拆分结果的最大乘积

        let dp = Array(n + 1).fill(0); // why n + 1 ?

        dp[2] = 1;//n >=2 可以拆分, n = 2, 可以拆分 1 + 1, dp[2] = 1 * 1 = 1

        for (let i = 3; i <= n; ++i) {
            // i same as 整数n,  j means 第一个正整数, (i-j) means 第两个正整数
            for (let j = 1; j < i - 1; ++j) {
                // j * (i-j) 代表把 i 拆分为 j 和 i-j 两个数相乘
                // j * dp[i-j] 代表把 i 拆分成 j 和继续把 (i-j) 这个数拆分，取(i-j) 拆分结果中的最大乘积与j相乘
                dp[i] = Math.max(dp[i], Math.max(j * (i - j), j * dp[i - j]));
                // why not dp[i] = Math.max(dp[i], j * dp[i - j]);
                //j * (i - j) 是单纯的把整数拆分为两个数相乘，而j * dp[i - j]是拆分成两个以及两个以上的个数相乘。
            }
        }
        return dp[n];
    };
    //Maximize Number of Nice Divisors
}
{
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
}
/*
找规律？

n     乘积     组合
2       1       1 1
3       2       2
4       4       4

5       6       2 3
6       9       3 3
7       12      4 3

8       18      2 3 3
9       27      3 3 3
10      36      4 3 3

11      54      2 3 3 3
12      81      3 3 3 3
13      108     4 3 3 3

14      162     2 3 3 3 3
15      243     3 3 3 3 3
16      324     4 3 3 3 3

17      486     2 3 3 3 3 3
18      729     3 3 3 3 3 3
19      972     4 3 3 3 3 3

20      1458    2 3 3 3 3 3 3
21      2187    3 3 3 3 3 3 3
22      2916    4 3 3 3 3 3 3

23      4374    2 3 3 3 3 3 3 3
24      6561    3 3 3 3 3 3 3 3
25      8748    4 3 3 3 3 3 3 3

26      13122   2 3 3 3 3 3 3 3 3
27      19683   3 3 3 3 3 3 3 3 3
28      26244   4 3 3 3 3 3 3 3 3

29      39366   2 3 3 3 3 3 3 3 3 3
30      59049   3 3 3 3 3 3 3 3 3 3
……
class Solution {
    public int integerBreak(int n) {
        if(n == 2) return 1;
        if(n == 3) return 2;

        long result = 1;

        while(n > 4){
            n -= 3;
            result *= 3;
        }
        return (int)(n * result);
    }
}

作者：rain-ru
链接：https://leetcode-cn.com/problems/integer-break/solution/su-kan-shuang-100zhao-gui-lu-by-rain-ru-slw4/
来源：力扣（LeetCode）
*/
