// Time complexity: O(n.2^n)
// Space complexity: O(n.2^n)

/*
Input: str = "abcd"

Output: ["abcd", "abc", "abd", "ab", "acd", "ac", "ad", "a", "bcd", "bc", "bd", "b", "cd", "c", "d", ""]

*/
function getSubsequences(str) {
  let res = [];
  function rec(str, i, subsequence) {
    console.log('subsequence=',subsequence,'i=',i, 'str=', str);
    if (i === str.length) {
      //console.log('subsequence=',subsequence,'i=',i, 'str=', str);
      res.push(subsequence);
    } else {
      rec(str, i + 1, subsequence + str[i]);
      rec(str, i + 1, subsequence);
    }
  }
  rec(str, 0, "");
  return res;
}

console.log(getSubsequences('abcd'));
