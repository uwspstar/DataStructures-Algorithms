// By using dynamic programming:

// Time complexity: O(n�)
// Space complexity: O(n)

function canJump(arr) {
  let n = arr.length;
  let dp = [...Array(n)].map(x => false);

  dp[0] = true;
  
  for (let i = 0; i < n; i++) {
    if (!dp[i]) {
      return false;
    } else if (i + arr[i] >= n - 1) {
      return true;
    } else {
      for (let j = 1; j <= arr[i]; j++)
        dp[i + j] = true;
    }
  }
  return dp[n - 1];
}


