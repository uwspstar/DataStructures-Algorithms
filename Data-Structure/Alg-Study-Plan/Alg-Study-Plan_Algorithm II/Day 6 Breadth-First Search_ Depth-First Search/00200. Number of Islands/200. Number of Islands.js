// 200. Number of Islands
/*
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 

Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1

*/

{
    const dfs = (grid, m, n, i, j) => {
        if (i >= m || j >= n) return;
        if (i < 0 || j < 0) return;
        if (grid[i][j] !== '1') return;

        grid[i][j] = '2';

        dfs(grid, m, n, i - 1, j);
        dfs(grid, m, n, i + 1, j);
        dfs(grid, m, n, i, j - 1);
        dfs(grid, m, n, i, j + 1);
    }

    const numIslands = grid => {
        let m = grid.length;
        let n = grid[0].length;
        let res = 0;
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] === '1') {
                    res++;
                    dfs(grid, m, n, i, j);
                }
            }
        }
        return res;
    }


    //Count Sub Islands
    //Find All Groups of Farmland
    //Surrounded Regions
    //Number of Islands II
    //Number of Connected Components in an Undirected Graph
    //Number of Distinct Islands
    //Max Area of Island
}