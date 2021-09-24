// 1328. Break a Palindrome
/*
Given a palindromic string of lowercase English letters palindrome, replace exactly one character with any lowercase English letter so that the resulting string is not a palindrome and that it is the lexicographically smallest one possible.

Return the resulting string. If there is no way to replace a character to make it not a palindrome, return an empty string.

A string a is lexicographically smaller than a string b (of the same length) if in the first position where a and b differ, a has a character strictly smaller than the corresponding character in b. For example, "abcc" is lexicographically smaller than "abcd" because the first position they differ is at the fourth character, and 'c' is smaller than 'd'.
 
Input: palindrome = "abccba" Output: "aaccba"
Explanation: There are many ways to make "abccba" not a palindrome, such as "zbccba", "aaccba", and "abacba".
Of all the ways, "aaccba" is the lexicographically smallest.

Input: palindrome = "a" Output: ""
Explanation: There is no way to replace a single character to make "a" not a palindrome, so return an empty string.

Input: palindrome = "aa" Output: "ab"
 
Input: palindrome = "aba" Output: "abb"
*/
{
    var breakPalindrome = function (str) {

        if (str.length < 2) return '';

        let arr = str.split('');
        let len = arr.length;
        let count = 0;
        for (let i = 0; i < parseInt(len / 2); i++) {
            if (arr[i] !== 'a') {
                arr[i] = 'a';
                return arr.join('');
            }
        }

        arr[len - 1] = 'b';

        return arr.join('');

    };
}