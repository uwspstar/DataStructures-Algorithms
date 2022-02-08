//694. Number of Distinct Islands
/*
You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

An island is considered to be the same as another if and only if one island can be translated (and not rotated or reflected) to equal the other.

Return the number of distinct islands.

Example 1:
Input: grid = [[1,1,0,0,0],[1,1,0,0,0],[0,0,0,1,1],[0,0,0,1,1]]
Output: 1

Example 2:
Input: grid = [[1,1,0,1,1],[1,0,0,0,0],[0,0,0,0,1],[1,1,0,1,1]]
Output: 3
*/
/**
 * @param {number[][]} grid
 * @return {number}
 */
const dfs = (grid, i, j, M, N, arr, dir) => {
    console.log('i=', i, 'j=', j);

    if (i < 0 || j < 0 || i >= M || j >= N) return;
    if (grid[i][j] !== 1) return;

    grid[i][j] = 0;

    arr.push(dir);

    console.log('arr=', arr, 'dir=', dir);

    dfs(grid, i - 1, j, M, N, arr, 1);
    dfs(grid, i + 1, j, M, N, arr, 2);
    dfs(grid, i, j - 1, M, N, arr, 3);
    dfs(grid, i, j + 1, M, N, arr, 4);

    arr.push(-dir);
}

var numDistinctIslands = function (grid) {
    let islands = new Set();
    let M = grid.length;
    let N = grid[0].length;
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (grid[i][j] === 1) {
                console.log('i=', i, 'j=', j);
                let arr = [];
                dfs(grid, i, j, M, N, arr, 0);
                console.log(arr);
                islands.add(arr.join('$'));
            }
        }
    }
    return islands.size;
};