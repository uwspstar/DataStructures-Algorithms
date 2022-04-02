// 1143. Longest Common Subsequence
/*
Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

For example, "ace" is a subsequence of "abcde".
A common subsequence of two strings is a subsequence that is common to both strings.

 

Example 1:

Input: text1 = "abcde", text2 = "ace" 
Output: 3  
Explanation: The longest common subsequence is "ace" and its length is 3.
Example 2:

Input: text1 = "abc", text2 = "abc"
Output: 3
Explanation: The longest common subsequence is "abc" and its length is 3.
Example 3:

Input: text1 = "abc", text2 = "def"
Output: 0
Explanation: There is no such common subsequence, so the result is 0.
*/

{
    // https://leetcode.com/problems/longest-common-subsequence/discuss/932961/DP-JS-Solution

    // dp[row][col] represents the length of the longest possible subsequence

    var longestCommonSubsequence = function (text1, text2) {
        if (text1 == "" || text2 == "") return 0;

        // using substrings text1.substring(0,row) and text2.substring(0,col).
        let dp = new Array(text2.length + 1).fill(0).map(() => new Array(text1.length + 1));

        for (let row = 0; row < dp.length; row++) {
            for (let col = 0; col < dp[0].length; col++) {
                if (row == 0 || col == 0) {
                    dp[row][col] = 0; // can't have a common subsequence with ""
                } else if (text1[col - 1] === text2[row - 1]) {
                    dp[row][col] = dp[row - 1][col - 1] + 1;
                } else {
                    dp[row][col] = Math.max(dp[row][col - 1], dp[row - 1][col]);
                }
            }
        }
        return dp[text2.length][text1.length];
        // Time Complexity: O(m*n), m = length of text1, n = length of text2
        // Space Complexity: O(m*n)
    };
    // Delete Operation for Two Strings (M)
    // Shortest Common Supersequence (H)
    // Maximize Number of Subsequences in a String (M)
}