// By using recursion:

// Time complexity: O(2^(n+m))
// Space complexity: O(n + m)

function minimumCostPath(matrix, i = 0, j = 0) {
  let n = matrix.length;
  let m = matrix[0].length;
  if (i == n - 1 && j == m - 1) {
    return matrix[i][j];
  } else if (i == n - 1) {
    return matrix[i][j] + minimumCostPath(matrix, i, j + 1);
  } else if (j == m - 1) {
    return matrix[i][j] + minimumCostPath(matrix, i + 1, j);
  } else {
    return matrix[i][j] + Math.min(minimumCostPath(matrix, i + 1, j), minimumCostPath(matrix, i, j + 1));
  }
}


