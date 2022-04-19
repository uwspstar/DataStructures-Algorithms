// 53. Maximum Subarray
/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.

 

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
*/
{
    var maxSubArray = function (nums) {

        let currentSubarray = nums[0];
        let maxSubarray = nums[0];

        for (let i = 1; i < nums.length; i++) {
            let num = nums[i];
            currentSubarray = Math.max(num, currentSubarray + num);
            maxSubarray = Math.max(maxSubarray, currentSubarray);
        }
        return maxSubarray;
    };
    // Degree of an Array (E)
    // Maximum Absolute Sum of Any Subarray (M)
    // Maximum Subarray Sum After One Operation (M)
}