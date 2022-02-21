// By using recursion:

// Time complexity: O(2^(n*m))
// Space complexity: O(n + m)

function paths(matrix, i = 0, j = 0) {
  let n = matrix.length;
  let m = matrix[0].length;
  if (i > n - 1 || j > m - 1 || matrix[i][j] == 1)
    return 0;
  else if (i == n - 1 && j == m - 1)
    return 1;
  else
    return paths(matrix, i + 1, j) + paths(matrix, i, j + 1);
}


