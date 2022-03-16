// 680. Valid Palindrome II (M)
/*
Given a string s, return true if the s can be palindrome after deleting at most one character from it.

Example 1:
Input: s = "aba"
Output: true

Example 2:
Input: s = "abca"
Output: true
Explanation: You could delete the character 'c'.
*/
{
    const isPalindrome = (s, i, j) => {
        let left = i;
        let right = j;
        while (left < right) {
            if (s[left] !== s[right]) return false;
            left++;
            right--;
        }
        return true;
    }
    var validPalindrome = function (s) {
        if (s.length < 3) return true;
        let left = 0;
        let right = s.length - 1;
        while (left < right) {
            if (s[left] === s[right]) {
                left++;
                right--;
            } else {
                return isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1);
            }
        }
        return true;
    }
}