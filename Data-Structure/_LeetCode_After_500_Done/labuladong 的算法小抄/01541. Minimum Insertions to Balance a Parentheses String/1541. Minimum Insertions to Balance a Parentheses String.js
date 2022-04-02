// 1541. Minimum Insertions to Balance a Parentheses String
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
*/
{
    var minInsertions = function (s) {
        let res = 0, need = 0;
        for (let i = 0; i < s.length; i++) {
            if (s[i] === '(') {
                need += 2;
                if (need  % 2 === 1) {
                    res ++;
                    need--;
                }
            }
            if (s[i] ===')') {
                need --;
                if (need === -1) {
                    res++;
                    need = 1;
                }
            }
        }
        return res + need;
    }
}