// By using dynamic programming:

// Time complexity: O(n*m)
// Space complexity: O(n*m)

function paths(matrix) {
  let n = matrix.length;
  let m = matrix[0].length;
  let dp = [...Array(n)].map(row => [...Array(m)].map(x => 0));
  dp[0][0] = matrix[0][0] == 1 ? 0 : 1;
  for (let i = 1; i < m; i++) {
    if (matrix[0][i] == 1) dp[0][i] = 0;
    else dp[0][i] = dp[0][i - 1];
  }
  for (let i = 1; i < n; i++) {
    if (matrix[i][0] == 1) dp[i][0] = 0;
    else dp[i][0] = dp[i - 1][0];
  }
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (matrix[i][j] == 1) dp[i][j] = 0;
      else dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[n - 1][m - 1];
}


