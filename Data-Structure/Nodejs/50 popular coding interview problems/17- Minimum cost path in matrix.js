//https://www.udemy.com/course/50-problems/learn/quiz/4986294#overview
/*
Solve the problem [JavaScript]
Given a matrix of integers matrix of size n*m, where each element matrix[i][j] represents the cost of passing from that cell, create a function that returns the cost of the minimum cost path to go from the top left cell to the right bottom cell, knowing that you can only move to the right or to the bottom.

Example 1:
Input: matrix = [[3, 12, 4, 7, 10], [6, 8, 15, 11, 4], [19, 5, 14, 32, 21], [1, 20, 2, 9, 7]]
Output: 54

Explanation:
*/
{
    // By using dynamic programming:

    // Time complexity: O(n*m)
    // Space complexity: O(n*m)

    function minimumCostPath(matrix) {
        let n = matrix.length;
        let m = matrix[0].length;
        let costs = [...Array(n)].map(row => [...Array(m)].map(x => 0));
        costs[0][0] = matrix[0][0];
        for (let i = 1; i < m; i++)
            costs[0][i] = costs[0][i - 1] + matrix[0][i];
        for (let i = 1; i < n; i++)
            costs[i][0] = costs[i - 1][0] + matrix[i][0];
        for (let i = 1; i < n; i++)
            for (let j = 1; j < m; j++)
                costs[i][j] = Math.min(costs[i - 1][j], costs[i][j - 1]) + matrix[i][j];
        return costs[n - 1][m - 1];
    }
}
{
    // By using recursion:

    // Time complexity: O(2^(n+m))
    // Space complexity: O(n + m)

    function minimumCostPath(matrix, i = 0, j = 0) {
        let n = matrix.length;
        let m = matrix[0].length;

        if (i === n - 1 && j === m - 1)
            return matrix[i][j];
        else if (i === n - 1)
            return matrix[i][j] + minimumCostPath(matrix, i, j + 1);
        else if (j === m - 1)
            return matrix[i][j] + minimumCostPath(matrix, i + 1, j);
        else
            return matrix[i][j] + Math.min(minimumCostPath(matrix, i + 1, j), minimumCostPath(matrix, i, j + 1));
    }
}