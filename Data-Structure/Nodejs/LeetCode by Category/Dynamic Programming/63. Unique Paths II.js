//63. Unique Paths II
/*
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

Now consider if some obstacles are added to the grids. How many unique paths would there be?

An obstacle and space is marked as 1 and 0 respectively in the grid.

Example 1:
Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]] Output: 2
Explanation: There is one obstacle in the middle of the 3x3 grid above.
There are two ways to reach the bottom-right corner:
1. Right -> Right -> Down -> Down
2. Down -> Down -> Right -> Right

Example 2:
Input: obstacleGrid = [[0,1],[0,0]] Output: 1
*/
//本题难点在于初始化，如果(i, 0) 这条边有了障碍之后，障碍之后（包括障碍）都是走不到的位置了，所以障碍之后的dp[i][0]应该还是初始值0。

{
    var uniquePathsWithObstacles = function (obstacleGrid) {
        if (obstacleGrid[0][0] == 1) return 0;
        let row = obstacleGrid.length;
        let col = obstacleGrid[0].length;
        let dp = Array.from(Array(row), () => new Array(col).fill(0));

        dp[0][0] = 1 - obstacleGrid[0][0];
        console.log(dp);
        for (let i = 1; i < col; i++) {
            if (obstacleGrid[0][i] == 0 && dp[0][i - 1] == 1) {
                dp[0][i] = 1;
            }
        }
        for (let i = 1; i < row; i++) {
            if (obstacleGrid[i][0] == 0 && dp[i - 1][0] == 1) {
                dp[i][0] = 1;
            }
        }
        console.log(dp);
        for (let i = 1; i < row; i++) {
            for (let j = 1; j < col; j++) {
                if (obstacleGrid[i][j] === 1) continue;
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }
        return dp[row - 1][col - 1];
    };

}