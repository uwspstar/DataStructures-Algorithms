// 1254. Number of Closed Islands
/*
Given a 2D grid consists of 0s (land) and 1s (water).  An island is a maximal 4-directionally connected group of 0s and a closed island is an island totally (all left, top, right, bottom) surrounded by 1s.

Return the number of closed islands.

 

Example 1:



Input: grid = [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]
Output: 2
Explanation: 
Islands in gray are closed because they are completely surrounded by water (group of 1s).
Example 2:



Input: grid = [[0,0,1,0,0],[0,1,0,1,0],[0,1,1,1,0]]
Output: 1
Example 3:

Input: grid = [[1,1,1,1,1,1,1],
               [1,0,0,0,0,0,1],
               [1,0,1,1,1,0,1],
               [1,0,1,0,1,0,1],
               [1,0,1,1,1,0,1],
               [1,0,0,0,0,0,1],
               [1,1,1,1,1,1,1]]
Output: 2
*/



//力扣第 1254 题「统计封闭岛屿的数目」和上一题有两点不同：
// 1、用 0 表示陆地，用 1 表示海水。
// 2、让你计算「封闭岛屿」的数目。所谓「封闭岛屿」就是上下左右全部被 1 包围的 0，也就是说靠边的陆地不算作「封闭岛屿」。


//如何判断「封闭岛屿」呢？其实很简单，把 200. 岛屿数量 中那些靠边的岛屿排除掉，剩下的不就是「封闭岛屿」了吗？
//有了这个思路，就可以直接写出代码了，注意这题规定 0 表示陆地，用 1 表示海水。
// 从 (i, j) 开始，将与之相邻的陆地都变成海水

const dfs = (grid, i, j) => {
    let M = grid.length;
    let N = grid[0].length;
    if (i < 0 || j < 0 || i >= M || j >= N) return;
    if (grid[i][j] === 1) return;
    grid[i][j] = 1;// 将 (i, j) 变成海水
    dfs(grid, i + 1, j);
    dfs(grid, i, j + 1);
    dfs(grid, i - 1, j);
    dfs(grid, i, j - 1);

}
var closedIsland = function (grid) {
    let res = 0;
    let M = grid.length;
    let N = grid[0].length;

    for (let j = 0; j < N; j++) {
        // does not need to count res;
        dfs(grid, 0, j); // 把靠上边的岛屿淹掉
        dfs(grid, M - 1, j); // 把靠下边的岛屿淹掉
    }

    for (let i = 0; i < M; i++) {
        // does not need to count res;
        dfs(grid, i, 0); // 把靠左边的岛屿淹掉
        dfs(grid, i, N - 1); // 把靠右边的岛屿淹掉
    }
    // 遍历 grid，剩下的岛屿都是封闭岛屿
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (grid[i][j] === 0) {
                dfs(grid, i, j)
                res++; //count res;
            }
        }
    }

    return res;
};