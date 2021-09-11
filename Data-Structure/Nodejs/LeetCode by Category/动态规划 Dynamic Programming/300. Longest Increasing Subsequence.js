//300. Longest Increasing Subsequence
/*
Given an integer array nums, return the length of the longest strictly increasing subsequence.

A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements. For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7].

Example 1: Input: nums = [10,9,2,5,3,7,101,18] Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

Example 2: Input: nums = [0,1,0,3,2,3] Output: 4
Example 3: Input: nums = [7,7,7,7,7,7,7] Output: 1
*/
{
    var lengthOfLIS = function (nums) {
        if (nums.length == 0) {
            return 0;
        }
        let dp = Array(nums.length);
        dp[0] = 1;
        let maxans = 1;
        for (let i = 1; i < dp.length; i++) {
            let maxval = 0;
            for (let j = 0; j < i; j++) {
                if (nums[i] > nums[j]) {
                    maxval = Math.max(maxval, dp[j]);
                }
            }
            dp[i] = maxval + 1;
            maxans = Math.max(maxans, dp[i]);
        }
        return maxans;
    };
}