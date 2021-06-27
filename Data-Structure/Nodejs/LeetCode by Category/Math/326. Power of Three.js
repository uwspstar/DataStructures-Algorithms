/*
326. Power of Three

Given an integer n, return true if it is a power of three. Otherwise, return false.

An integer n is a power of three, if there exists an integer x such that n == 3^x.

Example 1:
Input: n = 27 Output: true

Example 2:
Input: n = 0 Output: false

Example 3:
Input: n = 9 Output: true

Example 4:
Input: n = 45 Output: false
*/
//45/3->15/3->5/3->1
{
    var isPowerOfThree = function (n) {
        if (n < 1) return false;
        while (n % 3 === 0) {
            n = parseInt(n / 3);
        }
        return n === 1;
    };
    //Power of Two
    //Power of Four


}