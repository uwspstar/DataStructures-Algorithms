// Brute force solution:

// Time complexity: O(nm)
// Space complexity: O(1)

function substrIndex(str1, str2) {
  let n = str1.length;
  let m = str2.length;
  for (let i = 0; i <= n - m; i++) {
    let found = true;
    for (let j = 0; j < m; j++) {
      if (str1[i + j] != str2[j]) {
        found = false;
        break;
      }
    }
    if (found) return i;
  }
  return -1;
}


