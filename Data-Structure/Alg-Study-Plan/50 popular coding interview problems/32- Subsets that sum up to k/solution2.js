// By using recursion + memoization:

// Time complexity: O(nk)
// Space complexity: O(nk)


function subsetsThatSumUpToK(arr, k, i = 0, sum = 0, memoiz = {}){
  let key = i + " " + sum;
  if(memoiz[key] !== undefined)
    return memoiz[key];
  else if(sum == k)
    return 1;
  else if(sum > k || i >= arr.length)
    return 0;
  else{
    let nbSubsets = subsetsThatSumUpToK(arr, k, i+1, sum + arr[i], memoiz) + subsetsThatSumUpToK(arr, k, i+1, sum, memoiz);
    memoiz[key] = nbSubsets;
    return nbSubsets;
  }
}


