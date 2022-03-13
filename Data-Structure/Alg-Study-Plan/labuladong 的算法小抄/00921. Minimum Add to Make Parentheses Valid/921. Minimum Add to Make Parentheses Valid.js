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