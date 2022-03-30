// 1249. Minimum Remove to Make Valid Parentheses
/*
Given a string s of '(' , ')' and lowercase English characters.

Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

Formally, a parentheses string is valid if and only if:

It is the empty string, contains only lowercase characters, or
It can be written as AB (A concatenated with B), where A and B are valid strings, or
It can be written as (A), where A is a valid string.
 

Example 1:

Input: s = "lee(t(c)o)de)"
Output: "lee(t(c)o)de"
Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.
*/
{
    var minRemoveToMakeValid = function (s) {
        if (s.length === 0) return s;

        let res = [];
        let stack = []; // save the idx

        for (let i = 0; i < s.length; i++) {
            res[i] = s[i];

            if (stack.length === 0 && s[i] === ')') {
                //stack has all matched, so ')' need to be removed     
                res[i] = '';
                continue;
            }
            //stack.length > 0 means has '('
            if (s[i] === ')' && stack.length > 0) {
                stack.pop(); // pop '('
            } else if (s[i] === '(') {
                stack.push(i);
            }

        }

        // still have '('
        while (stack.length) {
            let i = stack.pop();
            res[i] = '';
        }

        return res.join('');
    };
}
{
    /**
 * @param {string} s
 * @return {string}
 */
    // s = "lee(t(c)o)de)" -> "lee(t(c)o)de"
    // lowercase English characters.

    var minRemoveToMakeValid = function (s) {
        let stk = [];
        let res = [];
        for (let i = 0; i < s.length; i++) {
            res.push(s[i]);

            if (s[i] === '(') {
                stk.push(i);
            } else if (s[i] === ')') {
                let last = stk[stk.length - 1] // stk save idx 
                if (s[last] === '(') {
                    stk.pop();
                } else {
                    stk.push(i);
                }
            }
        }
        //stk has unmatched
        for (let x of stk) {
            res[x] = '';
        }
        return res.join('');
    };
    // Minimum Number of Swaps to Make the String Balanced (M)
    // Check if a Parentheses String Can Be Valid (M) 
}