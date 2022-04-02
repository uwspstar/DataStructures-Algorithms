//1291. Sequential Digits
/*
An integer has sequential digits if and only if each digit in the number is one more than the previous digit.

Return a sorted list of all the integers in the range [low, high] inclusive that have sequential digits.

 

Example 1:

Input: low = 100, high = 300
Output: [123,234]
Example 2:

Input: low = 1000, high = 13000
Output: [1234,2345,3456,4567,5678,6789,12345]
*/
var sequentialDigits = function (low, high) {
    let res = [];
    //顺次数第一位(1~9);遍历以i开头的所有顺次数
    for (let i = 1; i <= 9; i++) {
        let num = i;
        //顺次数其他位;其他位都比上一位多1,使用j++
        for (let j = i + 1; j <= 9; j++) {
            //因为是尾部添加，所以之前的数字要扩大十倍
            num = num * 10 + j;
            //如果这个顺次数在范围内，加入结果集
            if (num >= low && num <= high) {
                res.push(num);
            }
        }
    }
    //调用集合工具包排序方法进行排序
    res.sort((a, b) => a - b);
    return res;
};