
/*
You are given a string of parenthesis. Return the minimum number of parenthesis that would need to be removed in order to make the string valid. "Valid" means that each open parenthesis has a matching closed parenthesis. 

In order to arrive to a solution, the first step is to understand what it means for a string to be valid. 

A string is valid if for each closing bracket, there exists an unused opening bracket to its left, and the number of opening brackets must equal the number of closing brackets. Then, to determine the minimum number of removals we simply need to iterate through the string, while keeping a count of the number of invalid parentheses we have encountered so far, and the number of unused open parenthesis in the string so far. Anytime we encounter an open parenthesis, increment the opened count. 

Anytime we encounter a closing parenthesis, decrement the opened count if opened > 0, otherwise increment the invalid count.

Example:

"()())()"

The following input should return 1.
")("

*/
const countInvalidParenthesis = (str) => {
    if (str.length < 2) return 0;
    let validCount = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ')' &&  validCount > 0) validCount--;
        else validCount++;
    }
    return validCount;
}
console.log('countInvalidParenthesis', countInvalidParenthesis(")("));
console.log('countInvalidParenthesis', countInvalidParenthesis("())()"));
console.log('countInvalidParenthesis', countInvalidParenthesis("()())()")); // 1