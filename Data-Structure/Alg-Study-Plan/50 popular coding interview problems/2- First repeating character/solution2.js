// By using a dictionary:

// Time complexity: O(n)
// Space complexity: O(n)


function firstRepeatingCharacter(str) {
  let visited = {};
  for (ch of str) {
    if (visited[ch]) return ch;
    else visited[ch] = true;
  }
  return '\0';
}


