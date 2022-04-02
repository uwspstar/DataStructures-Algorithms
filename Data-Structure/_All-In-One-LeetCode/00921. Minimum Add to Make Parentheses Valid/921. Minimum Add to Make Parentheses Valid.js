//921. Minimum Add to Make Parentheses Valid
/*
A parentheses string is valid if and only if:

It is the empty string,
It can be written as AB (A concatenated with B), where A and B are valid strings, or
It can be written as (A), where A is a valid string.
You are given a parentheses string s. In one move, you can insert a parenthesis at any position of the string.

For example, if s = "()))", you can insert an opening parenthesis to be "(()))" or a closing parenthesis to be "())))".
Return the minimum number of moves required to make s valid.

Example 1:

Input: s = "())"
Output: 1
Example 2:

Input: s = "((("
Output: 3
*/
var minAddToMakeValid = function (str) {
    //Formally, a parentheses string is valid if and only if:
    if (str.length === 0) return true;

    let stack = [];

    for (let c of str) {
        if (c === '(') {
            stack.push(c);
        } else if (c === ')') {
            let last = stack[stack.length - 1];
            if (last === '(') { 
                stack.pop(); // remove the last
            } else {
                stack.push(c);
            }
        }
    }
    return stack.length;
};