//792. Number of Matching Subsequences
/*
Given a string s and an array of strings words, return the number of words[i] that is a subsequence of s.

A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

For example, "ace" is a subsequence of "abcde".
 
Example 1: Input: s = "abcde", words = ["a","bb","acd","ace"] Output: 3
Explanation: There are three strings in words that are a subsequence of s: "a", "acd", "ace".

Example 2: Input: s = "dsahjpjauf", words = ["ahjpjau","ja","ahbwzgqnuk","tnmlanowax"] Output: 2
 */
{
    var numMatchingSubseq = function (s, words) {
        let count = 0;
        words.forEach(word => {
            let currIndex = -1;
            let found = true;
            for (let i = 0; i < word.length; i++) {
                let startIdx = currIndex + 1;
                currIndex = s.indexOf(word.charAt(i), startIdx);
                if (currIndex === -1) {
                    found = false;
                    break;
                }
            }
            if (found) count++;
        })
        return count;
    }
    ////Is Subsequence
    //Shortest Way to Form String
}