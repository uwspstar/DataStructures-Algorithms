// Time complexity: O(n)
// Space complexity: O(n)

function isValid(str) {
  let bracketsMap = { '(': ')', '{': '}', '[': ']' };
  let openingBrackets = ['(', '{', '['];
  let stack = [];
  for (bracket of str) {
    if (openingBrackets.includes(bracket))
      stack.push(bracket);
    else if (stack.length > 0 && bracket == bracketsMap[stack[stack.length - 1]])
      stack.pop();
    else
      return false;
  }
  return stack.length == 0;
}


