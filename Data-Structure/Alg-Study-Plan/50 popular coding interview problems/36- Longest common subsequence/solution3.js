// Time-optimized recursive solution (memoization):

// Time complexity: O(nm)
// Space complexity: O(nm)

function lcs(str1, str2, i = 0, j = 0, memoiz = {}){
  let key = i + " " + j;
  if(memoiz.get !== undefined)
    return memoiz[key];
  else if(i == str1.length || j == str2.length)
    return 0;
  else if(str1[i] == str2[j])
    return 1 + lcs(str1, str2, i+1, j+1, memoiz);
  else{
    let output = Math.max(lcs(str1, str2, i+1, j, memoiz), lcs(str1, str2, i, j+1, memoiz));
    memoiz[key] = output;
    return output;
  }
}


