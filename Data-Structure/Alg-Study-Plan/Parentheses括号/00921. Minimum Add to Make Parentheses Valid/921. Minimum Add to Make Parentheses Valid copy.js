// 921. Minimum Add to Make Parentheses Valid
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
{
    var minAddToMakeValid = function(str) {
        let res = 0;
        let need = 0;
        for (let s of str) {
            if (s === '(') {
                need ++;
            } else {
                need --;
                if (need < 0) {
                    need = 0;
                    res++;
                }
            } 
        }
        return res + need;
    }
}
{
    // T:O(N) , S:O(1)
    var minAddToMakeValid = function (s) {
        //Formally, a parentheses string is valid if and only if: 
        let res = 0; // res 记录插入次数 
        let need = 0;// need 变量记录右括号的需求量 
        for (let i = 0; i < s.length; i++) {
            if (s[i] === '(') {
                need++;// 对右括号的需求 + 1
            }
            if (s[i] === ')') {
                need--;// 对右括号的需求 - 1
                if (need === -1) {
                    need = 0;
                    res++;// 需插入一个左括号
                }
            }
        }
        return res + need;
    };
}
{
    const minAddToMakeValid = s => {
        if (s.length === 0) return 0;
        let stk = [];
        for (let i = 0; i < s.length; i++) {
            if (s[i] === '(') {
                stk.push(s[i]);
            } else {
                if (s[i] === ')') {
                    let last = stk[stk.length - 1];
                    if (last === '(') {
                        stk.pop()
                    } else {
                        stk.push(s[i]);
                    }
                }
            }
        }
        return stk.length;
    }
}
{
    // T:O(N) , S:O(1)
    var minAddToMakeValid = function (s) {
        //Formally, a parentheses string is valid if and only if:   
        let ans = 0, bal = 0;
        for (let i = 0; i < s.length; ++i) {
            bal += s[i] == '(' ? 1 : -1;
            // It is guaranteed bal >= -1
            if (bal == -1) {
                ans++;
                bal++;
            }
        }
        return ans + bal;
    };
}