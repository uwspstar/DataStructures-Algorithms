/*
基本思路
如果你看过前文 动态规划框架详解，就知道这道题是非常基本的动态规划问题。

对 dp 数组的定义和状态转移方程如下：

public int uniquePaths(int m, int n) {
    return dp(m - 1, n - 1);
}

// 定义：从 (0, 0) 到 (x, y) 有 dp(x, y) 条路径
int dp(int x, int y) {
    if (x == 0 && y == 0) {
        return 1;
    }
    if (x < 0 || y < 0) {
        return 0;
    }
    // 状态转移方程：
    // 到达 (x, y) 的路径数等于到达 (x - 1, y) 和 (x, y - 1) 路径数之和
    return dp(x - 1, y) + dp(x, y - 1);
}

添加备忘录或者改写为自底向上的迭代解法即可降低上述暴力解法的时间复杂度。

标签：二维动态规划，动态规划，二维矩阵

解法代码
*/
class Solution {
    // 备忘录
    int[][] memo;

    public int uniquePaths(int m, int n) {
        memo = new int[m][n];
        return dp(m - 1, n - 1);
    }

    // 定义：从 (0, 0) 到 (x, y) 有 dp(x, y) 条路径
    int dp(int x, int y) {
        // base case
        if (x == 0 && y == 0) {
            return 1;
        }
        if (x < 0 || y < 0) {
            return 0;
        }
        // 避免冗余计算
        if (memo[x][y] > 0) {
            return memo[x][y];
        }
        // 状态转移方程：
        // 到达 (x, y) 的路径数等于到达 (x - 1, y) 和 (x, y - 1) 路径数之和
        memo[x][y] = dp(x - 1, y) + dp(x, y - 1);
        return memo[x][y];
    }
}