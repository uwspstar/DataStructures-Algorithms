// By checking all pairs (brute force solution):

// Time complexity: O(n�)
// Space complexity: O(1)

function findPair(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == k) return true;
    }
  }
  return false;
}


