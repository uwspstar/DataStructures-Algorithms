// 677 · Number of Big Islands
/*
Description
Given a boolean 2D matrix, 0 is represented as the sea, 1 is represented as the island. If two 1 is adjacent, we consider them in the same island. We only consider up/down/left/right adjacent.

Find the number of islands that size bigger or equal than K.

Example1

Input:
[[1,1,0,0,0],[0,1,0,0,1],[0,0,0,1,1],[0,0,0,0,0],[0,0,0,0,1]]
2
Output: 2
Explanation:
the 2D grid is
[
  [1, 1, 0, 0, 0],
  [0, 1, 0, 0, 1],
  [0, 0, 0, 1, 1],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1]
]
there are two island which size is equals to 3.

Example2
Input:
[[1,0],[0,1]]
1
Output: 2
*/
// Find the number of islands that size bigger or equal than K.

// BFS 
{
    export class Solution {
        /**
         * @param grid: a 2d boolean array
         * @param k: an integer
         * @return: the number of Islands
         */

        isValid(grid, M, N, i, j, visited) {
            if (i < 0 || j < 0 || i >= M || j >= N) return false;
            if (!grid[i][j]) return false;
            if (visited[i][j]) return false;

            return true;
        }

        bfs(grid, M, N, i, j, visited, queue) {
            let dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];

            queue.push([i, j]);
            visited[i][j] = true;
            let size = 1;

            while (queue.length > 0) {
                let sz = queue.length;
                for (let i = 0; i < sz; i++) {
                    let [row, col] = queue.shift();
                    for (let d of dirs) {
                        let x = row + d[0];
                        let y = col + d[1];
                        // console.log('x=', x, 'y=', y);
                        if (this.isValid(grid, M, N, x, y, visited)) {
                            size++;
                            queue.push([x, y])
                            visited[x][y] = true;
                        }
                    }
                }
            }
            return size;
        }
        numsofIsland(grid, k) {
            let M = grid.length;
            let N = grid[0].length;
            if (M * N === 0) return 0;
            let visited = [...Array(M)].map(x => Array(N).fill(false));
            let queue = [];
            let ans = 0;
            for (let i = 0; i < M; i++) {
                for (let j = 0; j < N; j++) {
                    if (!visited[i][j] && grid[i][j]) {
                        let res = this.bfs(grid, M, N, i, j, visited, queue);
                        if (res >= k) {
                            ans++;
                        }
                    }
                }
            }
            return ans;
        }
    }
}
// https://www.youtube.com/watch?v=dpekOVSIW6A

// DFS