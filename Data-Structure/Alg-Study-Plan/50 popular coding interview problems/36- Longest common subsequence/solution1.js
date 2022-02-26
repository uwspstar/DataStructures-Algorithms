// Brute force solution:

// Time complexity: O((n+m).2^n)
// Space complexity: O(n.2^n)

function isSubsequence(str1, str2) {
  let ptr1 = ptr2 = 0;
  while (ptr1 < str1.length && ptr2 < str2.length) {
    if (str1.charAt(ptr1) == str2.charAt(ptr2)) {
      ptr1++;
      ptr2++;
    } else {
      ptr1++;
    }
  }
  return ptr2 == str2.length;
}

function getSubsequences(str) {
  let subsequences = [];
  function rec(str, i, subsequence) {
    if (i == str.length) {
      subsequences.push(subsequence);
    } else {
      rec(str, i + 1, subsequence + str[i]);
      rec(str, i + 1, subsequence);
    }
  }
  rec(str, 0, "");
  return subsequences;
}

function lcs(str1, str2) {
  let maxLength = 0;
  let subsequences = getSubsequences(str1);
  for (subsequence of subsequences) {
    if (isSubsequence(str2, subsequence) && subsequence.length > maxLength)
      maxLength = subsequence.length;
  }
  return maxLength;
}


