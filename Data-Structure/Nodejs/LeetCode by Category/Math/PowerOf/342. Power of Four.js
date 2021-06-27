//342. Power of Four
/*
Given an integer n, return true if it is a power of four. Otherwise, return false.

An integer n is a power of four, if there exists an integer x such that n == 4x.

Example 1: Input: n = 16 Output: true
Example 2: Input: n = 5 Output: false
Example 3: Input: n = 1 Output: true
*/
{
    var isPowerOfFour = function (n) {
        if (n < 1) return false;
        while (n % 4 === 0) {
            n = parseInt(n / 4);
        }
        return n === 1;
    };
    //Integer Replacement
    //Moving Stones Until Consecutive II
    //Can Make Palindrome from Substring
}
{
    var isPowerOfFour = function (n) {
        if (n < 1) return false;
        if (n % 4 !== 0) return n === 1;
        return isPowerOfFour(parseInt(n / 4));
    };
    //Integer Replacement
    //Moving Stones Until Consecutive II
    //Can Make Palindrome from Substring
}