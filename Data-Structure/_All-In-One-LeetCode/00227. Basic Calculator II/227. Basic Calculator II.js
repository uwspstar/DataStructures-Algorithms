//227. 基本计算器 II
/*
给你一个字符串表达式 s ，请你实现一个基本计算器来计算并返回它的值。整数除法仅保留整数部分。
示例 1：
输入：s = "3+2*2"
输出：7

示例 2：
输入：s = " 3/2 "
输出：1

示例 3：
输入：s = " 3+5 / 2 "
输出：5
*/
{
    var calculate = function (s) {
        s = s.trim();
        const stack = [];
        let sign = '+';
        let num = 0;
        const N = s.length;
        for (let i = 0; i < N; ++i) {
            if (!isNaN(Number(s[i])) && s[i] !== ' ') {
                num = num * 10 + (s[i] - '0');
            }
            if (isNaN(Number(s[i])) || i === N - 1) {
                if (sign === '+') {
                    stack.push(num);
                } else if (sign === '-') {
                    stack.push(-num);
                } else if (sign === '*') {
                    stack.push(stack.pop() * num);
                } else if (sign === '/') {
                    stack.push(stack.pop() / num | 0);
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
{
    var calculate = function (s) {
        s = s.trim();
        let stack = [];
        let sign = '+';
        let num = 0;
        const N = s.length;
        for (let i = 0; i < N; ++i) {
            if (!isNaN(Number(s[i])) && s[i] !== ' ') {
                num = num * 10 + (s[i] - '0');
            }
            if (isNaN(Number(s[i])) || i === N - 1) {
                if (sign === '+') {
                    stack.push(num);
                } else if (sign === '-') {
                    stack.push(-num);
                } else if (sign === '*') {
                    stack.push(stack.pop() * num);
                } else if (sign === '*') {
                    stack.push(stack.pop() / num | 0);
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