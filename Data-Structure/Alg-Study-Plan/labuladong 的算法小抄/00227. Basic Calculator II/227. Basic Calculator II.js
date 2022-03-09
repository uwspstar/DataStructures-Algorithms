// 227. Basic Calculator II
/*
Given a string s which represents an expression, evaluate this expression and return its value. 

The integer division should truncate toward zero.

You may assume that the given expression is always valid. All intermediate results will be in the range of [-231, 231 - 1].

Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

 

Example 1:

Input: s = "3+2*2"
Output: 7
Example 2:

Input: s = " 3/2 "
Output: 1
Example 3:

Input: s = " 3+5 / 2 "
Output: 5
*/
{
    const isDigit = c => { return c >= '0' && c <= '9' }
    var calculate = function (s) {
        s = s.trim();
        const stack = [];
        let sign = '+';
        let num = 0;
        const N = s.length;
        for (let i = 0; i < N; ++i) {
            if (s[i] === ' ') continue;
            if (isDigit(s[i])) {
                num = num * 10 + (s[i] - '0');
            }
            if (!isDigit(s[i]) || i === N - 1) {
                if (sign === '+') {
                    stack.push(num);
                } else if (sign === '-') {
                    stack.push(-num);
                } else if (sign === '*') {
                    stack.push(stack.pop() * num);
                } else if (sign === '/') {
                    stack.push(parseInt(stack.pop() / num));
                }
                sign = s[i];
                num = 0;
            }
        }
        let ans = 0;
        while (stack.length) {
            ans += stack.pop();
        }
        return ans;
    };
}