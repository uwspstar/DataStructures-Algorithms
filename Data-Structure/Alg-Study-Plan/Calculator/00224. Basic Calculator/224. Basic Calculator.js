//224. Basic Calculator
/*
Given a string s representing a valid expression, implement a basic calculator to evaluate it, and return the result of the evaluation.

Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

Example 1:
Input: s = "1 + 1"
Output: 2

Example 2:
Input: s = " 2-1 + 2 "
Output: 3

Example 3:
Input: s = "(1+(4+5+2)-3)+(6+8)"
Output: 23
*/
{
    var calculate = function (str) {
        let i = 0;
        const help = s => {
            let stack = [];
            let op = '+';
            let num = 0;
            while (i < s.length) {
                let c = s[i++];
                if (c >= '0' && c <= '9') {
                    num = num * 10 + (c - '0');
                }
                if (c === '(') {
                    num = help(s);
                }
                if (i >= s.length || c === '+' || c === '-' || c === ')') {
                    if (op === '+') {
                        stack.push(num)
                    } else stack.push(-num);
                    op = c;
                    num = 0;
                }
                if (c === ')') break;
            }
            let res = 0;
            for (n of stack) {
                res += n;
            }
            return res;
        }
        return help(str);
    }
}
{
    const isDigit = c => {
        return c >= '0' && c <= '9'
    }
    var calculate = function (s) {
        let stack = [];
        let res = 0;
        let sign = 1, N = s.length;
        for (let i = 0; i < N; i++) {
            let c = s[i]
            if (isDigit(c)) {
                let num = 0;
                while (i < N && isDigit(s[i])) {
                    num = num * 10 + (s[i] - '0');
                    i++;
                }
                i--;
                res += sign * num;
            } else if (c === '+') {
                sign = 1;
            } else if (c === '-') {
                sign = -1;
            } else if (c === '(') {
                stack.push(res);
                stack.push(sign);
                //reset
                res = 0;
                sign = 1;
            } else if (c === ')') {
                res *= stack.pop();
                res += stack.pop();
            }
        }
        return res;
    }
}