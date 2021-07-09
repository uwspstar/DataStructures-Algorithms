// /151. Reverse Words in a String
/*
Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

Input: s = "the sky is blue" Output: "blue is sky the"
 
Input: s = "  hello world  " Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.
 
Input: s = "  Bob    Loves  Alice   "
Output: "Alice Loves Bob"
 
*/
{
    //brute force
    var reverseWords = function (s) {
        let s1 = s.split(' ');
        let arr = [];
        for (let str of s1) {
            if (str.trim().length > 0) {
                arr.push(str.trim());
            }
        }
        let res = '';
        for (let i = arr.length - 1; i >= 0; i--) {

            if (i !== 0) {
                res += arr[i] + ' ';
            } else {
                res += arr[i];
            }
        }
        return res;
    };
    //Most Common Word
    //Remove Palindromic Subsequences
    //Sort Features by Popularity
}
{
    var reverseWords = function (s) {
        return s.trim().split(/\s+/).reverse().join(' ');
    };
}