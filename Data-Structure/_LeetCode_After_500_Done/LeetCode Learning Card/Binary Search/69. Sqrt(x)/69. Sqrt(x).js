/*
https://leetcode.com/problems/sqrtx/

69. Sqrt(x)

Given a non-negative integer x, compute and return the square root of x.

Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.

*/
{
    const mySqrt = x => {
        let res = -1;

        let left = 0;
        let right = x;

        while (left <= right) {
            let mid = parseInt(left + (right - left) / 2);

            if (mid * mid <= x && (mid + 1) * (mid + 1) > x) {
                res = mid;
                break;
            }

            if (mid * mid < x) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return res;
    }
}