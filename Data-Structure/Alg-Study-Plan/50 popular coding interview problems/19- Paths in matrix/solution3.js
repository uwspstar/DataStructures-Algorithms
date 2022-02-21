//63. Unique Paths II
//https://leetcode.com/problems/unique-paths-ii/

/*
// 第一步：自顶向下带备忘录的递归
class Solution {
    public int uniquePathsWithObstacles(int[][] obstacleGrid) {
        int m = obstacleGrid.length;
        int n = obstacleGrid[0].length;
        memo = new int[m][n];
        return dp(obstacleGrid, m - 1, n - 1);
    }

    // 备忘录
    int[][] memo;

    // 定义：从 grid[0][0] 出发到达 grid[i][j] 的路径条数为 dp(grid, i, j)
    int dp(int[][] grid, int i, int j) {
        int m = grid.length, n = grid[0].length;
        // base case
        if (i < 0 || i >= m || j < 0 || j >= n
                || grid[i][j] == 1) {
            // 数组越界或者遇到阻碍
            return 0;
        }
        if (i == 0 && j == 0) {
            // 起点到起点的路径条数就是 1
            return 1;
        }
        if (memo[i][j] > 0) {
            // 避免冗余计算
            return memo[i][j];
        }
        // 状态转移方程：
        // 到达 grid[i][j] 的路径条数等于
        // 到达 grid[i-1][j] 的路径条数加上到达 grid[i][j-1] 的路径条数
        int left = dp(grid, i, j - 1);
        int upper = dp(grid, i - 1, j);
        int res = left + upper;
        // 存储备忘录
        memo[i][j] = res;
        return res;
    }
}

// 第二步：自底向上迭代的动态规划
class Solution2 {
    public int uniquePathsWithObstacles(int[][] obstacleGrid) {
        int m = obstacleGrid.length;
        int n = obstacleGrid[0].length;
        // 数组索引偏移一位，dp[0][..] dp[..][0] 代表 obstacleGrid 之外
        // 定义：到达 obstacleGrid[i][j] 的路径条数为 dp[i-1][j-1]
        int[][] dp = new int[m + 1][n + 1];
        // base case：如果没有障碍物，起点到起点的路径条数就是 1
        dp[1][1] = obstacleGrid[0][0] == 1 ? 0 : 1;

        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (i == 1 && j == 1) {
                    // 跳过 base case
                    continue;
                }
                if (obstacleGrid[i - 1][j - 1] == 1) {
                    // 跳过障碍物的格子
                    continue;
                }
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }
        // 返回到达 obstacleGrid[m-1][n-1] 的路径数量
        return dp[m][n];
    }
}

// 第三步：优化二维 dp 数组为一维 dp 数组
class Solution3 {
    public int uniquePathsWithObstacles(int[][] obstacleGrid) {
        int m = obstacleGrid.length;
        int n = obstacleGrid[0].length;
        // 根据二维 dp 数组优化为一维 dp 数组
        int[] dp = new int[n + 1];
        dp[1] = obstacleGrid[0][0] == 1 ? 0 : 1;

        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (i == 1 && j == 1) {
                    // 跳过 base case
                    continue;
                }
                if (obstacleGrid[i - 1][j - 1] == 1) {
                    // 跳过障碍物的格子
                    dp[j] = 0;
                    continue;
                }
                dp[j] = dp[j] + dp[j - 1];
            }
        }
        // 返回到达 obstacleGrid[m-1][n-1] 的路径数量
        return dp[n];
    }
}

*/