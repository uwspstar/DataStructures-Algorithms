// By using recursion:

// Time complexity: O(φ^n) (φ = golden ratio = 1.618033...)
// Space complexity: O(n)

function waysToDecode(str, i = 0) {
  let n = str.length;
  if (n == 0 || (i < n && str[i] == "0"))
    return 0;
  else if (i >= n - 1)
    return 1;
  else if ((str[i] + str[i + 1]) >= "10" && (str[i] + str[i + 1]) <= "26")
    return waysToDecode(str, i + 1) + waysToDecode(str, i + 2);
  else
    return waysToDecode(str, i + 1);
}


