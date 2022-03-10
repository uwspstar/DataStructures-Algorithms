// 231. Power of Two
/*
Given an integer n, return true if it is a power of two. Otherwise, return false.

An integer n is a power of two, if there exists an integer x such that n == 2x.

 

Example 1:

Input: n = 1
Output: true
Explanation: 20 = 1
Example 2:

Input: n = 16
Output: true
Explanation: 24 = 16
Example 3:

Input: n = 3
Output: false
*/
{
    /*
    Number of 1 Bits Easy
    Power of Three Easy
    Power of Four Easy
    */
    var isPowerOfTwo = function (n) {
        if (n < 1) return false;
        while (n % 2 === 0) {
            n = parseInt(n / 2);
        }
        return n === 1;
    };

}
{
    /*
    How to get / isolate the rightmost 1-bit : x & (-x).
    
    How to turn off (= set to 0) the rightmost 1-bit : x & (x - 1).
    */
    var isPowerOfTwo = function (n) {
        if (n <= 0) return false;
        return (n & (n - 1)) == 0;
    }
}