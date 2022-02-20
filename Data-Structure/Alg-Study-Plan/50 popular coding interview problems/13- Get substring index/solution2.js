// By using the Knuth-Morris-Pratt algorithm:

// Time complexity: O(n)
// Space complexity: O(m)

function getLpsArr(str) {
  let lpsArr = [...Array(str.length)].map(x => 0);
  let length = 0;
  let i = 1;
  while (i < str.length) {
    if (str[i] == str[length])
      lpsArr[i++] = ++length;
    else if (length > 0)
      length = lpsArr[length - 1];
    else
      lpsArr[i++] = 0;
  }
  return lpsArr;
}

function substrIndex(str1, str2) {
  let n = str1.length;
  let m = str2.length;
  if (m > n)
    return -1;
  if (m == n)
    return str2 == str1 ? 0 : -1;
  if (str2 == "")
    return 0;
  let lpsArr = getLpsArr(str2);
  let j = 0;
  let i = 0;
  while (i < n && j < m) {
    if (str1[i] == str2[j]) {
      i++;
      j++;
    } else if (j > 0) {
      j = lpsArr[j - 1];
    } else {
      i++;
    }
  }
  return j < m ? -1 : i - j;
}


