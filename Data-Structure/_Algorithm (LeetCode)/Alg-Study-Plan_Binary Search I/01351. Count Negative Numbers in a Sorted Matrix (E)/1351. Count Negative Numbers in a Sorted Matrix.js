// 1351. Count Negative Numbers in a Sorted Matrix
/*
Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.

Example 1:
Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3] Output: 8
Explanation: There are 8 negatives number in the matrix.
*/
{
    var countNegatives = function (grid) {
        let result = 0;
        let row = 0;
        let column = grid[0].length - 1;

        while (row < grid.length && column >= 0) {
            if (grid[row][column] < 0) {
                result += grid.length - row;
                column -= 1;
            } else {
                row += 1;
            }
        }

        return result;
    };
}
{
    // Time Complexity: O(m*n)
    // Space Complexity: O(m*n)
    var countNegatives = function (grid) {
        let arr = [], res = 0;
        for (let row of grid) arr = arr.concat(row);
        for (let num of arr) if (num < 0) res++;
        return res;
    };
    // Time Complexity: O(m*n)
    // Space Complexity: O(n)
    var countNegatives = function (grid) {
        return grid.reduce((acc, row) => acc + row.filter(num => num < 0).length, 0);
    }
    // Maximal Square (M)
    // Check if Array Is Sorted and Rotated (E)
    // Earliest Possible Day of Full Bloom (H)
}