// /200. Number of Islands
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
Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
 
*/

{
    var numIslands = function (grid) {
        let res = 0;
        let m = grid.length;
        let n = grid[0].length;

        const dfs = (grid, i, j, m, n) => {
            //base case
            if (i < 0 || j < 0 || i >= m || j >= n) return;
            if (grid[i][j] === '0') return; // has beeb visit

            grid[i][j] = '0'; //visit, and set = '0'

            dfs(grid, i + 1, j, m, n);
            dfs(grid, i - 1, j, m, n);
            dfs(grid, i, j + 1, m, n);
            dfs(grid, i, j - 1, m, n);
        }
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                res++;
                dfs(grid, i, j, m, n);
            }
        }
        return res;
    }
}
{
    /**
 * @param {character[][]} grid
 * @return {number}
 */
    var numIslands = function (grid) {
        let m = grid.length;
        let n = grid[0].length;
        let res = 0;
        // one way go to end
        const dfs = (grid, i, j) => {
            //base case;  >= important !!!
            if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] === '0') return;
            // reached all turn to '0'
            grid[i][j] = '0';
            // 4 directions
            dfs(grid, i + 1, j, m, n);
            dfs(grid, i - 1, j, m, n);
            dfs(grid, i, j + 1, m, n);
            dfs(grid, i, j - 1, m, n);
        }

        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (grid[i][j] === '1') {
                    res += 1;
                    dfs(grid, i, j);
                }
            }
        }
        return res;
    };
    //Surrounded Regions
    //Number of Islands II
    //Number of Connected Components in an Undirected Graph
    //Number of Distinct Islands
    //Max Area of Island
}