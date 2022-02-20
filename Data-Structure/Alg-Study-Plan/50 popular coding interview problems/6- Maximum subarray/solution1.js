// Brute force solution:

// Time complexity: O(n^3)
// Space complexity: O(1)

function maximumSubarray(arr) {
  let maxSum = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let actualSum = 0;
      for (let k = i; k <= j; k++)
        actualSum += arr[k];
      maxSum = Math.max(maxSum, actualSum);
    }
  }
  return maxSum;
}


