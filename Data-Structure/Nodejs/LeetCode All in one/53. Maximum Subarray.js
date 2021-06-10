//53. Maximum Subarray
/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Input: nums = [-2,1,-3,4,-1,2,1,-5,4] Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.

Input: nums = [1] Output: 1
Input: nums = [5,4,-1,7,8] Output: 23
*/
//https://www.youtube.com/watch?v=2ywDUuWx1Ss
{
    //t : O(N)
    //s : O(1)
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

    //Maximum Product Subarray
    //Degree of an Array
    //Longest Turbulent Subarray
    //Maximum Absolute Sum of Any Subarray
    //Maximum Subarray Sum After One Operation
}