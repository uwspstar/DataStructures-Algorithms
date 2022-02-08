//258. Add Digits
/*
Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

Example 1:
Input: num = 38
Output: 2
Explanation: The process is
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2 
Since 2 has only one digit, return it.

Example 2:
Input: num = 0
Output: 0

在数学中，数根(又称位数根或数字根Digital root)是自然数的一种性质，换句话说，每个自然数都有一个数根。

数根是将一正整数的各个位数相加（即横向相加），若加完后的值大于10的话，则继续将各位数进行横向相加直到其值小于十为止[1]，或是，将一数字重复做数字和，直到其值小于十为止，则所得的值为该数的数根。

例如54817的数根为7，因为5+4+8+1+7=25，25大于10则再加一次，2+5=7，7小于十，则7为54817的数根。

原数是 n，树根就可以表示成 (n-1) mod 9 + 1，可以结合下边的过程理解。
*/
{
    const getSum = (num) => {
        let res = 0;
        while (num) {
            let tmp = num % 10;
            res += tmp;
            num = parseInt(num / 10);
        }
        return res;

    }
    var addDigits = function (num) {
        if (isNaN(num) || num === 0) return 0;
        if (num < 10) return num;

        while (num > 9) {
            num = getSum(num, 0);
        }
        return num;
    };
}
{
    var addDigits = function (num) {
        if (isNaN(num) || num === 0) return 0;
        if (num < 10) return num;
        return num % 9 === 0 ? 9 : num % 9;
    };
}
{
    var addDigits = function (num) {
        return num === 0 ? 0 : 1 + (num - 1) % 9;
    };
}