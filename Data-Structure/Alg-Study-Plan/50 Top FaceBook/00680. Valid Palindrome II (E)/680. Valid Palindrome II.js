// 680. Valid Palindrome II
/*
Given a string s, return true if the s can be palindrome after deleting at most one character from it.

Example 1:
Input: s = "aba"
Output: true
*/

const isPalindrome = (s, left, right) => {
    while (left < right) {
        if (s[left] !== s[right]) return false;

        left++;
        right--;
    }
    return true;
}
var validPalindrome = function(s) {
    if (s === null || s.length === 0) return true;
    if (s.length < 2) return true;
    let left = 0, right = s.length - 1;
    while (left < right) {
        if (s[left] === s[right]) {
            left++;
            right--;
        } else {
            return isPalindrome(s, left + 1, right) 
            || isPalindrome(s, left, right - 1)
        }
    }
}