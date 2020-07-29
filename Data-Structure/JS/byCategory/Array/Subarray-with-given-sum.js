/*
Given an "unsorted array" A of size N of non-negative integers, find a 
"continuous sub-array" which adds to a given number S

input: [1, 2, 3, 7, 5] , 12 output: [2 3 7]
input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,] , 15 output: [1, 2, 3, 4, 5] // ony need first one, if need shortest continuous sub-array, [7, 8] not [4, 5, 6]
*/

const continuousSubarray = function (arr, sum) {
    if (arr.length === 0) return undefined;
    if (arr.length === 1) return arr[0] === sum;

    let current = 1;
    let result = [];
    let currentSum = 0

    while (current < arr.length) {
        if (arr[i] < arr[i - 1]) break;
        result.push(arr[current]);
        currentSum += arr[current];
        if (currentSum === sum) break;
        while (currentSum > sum) {
            currentSum -= result[0];
            result.shift();
            console.log('currentSum=', currentSum, 'result=', result);
        }
    }
    return currentSum === sum ? result : undefined;
}

const shortestContinuousSubarray = function (arr, sum) {
    
}