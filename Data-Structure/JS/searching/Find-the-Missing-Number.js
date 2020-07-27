/*
https://www.geeksforgeeks.org/find-the-missing-number/

Find the Missing Number

You are given a list of n-1 integers , "NOT in order", and these integers are in the range of 1 to n. There are no duplicates in the list. One of the integers is missing in the list. Write an efficient code to find the missing integer.

Input: arr[] = {1, 2, 4, 6, 3, 7, 8} Output: 5
Explanation: The missing number from 1 to 8 is 5

Input: arr[] = {1, 2, 3, 5} Output: 4
Explanation: The missing number from 1 to 5 is 4
*/

// 1: cannot sort first
// use sumTotal = n / 2 * (n  + 1)
// O(N)
const findMissingNumber = (arr) => {
    if (arr.length < 2) return 1;

    let n = arr.length + 1;
    let sumTotal = (n >> 1) * (n + 1);// let sumTotal = n / 2 * (n + 1); 
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sumTotal - sum;
}
console.log(findMissingNumber([1, 2, 4, 6, 3, 7, 8]));

const findMissingNum = (arr) => {
    if (arr.length === 0) return -1;

    let n = arr.length + 1;
    let sum = n * (1 + n) >> 1; //1+2+3+...+n = n/2 * (1+n)
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return sum - total;
}
// 2: ask if the arr is sorted, if it is sorted, O(N) + O(N)
const findMissingNumberSorted = (arr) => {
    if (arr.length === 0) return 1;
    let arrSort = arr.sort();  // ON(NlogN)
    if (arrSort[0] !== 1) return 1;
    for (let i = 1; i < arrSort.length; i++) {
        if (arrSort[i] !== (i + 1)) return arrSort[i - 1] + 1;
    }
    return 1;
}
console.log(findMissingNumberSorted([1, 2, 4, 6, 3, 7, 8]));