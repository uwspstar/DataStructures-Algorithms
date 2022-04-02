//注意这题中 1 代表陆地，0 代表海水
class Solution {
    public int numEnclaves(int[][] grid) {
        int m = grid.length, n = grid[0].length;

        for (int i = 0; i < m; i++) {
            // does not need to count res;
            dfs(grid, i, 0);// 把靠左边的岛屿淹掉
            dfs(grid, i, n - 1);// 把靠右边的岛屿淹掉
        }

        for (int j = 0; j < n; j++) {
            // does not need to count res;
            dfs(grid, 0, j);// 把靠上边的岛屿淹掉
            dfs(grid, m - 1, j);// 把靠下边的岛屿淹掉
        }

        int res = 0;
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == 1) {
                    res += 1; //count res; the only island left
                }
            }
        }
        return res;
    }

    void dfs(int[][] grid, int i, int j) {
        int m = grid.length, n = grid[0].length;
        if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] == 0) {
            return;
        }

        grid[i][j] = 0;

        dfs(grid, i + 1, j);
        dfs(grid, i, j + 1);
        dfs(grid, i - 1, j);
        dfs(grid, i, j - 1);
    }
}