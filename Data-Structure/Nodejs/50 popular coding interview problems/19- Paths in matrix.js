/*
Solve the problem [JavaScript]
Given a matrix of size n*m that contains only 0s and 1s, where 0 means that the cell is empty and 1 means that there is a wall in that cell, create a function that returns the number of paths that we can take to go from the top left cell to the right bottom cell, knowing that you can move to the right or to the bottom only.

Example 1:
Input: matrix = [[0, 0, 0, 0, 1], [1, 0, 1, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0]]
Output: 4

Explanation:
*/
{
    // By using recursion:

    // Time complexity: O(2^(n*m))
    // Space complexity: O(n + m)

    function paths(matrix, i = 0, j = 0) {
        let n = matrix.length;
        let m = matrix[0].length;
        if (i > n - 1 || j > m - 1 || matrix[i][j] == 1)
            return 0;
        else if (i === n - 1 && j === m - 1)
            return 1;
        else
            return paths(matrix, i + 1, j) + paths(matrix, i, j + 1);
    }
}
{
    // By using dynamic programming:

    // Time complexity: O(n*m)
    // Space complexity: O(n*m)

    function paths(matrix) {
        let n = matrix.length;
        let m = matrix[0].length;
        let dp = [...Array(n)].map(row => [...Array(m)].map(x => 0));

        dp[0][0] = matrix[0][0] == 1 ? 0 : 1;

        for (let i = 1; i < m; i++) {
            if (matrix[0][i] === 1) dp[0][i] = 0;
            else dp[0][i] = dp[0][i - 1];
        }

        for (let i = 1; i < n; i++) {
            if (matrix[i][0] === 1) dp[i][0] = 0;
            else dp[i][0] = dp[i - 1][0];
        }

        for (let i = 1; i < n; i++) {
            for (let j = 1; j < m; j++) {
                if (matrix[i][j] === 1) dp[i][j] = 0;
                else dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }
        return dp[n - 1][m - 1];
    }
}