// By using divide and conquer (recursively):

// Time complexity: O(logn)
// Space complexity: O(1)

function findPeak(arr, left = 0, right = arr.length - 1) {
  if (left >= right) return left;

  let mid = Math.floor((left + right) / 2);
  
  if (arr[mid] < arr[mid + 1])
    return findPeak(arr, mid + 1, right);
  else
    return findPeak(arr, left, mid);
}


