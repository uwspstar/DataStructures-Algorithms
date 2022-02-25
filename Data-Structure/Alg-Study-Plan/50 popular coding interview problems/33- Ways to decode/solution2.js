// By using dynamic programming:

// Time complexity: O(n)
// Space complexity: O(1)

function waysToDecode(str) {
  let n = str.length;
  if (n == 0 || str[0] == "0") return 0;
  let beforePrevious = 1;
  let previous = 1;
  for (let i = 1; i < n; i++) {
    let current = 0;
    if (str[i] != "0")
      current += previous;
    if ((str[i - 1] + str[i]) >= "10" && (str[i - 1] + str[i]) <= "26")
      current += beforePrevious;
    beforePrevious = previous;
    previous = current;
  }
  return previous;
}


