// 69. Sqrt(x)
/*
Given a non-negative integer x, compute and return the square root of x.

Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.

Example 1:
Input: x = 4 Output: 2

Example 2:
Input: x = 8 Output: 2
Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned
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
    
    // Largest Divisible Subset (M)
    // Sum of Floored Pairs (H)
    // Best Position for a Service Centre (H)
}