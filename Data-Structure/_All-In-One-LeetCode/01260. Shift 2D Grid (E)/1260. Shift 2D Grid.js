// 1260. Shift 2D Grid
/*
Given a 2D grid of size m x n and an integer k. You need to shift the grid k times.

In one shift operation:

Element at grid[i][j] moves to grid[i][j + 1].
Element at grid[i][n - 1] moves to grid[i + 1][0].
Element at grid[m - 1][n - 1] moves to grid[0][0].
Return the 2D grid after applying shift operation k times.

Example 1:
Input: grid = [[1,2,3],[4,5,6],[7,8,9]], k = 1
Output: [[9,1,2],[3,4,5],[6,7,8]]
Example 2:

Input: grid = [[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], k = 4
Output: [[12,0,21,13],[3,8,1,9],[19,7,2,5],[4,6,11,10]]

Example 3:
Input: grid = [[1,2,3],[4,5,6],[7,8,9]], k = 9
Output: [[1,2,3],[4,5,6],[7,8,9]]
*/
{
    // Return the 2D grid after applying shift operation k times.
    /*
    number_of_increments = (j + k) / num_cols
    new_row = (i + number_of_increments) % num_rows
    */
    var shiftGrid = function (grid, k) {
        const M = grid.length;
        const N = grid[0].length;
        k = k % (M * N);

        const arr = [];

        for (let i = 0; i < M; i++) {
            for (let j = 0; j < N; j++) {
                arr.push(grid[i][j]);
            }
        }

        console.log('arr=', arr);

        for (i = 0; i < k; i++) {
            arr.unshift(arr.pop())
        }

        for (let i = 0; i < M; i++) {
            for (let j = 0; j < N; j++) {
                grid[i][j] = arr.shift();
            }
        }

        return grid;
    };

    // Design Hit Counter (M)
    // Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit (M)
    // Count Pairs in Two Arrays (N)
}