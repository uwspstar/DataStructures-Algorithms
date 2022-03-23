// 62. Unique Paths
/*
There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.

Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.

The test cases are generated so that the answer will be less than or equal to 2 * 109.

Example 1:

Input: m = 3, n = 7
Output: 28
Example 2:

Input: m = 3, n = 2
Output: 3
Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Down -> Down
2. Down -> Down -> Right
3. Down -> Right -> Down
*/
{
    // m x n
    // 深搜的算法就是遍历了整个满二叉树, will overtime
    // dp[row][col] =  dp[row - 1][col]  + dp[row][col - 1]
    var uniquePaths = function (m, n) {
        let dp = [...Array(m)].map(x => Array(n).fill(1));
        // dp row 0 is 1
        // dp col 0 is 1
        for (let row = 1; row < m; row++) {
            for (let col = 1; col < n; col++) {
                dp[row][col] = dp[row - 1][col] + dp[row][col - 1];
            }
        }
        return dp[m - 1][n - 1];
    };
    // Dungeon Game (M)
    // Minimum Cost Homecoming of a Robot in a Grid (M)
}