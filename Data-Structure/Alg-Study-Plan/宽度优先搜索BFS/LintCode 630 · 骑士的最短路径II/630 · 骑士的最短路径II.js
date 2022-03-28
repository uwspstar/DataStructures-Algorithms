// 630 · 骑士的最短路径II
/*
描述
在一个 n * m 的棋盘中(二维矩阵中 0 表示空 1 表示有障碍物)，骑士的初始位置是 (0, 0) ，他想要达到 (n - 1, m - 1) 这个位置，骑士只能从左边走到右边。找出骑士到目标位置所需要走的最短路径并返回其长度，如果骑士无法达到则返回 -1.

微信加 jiuzhang15 发送验证信息【视频】领真题考点、面试技巧等免费视频课


如果骑士所在位置为(x,y)，那么他的下一步可以到达以下位置:

(x + 1, y + 2)
(x - 1, y + 2)
(x + 2, y + 1)
(x - 2, y + 1)
样例
例1:
输入:[[0,0,0,0],[0,0,0,0],[0,0,0,0]]
输出:3
解释:[0,0]->[2,1]->[0,2]->[2,3]
例2:
输入:[[0,1,0],[0,0,1],[0,0,0]]
输出:-1
*/
export class Solution {
    isValid(grid, M, N, x, y, visited) {
        if (x < 0 || y < 0 || x >= M || y >= N) return false;
        if (visited[x][y]) return false;
        if (grid[x][y]) return false;
        /*
         so funny, on LintCode
         
         if (grid[x][y] !== 0) return false; working
         but 
         if (grid[x][y] === 1) return false; NOT working
         but 
         if (grid[x][y]) return false; working
        */

        return true;
    }
    shortestPath2(grid) {
        // write your code here

        let M = grid.length;
        if (M === 0) return -1;
        let N = grid[0].length;
        if (N === 0) return -1;

        const dirs = [[1, 2], [-1, 2], [2, 1], [-2, 1]];

        let visited = [...Array(M)].map(x => Array(N).fill(false));
        let que = [[0, 0]];
        visited[0][0] = true;

        let step = 0;

        while (que.length > 0) {
            step++;
            let sz = que.length;
            for (let i = 0; i < sz; i++) {
                let [row, col] = que.shift();
                for (let d of dirs) {
                    let x = row + d[0];
                    let y = col + d[1];
                    if (this.isValid(grid, M, N, x, y, visited)) {
                        if (x === M - 1 && y === N - 1) {
                            return step;
                        }
                        que.push([x, y]);
                        visited[x][y] = true;
                    }
                }
            }
        }
        return -1;
    }
}

let sln = new Solution;

console.log(sln.shortestPath2([[0, 0, 0, 0], [0, 0, 0, 0], [0, 1, 0, 0]]));// -1

//console.log(sln.shortestPath2([[0, 0, 0, 0], [0, 0, 0, 0], [0, 1, 0, 0]]));

//console.log(sln.shortestPath2([[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]));

//console.log(sln.shortestPath2([[0, 1, 0], [0, 0, 1], [0, 0, 0]]));