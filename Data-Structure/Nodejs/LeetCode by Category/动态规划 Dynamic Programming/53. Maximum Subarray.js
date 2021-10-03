//53. Maximum Subarray
/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
*/
{
    var maxSubArray = function (nums) {
        //dp[i] : Maximum Sum of the Subarray
        //dp[i] = max (dp[i - 1] + nums[i], nums[i])
        let N = nums.length - 1;

        let dp = [nums[0]];
        let ans = [nums[0]];

        for (let i = 1; i <= N; i++) {

            dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
            ans = Math.max(ans, dp[i]);
        }

        return ans;
    }
}