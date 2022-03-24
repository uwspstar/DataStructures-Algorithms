export class Solution {
    /**
     * @param grid: a 2D integer grid
     * @return: an integer
     */
    isValid(grid, M, N, x, y, visited) {
        if (x < 0 || y < 0 || x >= M || y >= N) return false;
        if (visited[x][y]) return false;
        if (grid[x][y] !== 0) return false;

        return true;
    }

    zombie(grid) {
        // write your code here
        const ZB = 1;
        const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
        // write your code here
        let M = grid.length;
        let N = grid[0].length;

        let visited = [...Array(M)].map(x => Array(N).fill(false));
        let que = [];
        for (let i = 0; i < M; i++) {
            for (let j = 0; j < N; j++) {
                if (grid[i][j] === ZB) {
                    que.push([i, j]);
                    visited[i][j] = true;
                }
            }
        }
        if (que.length === 0) return -1; // 如果不能感染所有人则返回 -1。

        let days = 0;
        while (que.length > 0) {
            let sz = que.length;
            for (let i = 0; i < sz; i++) {
                let [row, col] = que.shift();
                for (let d of dirs) {
                    let x = row + d[0];
                    let y = col + d[1];
                    if (this.isValid(grid, M, N, x, y, visited)) {
                        que.push([x, y]);
                        visited[x][y] = true;
                        grid[x][y] = 1; // mark as zoobie important
                    }
                }
            }
            days += 1;
        }

        // 如果不能感染所有人则返回 -1。
        for (let i = 0; i < M; i++) {
            for (let j = 0; j < N; j++) {
                if (grid[i][j] == 0) {
                    return -1;
                }
            }
        }

        // not count the last day
        return days - 1;
    }
}
// https://www.youtube.com/watch?v=dpekOVSIW6A