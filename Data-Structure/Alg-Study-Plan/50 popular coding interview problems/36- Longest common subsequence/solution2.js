// Recursive solution:

// Time complexity: O(2^(n+m))
// Space complexity: O(n + m)

function lcs(str1, str2, i = 0, j = 0){
  if(i == str1.length || j == str2.length)
    return 0;
  else if(str1[i] == str2[j])
    return 1 + lcs(str1, str2, i+1, j+1);
  else
    return Math.max(lcs(str1, str2, i+1, j), lcs(str1, str2, i, j+1));
}


