// 1020. Number of Enclaves

/*
You are given an m x n binary matrix grid, where 0 represents a sea cell and 1 represents a land cell.

A move consists of walking from one land cell to another adjacent (4-directionally) land cell or walking off the boundary of the grid.

Return the number of land cells in grid for which we cannot walk off the boundary of the grid in any number of moves.

 

Example 1:


Input: grid = [[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]]
Output: 3
Explanation: There are three 1s that are enclosed by 0s, and one 1 that is not enclosed because its on the boundary.
Example 2:


Input: grid = [[0,1,1,0],[0,0,1,0],[0,0,1,0],[0,0,0,0]]
Output: 0
Explanation: All 1s are either on the boundary or can reach the boundary.
*/
/**
 * @param {number[][]} grid
 * @return {number}
 */

//这道题和 1254. 统计封闭岛屿的数目 基本一样，
//只是后者让你算封闭岛屿的数量，这题让你算这些封闭岛屿的陆地总数，稍微改改代码就行了。

const dfs = (grid, i, j) => {
    let m = grid.length;
    let n = grid[0].length;

    if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] == 0) return;

    grid[i][j] = 0;

    dfs(grid, i + 1, j);
    dfs(grid, i, j + 1);
    dfs(grid, i - 1, j);
    dfs(grid, i, j - 1);
}

var numEnclaves = function (grid) {
    let m = grid.length;
    let n = grid[0].length;

    for (let i = 0; i < m; i++) {
        dfs(grid, i, 0); // 把靠左边的岛屿淹掉
        dfs(grid, i, n - 1); // 把靠右边的岛屿淹掉
        // does not need to count res;
    }

    for (let j = 0; j < n; j++) {
        dfs(grid, 0, j); // 把靠上边的岛屿淹掉
        dfs(grid, m - 1, j); // 把靠下边的岛屿淹掉
        // does not need to count res;
    }

    let res = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 1) {
                res += 1; //count res;
            }
        }
    }
    return res;
};

