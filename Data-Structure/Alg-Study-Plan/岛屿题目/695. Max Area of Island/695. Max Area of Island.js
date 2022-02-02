//695. Max Area of Island
/*
You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

The area of an island is the number of cells with a value 1 in the island.

Return the maximum area of an island in grid. If there is no island, return 0.

Example 1:

Input: grid = [
    [0,0,1,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,1,1,0,1,0,0,0,0,0,0,0,0],
    [0,1,0,0,1,1,0,0,1,0,1,0,0],
    [0,1,0,0,1,1,0,0,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,1,1,0,0,0,0]
]
Output: 6
Explanation: The answer is not 11, because the island must be connected 4-directionally.
Example 2:

Input: grid = [[0,0,0,0,0,0,0,0]]
Output: 0
*/
//这题属于岛屿系列问题，岛屿系列问题的基本思路框架是 200. 岛屿数量 这道题，没看过的先看这篇。这题的大体思路和 200. 岛屿数量 完全一样，只不过 dfs 函数淹没岛屿的同时，还应该想办法记录这个岛屿的面积。我们可以给 dfs 函数设置返回值，记录每次淹没的陆地的个数，直接看解法吧。

/**
 * @param {number[][]} grid
 * @return {number}
 */

// 淹没与 (i, j) 相邻的陆地，并返回淹没的陆地面积
const dfs = (grid, i, j) => {
    let m = grid.length;
    let n = grid[0].length;
    // 超出索引边界
    if (i < 0 || j < 0 || i >= m || j >= n) return 0;
    // 已经是海水了
    if (grid[i][j] == 0) return 0;
    // 将 (i, j) 变成海水
    grid[i][j] = 0;

    return 1 // self "1" also need to count
        + dfs(grid, i + 1, j)
        + dfs(grid, i, j + 1)
        + dfs(grid, i - 1, j)
        + dfs(grid, i, j - 1)

}
var maxAreaOfIsland = function (grid) {
    let res = 0;
    let m = grid.length;
    let n = grid[0].length;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 1) {// 淹没岛屿，并更新最大岛屿面积
                res = Math.max(res, dfs(grid, i, j));
            }
        }
    }
    return res;
};

