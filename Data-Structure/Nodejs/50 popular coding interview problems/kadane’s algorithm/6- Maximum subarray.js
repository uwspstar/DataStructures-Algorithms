/*
Given a non-empty array of integers arr, create a function that returns the sum of the *** subarray *** that has the greatest sum.
We don't consider the empty array [] as a subarray.

Example 1:
Input: arr = [2, 3, -6, 4, 2, -8, 3] Output: 6
Explanation: the maximum subarray is [4, 2], its sum is 6

Example 2:
Input: arr = [2, 3, -1, 4, -10, 2, 5] Output: 8
Explanation: the maximum subarray is [2, 3, -1, 4], its sum is 8

Example 3:
Input: arr = [-3, -1, -2] Output: -1
Explanation: the maximum subarray is [-1], its sum is -1
*/
//subarray : continues
//2 for loops 
//O(N) / O(1)
//https://www.udemy.com/course/50-problems/learn/lecture/21602146#overview
{
    // kadane’s algorithm
    const findMaxSumSubarray = arr => {
        if (arr.length === 0) return 0;
        if (arr.length === 1) return arr[0];

        let maxSum = -Infinity;
        let currSum = 0;
        for (let num of arr) {
            currSum = Math.max(num, currSum + num); // add this one or not add
            maxSum = Math.max(maxSum, currSum);
        }
        return maxSum;
    }

    console.log(findMaxSumSubarray([-3, -1, -2]));//-1
    console.log(findMaxSumSubarray([2, 3, -1, 4, -10, 2, 5]));// 8
    console.log(findMaxSumSubarray([2, 3, -6, 4, 2, -8, 3]));// 6
    
}