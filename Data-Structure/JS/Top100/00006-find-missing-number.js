/*
https://www.geeksforgeeks.org/find-the-missing-number/

Find the Missing Number

You are given a list of n-1 integers , "NOT IN ORDER", and these integers are in the "Range of 1 to N". There are no duplicates in the list. One of the integers is missing in the list. Write an efficient code to find the missing integer.

Input: arr[] = {1, 2, 4, 6, 3, 7, 8} Output: 5
Explanation: The missing number from 1 to 8 is 5

Input: arr[] = {1, 2, 3, 5} Output: 4
Explanation: The missing number from 1 to 5 is 4
*/

// 1: cannot sort first // "NOT IN ORDER"
// use sumTotal = n / 2 * (n  + 1) // "Range of 1 to N"
// O(N)
const findMissingNumber = (arr) => {
    if (arr.length < 2) return 1;

    let n = arr.length + 1;
    let sumTotal = (n >> 1) * (n + 1);// let sumTotal = n / 2 * (n + 1); // (n >> 1) is n/2
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sumTotal - sum;
}

console.log(findMissingNumber([1, 2, 4, 6, 3, 7, 8])) //[1, 2, 3, 4, 5, 6, 7] //sum = 28