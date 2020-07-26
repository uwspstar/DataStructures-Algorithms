/*
Given a non-empty array of integers, "every element appears twice except for one. Find that single one"

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1: Input: [2,2,1] Output: 1
Example 2: Input: [4,1,2,1,2] Output: 4


https://medium.com/javascript-in-plain-english/8-tips-to-help-you-better-optimize-your-javascript-algorithms-c226871193fc

a⊕a⊕b

Explanation — If we take the XOR (⊕) of two same bits, it will return 0.
a⊕a=0

If we take the XOR of zero and some bit, it will return that bit
a⊕0=a

The expression a⊕a⊕b evaluates to
a⊕a⊕b=(a⊕a)⊕b=0⊕b=b
*/

// if there are two single nums ? ("every element appears twice except for one. Find that single one")

const singleNumber = (arr) => {
    let a = 0;
    for (let i = 0; i < arr.length; i++) {
        a ^= arr[i];
    }
    return a;
}

let arr = [1, 2, 3, 2, 1];
console.log(singleNumber(arr));