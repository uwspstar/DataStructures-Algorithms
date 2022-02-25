// By using recursion:

// Time complexity: O(2^n)
// Space complexity: O(n)

function subsetsThatSumUpToK(arr, k, i = 0, sum = 0) {
  if (sum == k)
    return 1;
  else if (sum > k || i >= arr.length)
    return 0;
  else
    return subsetsThatSumUpToK(arr, k, i + 1, sum + arr[i]) + subsetsThatSumUpToK(arr, k, i + 1, sum);
}


