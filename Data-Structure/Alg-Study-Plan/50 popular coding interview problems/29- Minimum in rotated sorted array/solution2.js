// By using divide and conquer (iteratively):

// Time complexity: O(logn)
// Space complexity: O(1)

function minimum(arr){
  let left = 0;
  let right = arr.length-1;
  if(arr[right] > arr[left]) return arr[left];
  while(left < right){
    let mid = Math.floor((left + right)/2);
    if(arr[mid+1] < arr[mid]) return arr[mid+1];
    else if(arr[mid] < arr[mid-1]) return arr[mid];
    else if(arr[mid] > arr[right]) left = mid+1;
    else right = mid-1;
  }
  return arr[left];
}


