// Space-optimized dynamic programming solution:

// Time complexity: O(nm)
// Space complexity: O(m)


function lcs(str1, str2){
  let n = str1.length;
  let m = str2.length;
  let dp = [...Array(m+1)].map(x => 0)
  let tempDp = [...Array(m+1)].map(x => 0)
  for(let i = 1; i < n+1; i++){
    for(let j = 1; j < m+1; j++){
      if(str1[i-1] == str2[j-1])
        tempDp[j] = 1 + dp[j-1];
      else
        tempDp[j] = Math.max(tempDp[j-1], dp[j]);
    }
    for(let j = 1; j < m+1; j++){
      dp[j] = tempDp[j];
      tempDp[j] = 0;
    }
  }
  return dp[m];
}


