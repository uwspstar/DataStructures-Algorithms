// /69. Sqrt(x)
/*
Given a non-negative integer x, compute and return the square root of x.

Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

Example 1: Input: x = 4 Output: 2
Example 2: Input: x = 8 Output: 2
Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.
*/
{
    /**
 * @param {number} x
 * @return {number}
 */
    var mySqrt = function (x) {
        let left = 0;
        let right = x;
        let answer = -1;

        while (left <= right) {
            let mid = parseInt(left + ((right - left) >> 1));
            if (mid * mid === x) return mid;
            else if (mid * mid < x) {
                answer = mid; // take left side, the round
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return answer;
    };
    /*
    Search in Rotated Sorted Array II
    Perfect Squares
    Handshakes That Don't Cross
    */
}