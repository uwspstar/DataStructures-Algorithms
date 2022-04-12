// 394. Decode String
/*
Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc.

Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

Example 1: Input: s = "3[a]2[bc]" Output: "aaabcbc"
Example 2: Input: s = "3[a2[c]]" Output: "accaccacc"
Example 3: Input: s = "2[abc]3[cd]ef" Output: "abcabccdcdcdef"
*/
{
    // https://leetcode.com/problems/decode-string/discuss/1232974/Stack-Two-JS-Solutions
    var decodeString = function (s) {
        let k = "", curStr = "";
        let prevStack = [], kStack = [];
        for (let i = 0; i < s.length; i++) {
            if (s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57) {
                k += s[i];
            } else if (s[i] === "[") {
                kStack.push(k);
                prevStack.push(curStr);
                k = "";
                curStr = "";
            } else if (s[i] === "]") {
                let prev = prevStack.pop();
                let curK = kStack.pop();
                curStr = prev + curStr.repeat(curK);
            } else {
                curStr += s[i];
            }
        }
        return curStr;
    };
    // Encode String with Shortest Length (H)
    // Number of Atoms (H)
    // Brace Expansion (M)

}