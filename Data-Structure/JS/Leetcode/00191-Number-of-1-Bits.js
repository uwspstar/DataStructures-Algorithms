/*
191. Number of 1 Bits
 
Write a function that takes an unsigned integer and return the number of '1' bits it has (also known as the Hamming weight).

Input: 00000000000000000000000000001011  Output: 3
 
Input: 00000000000000000000000010000000 Output: 1

Input: 11111111111111111111111111111101 Output: 31
*/
// {number} n - a positive integer

console.log(parseInt('00000000000000000000000000001011', 2)) //
console.log(parseInt('00000000000000000000000010000000', 2)) //
console.log(parseInt('11111111111111111111111111111101', 2)) //

// Naive 
var hammingWeight = function (n) {
    // integer to binary .toString(2)
    let num = (n).toString(2);
    console.log('num', num);
    let totalOne = 0;
    for (let i = 0; i < num.length; i++) {
        if (num[i] > 0) totalOne++;
    }
    return totalOne;
};

// replace function
var hammingWeight2 = function (n) {
    return n.toString(2).replace(/[0]/g, '').length
};

var hammingWeight3 = function (n) {
    let result = 0
    while (n) {
        console.log('n', n);
        n &= (n - 1) // n = n & (n - 1)
        result++
        console.log('n', n, 'result',result);
    }
    return result
};
console.log('hammingWeight3', hammingWeight3(6)) //1

console.log('hammingWeight', hammingWeight(11)) //1
console.log('hammingWeight', hammingWeight(128)) //1
console.log('hammingWeight', hammingWeight(4294967293)) //32