// 20. Valid Parentheses
/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
*/
var isValid = function (str) {

    let stack = []
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
            stack.push(str[i])
        } else if (str[i] === ')') {
            if (stack[stack.length - 1] !== '(') return false
            else stack.pop('(')
        } else if (str[i] === '}') {
            if (stack[stack.length - 1] !== '{') return false
            else stack.pop('{')
        } else if (str[i] === ']') {
            if (stack[stack.length - 1] !== '[') return false
            else stack.pop('[')
        }
    }
    return stack.length === 0
};