// By sorting the array:

// Time complexity: O(nlogn)
// Space complexity: depends on the sorting algorithm we use

function findPair(arr, k) {
  arr = arr.sort((a, b) => a - b);
  let left = 0, right = arr.length - 1;
  while (left < right) {
    if (arr[left] + arr[right] == k) return true;
    else if (arr[left] + arr[right] < k) left++;
    else right--;
  }
  return false;
}


