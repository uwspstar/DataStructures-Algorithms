// By using recursion:

// Time complexity: O(2^n)
// Space complexity: O(n)

function canJump(arr, i = 0){
  if(i == arr.length-1) return true;
  for(let j = 1; j <= arr[i]; j++) {
    if(canJump(arr, i+j)) return true;
  }
  return false;
}


