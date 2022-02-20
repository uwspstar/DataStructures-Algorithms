// By sorting the array:

// Time complexity: O(nlogn)
// Space complexity: depends on the sorting algorithm we use

function findDuplicate(arr) {
  arr = arr.sort((a, b) => a - b);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] == arr[i - 1]) return arr[i];
  }
}


