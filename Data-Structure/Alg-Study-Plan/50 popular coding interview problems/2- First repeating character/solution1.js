// Brute force solution:

// Time complexity: O(n�)
// Space complexity: O(1)

function firstRepeatingCharacter(str) {
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < i; j++) {
      if (str.charAt(i) == str.charAt(j))
        return str.charAt(i);
    }
  }
  return '\0';
}


