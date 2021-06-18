//415. Add Strings
/*
Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

Input: num1 = "11", num2 = "123" Output: "134"
Input: num1 = "456", num2 = "77" Output: "533"
Input: num1 = "0", num2 = "0" Output: "0"
*/
{
    var addStrings = function (num1, num2) {
        let res = '';
        let carry = 0;

        let m = num1.length;
        let n = num2.length;
        let i = m - 1;
        let j = n - 1;
        for (; i >= 0 || j >= 0; i--, j--) {
            let sum = carry;
            sum += i >=0 ? +num[i] : 0;
            sum += j >=0 ? +num[j] : 0;
            carry = parseInt(sum / 10);
            res = (sum % 10) + res; // string
        }
        return carry > 0 ? carry + res :  res;
    }
}