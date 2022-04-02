//64. Minimum Path Sum

/*
Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.
*/
{
    var minPathSum = function (grid) {
        let M = grid.length;
        let N = grid[0].length;
        let memo = new Array();
        for (let i = 0; i < M; i++) {
            let tmp = [];
            for (let j = 0; j < N; j++) {
                tmp.push(-1);
            }
            memo.push(tmp);
        }
        console.log('memo=', memo);

        const help = (grid, i, j) => {
            if (memo[i][j] !== -1) return memo[i][j];
            if (i === M - 1 && j === N - 1) return grid[i][j];
            else if (j === N - 1) {
                return memo[i][j] = grid[i][j] + help(grid, i + 1, j)
            } else if (i === M - 1) {
                return memo[i][j] = grid[i][j] + help(grid, i, j + 1)
            } else {
                return memo[i][j] = grid[i][j] + Math.min(help(grid, i + 1, j), help(grid, i, j + 1))
            }
        }

        return help(grid, 0, 0);
    };
}