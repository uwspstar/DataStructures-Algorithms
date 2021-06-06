//367. Valid Perfect Square
/*
Given a positive integer num, write a function which returns True if num is a perfect square else False.

Follow up: Do not use any built-in library function such as sqrt.

Example 1: Input: num = 16 Output: true
Example 2: Input: num = 14 Output: false
*/
{
    var isPerfectSquare = function (num) {

        let left = 0;
        let right = num;
        while (left <= right) {
            let mid = parseInt(left + (right - left) / 2);
            if (mid * mid === num) return true;
            else if (mid * mid < num) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return false;
    };
}