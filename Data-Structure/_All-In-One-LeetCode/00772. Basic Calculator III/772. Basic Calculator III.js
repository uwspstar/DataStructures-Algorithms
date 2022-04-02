//772. Basic Calculator III
/*Implement a basic calculator to evaluate a simple expression string.

The expression string contains only non-negative integers, '+', '-', '*', '/' operators, and open '(' and closing parentheses ')'. The integer division should truncate toward zero.

You may assume that the given expression is always valid. All intermediate results will be in the range of [-231, 231 - 1].

Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

Input: s = "2*(5+5*2)/3+(6/2+8)"
Output: 21
*/
const isDigit = c => { return c >= '0' && c <= '9' };
var calculate = function (str) {
    let i = 0;
    const help = s => {
        //s = s.trim();
        let stack = [];
        let N = s.length;
        let num = 0;
        let sign = '+'
        while (i < N) {
            let c = s[i];
            i++;
            //if (c === ' ') continue;
            if (isDigit(c)) {
                num = num * 10 + (c - '0');
            }
            if (c === '(') num = help(s);
            if (i >= s.length || c === '+' || c === '-' || c === '*' || c === '/' || c === ')') {
                if (sign === '+') {
                    stack.push(num);
                } else if (sign === '-') {
                    stack.push(-num);
                } else if (sign === '*') {
                    stack.push(stack.pop() * num);
                } else if (sign === '/') {
                    stack.push(parseInt(stack.pop() / num));
                }
                sign = c;
                num = 0;
            }
            if (c === ')') break;
        }
        let ans = 0;
        while (stack.length) {
            ans += stack.pop();
        }
        return ans;

    }
    return help(str);
};