/*
Given an integer, reverse the digits.Do not convert the integer into a string and reverse it.

anything reverse : think about stack first

console.log(reverseInteger(135)) // 531
console.log(reverseInteger(-321))// -123

We can treat the input number like a stack, pop each least significant digit out, and then push it into another integer.
*/

const reverseInteger = (num) => {
    let negative = 1;
    if (num < 0) {
        num = (-1) * num;
        negative = -1;
    }
    // 1234 % 10 = 4
    // 123 % 10 = 3
    let result = 0;
    while (num > 0) {
        result = result * 10 + num % 10
        num = parseInt(num / 10)
    }

    return negative * result
}

console.log(reverseInteger(135)) // 531
console.log(reverseInteger(-321))// -123
