/*
5. Longest Palindromic Substring

Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
O(n^2)
Example 1: Input: "babad" Output: "bab"
Note: "aba" is also a valid answer. 
Example 2: Input: "cbbd" Output: "bb"
https://www.youtube.com/watch?v=y2BD4MJqV20
https://www.youtube.com/watch?v=g3R-pjUNa3k
*/

const longestPalindromeBruteForce = function (str) {
    if (str.length < 2) return str;
    const isPalindrome = str => {
        if (str.length < 2) return true;
        let left = 0;
        let right = str.length - 1;
        while (left < right) {
            if (str[left] !== str[right]) return false;
            left++;
            right--;
        }
        return true;
    }

    let result = "";
    let max = 0;
    let len = str.length;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j <= len; j++) {
            let test = str.slice(i, j);
            if (isPalindrome(test) && test.length > max) {
                result = str.slice(i, j);
                max = Math.max(max, result.length);
            }
        }
    }
    return result;
};


var longestPalindrome = function (s) {
    if (s.length < 2) return s;

    let maxString = '';
    let stringArray = s.split('');
    let length = stringArray.length;

    stringArray.forEach((item, index) => {
        if (item === stringArray[index - 1]) return;

        let left = index - 1;
        let right = index + 1;
        while (right < length && stringArray[right] === item) {
            right++;
        }
        while (left > -1 && right < length) {
            if (stringArray[left] === stringArray[right]) {
                left--;
                right++;
            } else {
                break;
            }
        }
        const tempStr = s.slice(left + 1, right);

        if (tempStr.length > maxString.length) {
            maxString = tempStr;
        }
    })

    return maxString;
};

console.log(longestPalindrome("c")) //c
console.log(longestPalindrome("bb")) //bb
console.log(longestPalindrome("cbbd")) //bb
console.log(longestPalindrome("racecar")) //racecar
console.log(longestPalindrome("babad")) //bab
console.log(longestPalindrome("babab")) //babab
console.log(longestPalindrome("ababbad")) //abba

