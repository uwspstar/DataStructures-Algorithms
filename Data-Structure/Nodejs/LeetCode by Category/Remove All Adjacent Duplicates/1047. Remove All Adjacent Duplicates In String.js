//1047. Remove All Adjacent Duplicates In String
/*
You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them.

We repeatedly make duplicate removals on s until we no longer can.

Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique.

Example 1: Input: s = "abbaca" Output: "ca"
Explanation: 
For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".

Example 2: Input: s = "azxxzy" Output: "ay"
*/
{
    var removeDuplicates = function (s) {
        if (s.length < 2) return s;
        let result = [];
        for (let i = 0; i < s.length; i++) {
            let last = result[result.length - 1];
            if (s[i] !== last) {
                result.push(s[i]);
            } else {
                result.pop();
            }
        }
        return result.join('');
        //O(N) / O(M) m is total duplicate
    };
    //Remove All Adjacent Duplicates in String II
}
{
    var removeDuplicates = function (s) {
        if (s.length < 2) return s;
        let stack = [];
        for (let c of s) {
            if (stack.length === 0) {
                stack.push(c);
            } else {
                if (c === stack[stack.length - 1]) {
                    stack.pop();
                } else {
                    stack.push(c);
                }
            }
        }
        return stack.join('');
    };
    //Remove All Adjacent Duplicates in String II
}