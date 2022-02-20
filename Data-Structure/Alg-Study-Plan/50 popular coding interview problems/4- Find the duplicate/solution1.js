// Brute force solution:

// Time complexity: O(n�)
// Space complexity: O(1)

function findDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) return arr[i];
    }
  }
}


