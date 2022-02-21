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


