// 1091. Shortest Path in Binary Matrix
/*
Given an n x n binary matrix grid, return the length of the shortest clear path in the matrix. If there is no clear path, return -1.

A clear path in a binary matrix is a path from the top-left cell (i.e., (0, 0)) to the bottom-right cell (i.e., (n - 1, n - 1)) such that:

All the visited cells of the path are 0.
All the adjacent cells of the path are 8-directionally connected (i.e., they are different and they share an edge or a corner).
The length of a clear path is the number of visited cells of this path
*/

// BFS
{
    var shortestPathBinaryMatrix = function (grid) {
        let n = grid.length - 1;
        let q = [0];

        if (grid[0][0] || grid[n][n]) return -1;
        
        grid[0][0] = 1
        while (q.length) {
            let curr = q.shift(), i = curr & (1 << 7) - 1, j = curr >> 7
            if (i === n && j === n) return grid[n][n]
            for (let a = Math.max(i - 1, 0); a <= Math.min(i + 1, n); a++)
                for (let b = Math.max(j - 1, 0); b <= Math.min(j + 1, n); b++)
                    if (grid[a][b] === 0)
                        grid[a][b] = grid[i][j] + 1, q.push(a + (b << 7))
        }
        return -1
    };
    // Available Captures for Rook
    // Brace Expansion
    // Maximum Points You Can Obtain from Cards
}