/*
https://leetcode.com/problems/continuous-subarray-sum/

Given an "unsorted array" A of size N of non-negative integers, find a 
"continuous sub-array" which adds to a given number S

input: [1, 2, 3, 7, 5] , 12 output: [2 3 7]
input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,] , 15 output: [1, 2, 3, 4, 5] // ony need first one, if need shortest continuous sub-array, [7, 8] not [4, 5, 6]

1: continuousSubarray
2: shortestContinuousSubarray
3: longestContinuousSubarray
*/

const continuousSubarray = function (arr, sum) {
    if (arr.length === 0) return undefined;
    if (arr.length === 1) return arr[0] === sum;
    /*
    let current = 1;
    let result = [];
    let currentSum = arr[0]

    while (current < arr.length) {
        if (arr[current] < arr[current - 1]) break;
        result.push(arr[current]);
        currentSum += arr[current];

        console.log('current =', current, 'currentSum=', currentSum, 'result=', result);

        if (currentSum === sum) break;
        while (currentSum > sum) {
            currentSum -= result[0];
            result.shift();
            console.log('current =', current, 'currentSum=', currentSum, 'result=', result);
        }
    }
    */
    return currentSum === sum ? result : undefined;
}

console.log(continuousSubarray([1, 2, 3, 7, 5], 12));

const shortestContinuousSubarray = function (arr, sum) {

}

const longestContinuousSubarray = function (arr, sum) {

}