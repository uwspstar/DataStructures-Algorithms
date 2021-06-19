//32. Longest Valid Parentheses
/*
Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

Input: s = "(()" Output: 2
Explanation: The longest valid parentheses substring is "()".

Input: s = ")()())" Output: 4
Explanation: The longest valid parentheses substring is "()()".
 
Input: s = "" Output: 0
*/
//https://www.youtube.com/watch?v=677VaZhd4dg

{
    // instead of push "()", push index
    var longestValidParenthesesSubString = function(s) {
        if (s.length < 2) return 0;
    
        let stack = [-1];
        let ans = 0;
        
        for (let i = 0; i < s.length; i++) {
            if (s[i] === '(') {
                stack.push(i);
            } else if (stack.length === 1) {
                stack[0] = i;
            } else {
                stack.pop();
                ans = Math.max(ans, i - stack[stack.length-1]);
            }
        }
        return ans;
    };
    //Word Subsets
    //Number of Paths with Max Score
    //Maximum Number of Events That Can Be Attended II
}
// different with 32.
{
    var longestValidParenthesesSubSequence = function (s) {
        if (s.length < 2) return 0;
        let res = 0;
        let stack = [];
        let max = 0;
        for (let i = 0; i < s.length; i++) {
            if (s[i] === '(') {
                stack.push(s[i]);
            } else {
                let last = stack[stack.length - 1];
                if (last === '(') {              
                    res = res + 2;
                    stack.pop(); 
                } else {
                    res = 0;
                } 
            }
            max = Math.max(max, res);
        }
        return max;
    }
    
    console.log(longestValidParentheses("()(()")); //2
    //console.log(longestValidParentheses(")()())")); //4
    //console.log(longestValidParentheses("")); //0
    //console.log(longestValidParentheses("(()")); //2
}