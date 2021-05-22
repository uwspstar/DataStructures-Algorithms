// /69. Sqrt(x)
/*
Given a non-negative integer x, compute and return the square root of x.

Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

Example 1: Input: x = 4 Output: 2
Example 2: Input: x = 8 Output: 2
Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.
*/
class Solution {
    public int mySqrt(int x) {
        int left = 0;
        int right = x;
        long num;
        int ans = -1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            num = (long) mid * mid; // need to convert to long
            if (num == x) {
                return mid;
            } else if (num < x) {
                ans = mid;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return ans;
    }
}
/*
 * Search in Rotated Sorted Array II Perfect Squares Handshakes That Don't Cross
 */
//O(1)
class Solution {
    public int mySqrt(int x) {
        if (x < 2)
            return x;

        int left = (int) Math.pow(Math.E, 0.5 * Math.log(x));
        int right = left + 1;
        return (long) right * right > x ? left : right;
    }
}
