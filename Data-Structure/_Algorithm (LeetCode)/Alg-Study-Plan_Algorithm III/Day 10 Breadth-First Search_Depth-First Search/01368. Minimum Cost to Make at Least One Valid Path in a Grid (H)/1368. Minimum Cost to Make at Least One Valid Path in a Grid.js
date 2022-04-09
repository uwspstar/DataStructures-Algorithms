// 1368. Minimum Cost to Make at Least One Valid Path in a Grid
/*
Given an m x n grid. Each cell of the grid has a sign pointing to the next cell you should visit if you are currently in this cell. The sign of grid[i][j] can be:

1 which means go to the cell to the right. (i.e go from grid[i][j] to grid[i][j + 1])
2 which means go to the cell to the left. (i.e go from grid[i][j] to grid[i][j - 1])
3 which means go to the lower cell. (i.e go from grid[i][j] to grid[i + 1][j])
4 which means go to the upper cell. (i.e go from grid[i][j] to grid[i - 1][j])
Notice that there could be some signs on the cells of the grid that point outside the grid.

You will initially start at the upper left cell (0, 0). A valid path in the grid is a path that starts from the upper left cell (0, 0) and ends at the bottom-right cell (m - 1, n - 1) following the signs on the grid. The valid path does not have to be the shortest.

You can modify the sign on a cell with cost = 1. You can modify the sign on a cell one time only.

Return the minimum cost to make the grid have at least one valid path.

Example 1:
Input: grid = [[1,1,1,1],[2,2,2,2],[1,1,1,1],[2,2,2,2]] Output: 3
Explanation: You will start at point (0, 0).
The path to (3, 3) is as follows. (0, 0) --> (0, 1) --> (0, 2) --> (0, 3) change the arrow to down with cost = 1 --> (1, 3) --> (1, 2) --> (1, 1) --> (1, 0) change the arrow to down with cost = 1 --> (2, 0) --> (2, 1) --> (2, 2) --> (2, 3) change the arrow to down with cost = 1 --> (3, 3)
The total cost = 3.
*/
// https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/discuss/525324/P5.js-Interactive-Visualization-of-BFS-!!
{
    let minCost = (A) => { // [sentinel, 👉, 👈, 👇, 👆]
        const dirs = [[], [0, 1], [0, -1], [1, 0], [-1, 0]];
        
        let M = A.length, N = A[0].length;
        let best = [...Array(M)].map(row => Array(N).fill(Infinity));

        let q = [[0, 0, 0]];
        let seen = new Set([`0,0,0`]);

        while (q.length > 0) {
            let [i, j, k] = q[0]; q.shift();
            if (best[i][j] <= k) continue;

            best[i][j] = k;
            for (let d = 1; d < dirs.length; ++d) {
                let u = i + dirs[d][0],
                    v = j + dirs[d][1],
                    w = k + (d == A[i][j] ? 0 : 1);
                if (u < 0 || u >= M || v < 0 || v >= N || seen.has(`${u},${v},${w}`))
                    continue;
                q.push([u, v, w]);
                seen.add(`${u},${v},${w}`);
            }
        }
        return best[M - 1][N - 1];
    };

    // Minimum Weighted Subgraph With the Required Paths (H)
}