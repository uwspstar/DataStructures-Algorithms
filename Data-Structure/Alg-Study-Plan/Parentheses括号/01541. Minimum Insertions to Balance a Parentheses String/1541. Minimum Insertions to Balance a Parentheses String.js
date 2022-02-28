//1541. Minimum Insertions to Balance a Parentheses String
/*
Given a parentheses string s containing only the characters '(' and ')'. A parentheses string is balanced if:

Any left parenthesis '(' must have a corresponding two consecutive right parenthesis '))'.
Left parenthesis '(' must go before the corresponding two consecutive right parenthesis '))'.
In other words, we treat '(' as an opening parenthesis and '))' as a closing parenthesis.

For example, "())", "())(())))" and "(())())))" are balanced, ")()", "()))" and "(()))" are not balanced.
You can insert the characters '(' and ')' at any position of the string to balance it if needed.

Return the minimum number of insertions needed to make s balanced.

 

Example 1:

Input: s = "(()))"
Output: 1
Explanation: The second '(' has two matching '))', but the first '(' has only ')' matching. We need to to add one more ')' at the end of the string to be "(())))" which is balanced.
Example 2:

Input: s = "())"
Output: 0
Explanation: The string is already balanced.
Example 3:

Input: s = "))())("
Output: 3
Explanation: Add '(' to match the first '))', Add '))' to match the last '('.
*/
{
    /*
Input: s = "(()))"
Output: 1
Explanation: The second '(' has two matching '))', but the first '(' has only ')' matching. We need to to add one more ')' at the end of the string to be "(())))" which is balanced.
*/

    // T:O(N), S: O(1)
    var minInsertions = function (s) {
        let res = 0, need = 0;// 插入一个右括号
        for (let i = 0; i < s.length; i++) {
            if (s[i] == '(') {
                need += 2;
                if (need % 2 == 1) {
                    res++;// 插入一个右括号 
                    need--; // 对右括号的需求减一
                }
            }

            if (s[i] == ')') {
                need--;
                if (need == -1) {
                    res++;
                    need = 1;
                }
            }
        }
        return res + need;
    };
}
{
    var minInsertions = function (s) {
        let ans = 0;
        let open = 0;
        for (let i = 0; i < s.length; i++) {

            if (s[i] === '(') open++;

            if (s[i] === ')') {
                if (i + 1 < s.length && s[i + 1] === ')') {
                    i++;
                } else {
                    ans++;
                }

                if (open === 0) {
                    ans++;
                } else {
                    open--;
                }
            }
        }

        if (open > 0) {
            ans = ans + open * 2;
        }
        return ans;
    };
}
