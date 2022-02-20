// By using divide and conquer (iteratively):

// Time complexity: O(logn)
// Space complexity: O(1)

function findPeak(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] < arr[mid + 1]) {
      left = mid + 1;
    }
    else right = mid; // could be peak
  }
  return left;
}


