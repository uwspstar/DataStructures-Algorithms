// By keeping track of the max index that we can reach:

// Time complexity: O(n)
// Space complexity: O(1)

function canJump(arr){
  let n = arr.length;
  let maxIndex = 0;
  for(let i = 0; i < n; i++){
    if(i > maxIndex) return false;
    else maxIndex = Math.max(maxIndex, i+arr[i]);
  }
  return maxIndex >= n-1;
}


