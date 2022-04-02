// 300. Longest Increasing Subsequence
/*
Given an integer array nums, return the length of the longest strictly increasing subsequence.

A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements. For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7].

Example 1:

Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
Example 2:

Input: nums = [0,1,0,3,2,3]
Output: 4
*/

{
    // dp 数组的定义：dp[i] 表示以 nums[i] 这个数结尾的最长递增子序列的长度。
    // 那么 dp 数组中最大的那个值就是最长的递增子序列长度。
    var lengthOfLIS = function (nums) {
        if (nums.length === 0) return 0;
        let N = nums.length;
        let dp = Array(N);
        dp[0] = 1;
        let maxans = 1;
        for (let i = 1; i < N; i++) {
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

    // Increasing Triplet Subsequence (M)
    // Maximum Length of Pair Chain (M)
    // Number of Longest Increasing Subsequence (M)
    // Minimum ASCII Delete Sum for Two Strings (M)
    // Minimum Number of Removals to Make Mountain Array (H)
    // Find the Longest Valid Obstacle Course at Each Position (H)
    // Minimum Operations to Make the Array K-Increasing (H)
    // Russian Doll Envelopes (H)
}