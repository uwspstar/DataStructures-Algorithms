//680. Valid Palindrome II
/*
Given a string s, return true if the s can be palindrome after deleting at most one character from it.

Input: s = "aba"
Output: true
Example 2:

Input: s = "abca"
Output: true
Explanation: You could delete the character 'c'.
Example 3:

Input: s = "abc"
Output: false
*/
{
    //T:O(N) / S:O(1)
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
{
    //T:O(N) / S:O(1) : faster then previous
    const isPalindrome = s => {
        let left = 0;
        let right = s.length - 1;
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
            if (s[left] !== s[right]) {
                return isPalindrome(s.substring(left + 1, right + 1)) || isPalindrome(s.substring(left, right))
            } else {
                left++;
                right--;
            }

        }
        return true;
    };
}