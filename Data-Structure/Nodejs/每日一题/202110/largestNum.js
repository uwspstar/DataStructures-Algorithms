/*
Given a number of integers, combine them so it would create the largest number.

Input:  [17, 7, 2, 45, 72]
Output:  77245217
*/

const largestNum = arr => {
    let max = -Infinity;
    arr.sort((a, b) => Math.floor(b.toString() + a.toString())- Math.floor(a.toString() + b.toString()));
    
    return arr.join('');
}
let arr = [17, 7, 2, 45, 72];
console.log(largestNum(arr));
