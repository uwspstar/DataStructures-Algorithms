// 201. Bitwise AND of Numbers Range
/*
给你两个整数 left 和 right ，表示区间 [left, right] ，返回此区间内所有数字 按位与 的结果（包含 left 、right 端点）。

Given two integers left and right that represent the range [left, right], return the bitwise AND of all numbers in this range, inclusive.

Example 1:

Input: left = 5, right = 7
Output: 4
Example 2:

Input: left = 0, right = 0
Output: 0
Example 3:

Input: left = 1, right = 2147483647
Output: 0
*/
{
    var rangeBitwiseAnd = function (m, n) {
        while (m < n) {
            n = n & (n - 1);
        }
        return m & n;
    }
    // Split Array With Same Average (H)
    // Maximum Product of the Length of Two Palindromic Subsequences (M)
    // Groups of Strings (H)
}