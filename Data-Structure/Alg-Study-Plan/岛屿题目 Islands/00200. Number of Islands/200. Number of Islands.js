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
Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
*/
var numIslands = function (grid) {
    let m = grid.length;
    let n = grid[0].length;
    let res = 0;
    // one way go to end
    const dfs = (grid, i, j) => {
        //base case;  >= important !!!
        if (i < 0 || j < 0 || i >= m || j >= n) return;
        if (grid[i][j] === '0') return;
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

{
    // DFS: return the number of islands
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    const dfs = (grid, M, N, i, j, visited) => {
        if (i < 0 || j < 0 || i >= M || j >= N) return;
        if (grid[i][j] === '0') return;
        if (visited[i][j]) return;

        visited[i][j] = true;

        // 递归遍历上下左右的节点
        for (let d of dirs) {
            let nextRow = i + d[0];
            let nextCol = j + d[1];
            dfs(grid, M, N, nextRow, nextCol, visited);
        }

        /*
        dfs (grid, M, N, i + 1, j, visited);
        dfs (grid, M, N, i - 1, j, visited);
        dfs (grid, M, N, i, j + 1, visited);
        dfs (grid, M, N, i, j - 1, visited);
        */
    }
    var numIslands = function (grid) {
        let res = 0;
        let M = grid.length;
        let N = grid[0].length;
        let visited = [...Array(M)].map(x => Array(N).fill(false));

        for (let i = 0; i < M; i++) {
            for (let j = 0; j < N; j++) {
                if (!visited[i][j] && grid[i][j] === '1') {
                    res++;
                    dfs(grid, M, N, i, j, visited);
                }
            }
        }
        return res;
    };
}
{
    // BFS: return the number of islands
    const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    const isValid = (grid, M, N, x, y, visited) => {
        if (x < 0 || y < 0 || x >= M || y >= N) return false;
        if (grid[x][y] === '0') return false;
        if (visited[x][y]) return false;

        return true;
    }
    const bfs = (grid, M, N, i, j, visited, que) => {

        que.push([i, j]);
        visited[i][j] = true;

        while (que.length > 0) {
            let sz = que.length;
            for (let i = 0; i < sz; i++) {
                let [row, col] = que.shift();
                for (let d of dirs) {
                    let x = row + d[0];
                    let y = col + d[1];
                    if (isValid(grid, M, N, x, y, visited)) {
                        que.push([x, y])
                        visited[x][y] = true;
                    }
                }
            }
        }
    }

    var numIslands = function (grid) {
        let res = 0
        let M = grid.length;
        let N = grid[0].length;
        let visited = [...Array(M)].map(x => Array(N).fill(false));
        let queue = [];

        for (let i = 0; i < M; i++) {
            for (let j = 0; j < N; j++) {
                if (!visited[i][j] && grid[i][j] === '1') {
                    res++;
                    // push the "1" into queue
                    bfs(grid, M, N, i, j, visited, queue);
                }
            }
        }
        return res;
    };


    // Number of Connected Components in an Undirected Graph
    // Count Sub Islands
    // Find All Groups of Farmland
}