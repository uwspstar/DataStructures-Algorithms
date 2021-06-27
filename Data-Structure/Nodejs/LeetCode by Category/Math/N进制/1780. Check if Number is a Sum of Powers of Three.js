//1780. Check if Number is a Sum of Powers of Three
/*
Given an integer n, return true if it is possible to represent n as the sum of distinct powers of three. Otherwise, return false.

An integer y is a power of three if there exists an integer x such that y == 3^x.

 

Example 1:
Input: n = 12 Output: true
Explanation: 12 = 3^1 + 3^2

Example 2:
Input: n = 91 Output: true
Explanation: 91 = 3^0 + 3^2 + 3^4

Example 3: Input: n = 21
Output: false


由3的幂构成，这并不要求我们转成三进制；直接除3就行了，如果这个数满足条件肯定是除3只能余1或0的
*/
{
    var checkPowersOfThree = function (n) {
        if (parseInt(n % 3) == 2) {
            return false;
        }
        if (n == 1) {
            return true
        }
        return checkPowersOfThree(parseInt(n / 3))
    }
    //326. Power of Three
}


{
    var checkPowersOfThree = function (n) {
        //最多可以余1，然后看能不能整除3
        while (n) {
            if (n % 3 === 1 || n % 3 === 0) { //3^0 = 1
                n = parseInt(n / 3);
            } else {
                return false;
            }
        }
        return true;
    };
}
