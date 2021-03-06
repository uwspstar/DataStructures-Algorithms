/*
Given an integer, reverse the digits.Do not convert the integer into a string and reverse it.

console.log(reverseInteger(135)) // 531
console.log(reverseInteger(-321))// -123

anything reverse : think about stack first

We can treat the input number like a stack, pop each least significant digit out, and then push it into another integer.

The time complexity is O(log n) for processing each digit, where n is the input number and the space complexity is O(n) for creating another number of the same size.
*/

// think about stack
const reverseInteger = (num) => {
    if (num > -9 && num < 9) return num;

    let negative = -1;

    num < 0 ? num = (-1) * num : negative = 1;

    let result = 0;
    // 1234 % 10 = 4
    while (num > 0) {
        result = result * 10 + num % 10;
        num = parseInt(num / 10);
    }

    return result * negative;
}

console.log('reverseInteger1 = ', reverseInteger(135)) // 531
console.log('reverseInteger2 = ', reverseInteger(-321))// -123
