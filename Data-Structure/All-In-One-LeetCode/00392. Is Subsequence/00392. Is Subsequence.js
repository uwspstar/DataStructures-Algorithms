//392. Is Subsequence
/*
A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false

*/
{
    //力扣上的这道题很简单，利用双指针 i, j 分别指向 s, t，一边前进一边匹配子序列。
    var isSubsequence = function (s, t) {
        if (s.length > t.length) return false;

        let i = 0, j = 0;

        while (i < s.length && j < t.length) {
            if (s[i] === t[j]) {
                i++;
            }
            j++;
        }
        return i === s.length;
    };
}