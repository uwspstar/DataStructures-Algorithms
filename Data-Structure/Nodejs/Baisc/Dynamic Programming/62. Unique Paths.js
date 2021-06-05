//62. Unique Paths
/*
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?

Input: m = 3, n = 7 Output: 28

Input: m = 3, n = 2 Output: 3
Explanation:
From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Down -> Down
2. Down -> Down -> Right
3. Down -> Right -> Down

Input: m = 7, n = 3 Output: 28
Input: m = 3, n = 3 Output: 6

*/
{
    //m x n
    //深搜的算法就是遍历了整个满二叉树, will overtime
    var uniquePaths = function (m, n) {
        let dp = Array.from(Array(m), () => new Array(n).fill(1));
        //console.log(dp);
        for (let row = 1; row < m; row++) {
            for (let col = 1; col < n; col++) {
                dp[row][col] = dp[row - 1][col] + dp[row][col - 1];
            }
        }
        return dp[m - 1][n - 1];
    };
    //Unique Paths II
    //Minimum Path Sum
    //Dungeon Game
}