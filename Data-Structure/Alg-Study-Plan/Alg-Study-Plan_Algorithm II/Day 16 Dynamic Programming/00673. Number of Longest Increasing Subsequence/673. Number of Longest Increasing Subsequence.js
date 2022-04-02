// 673. Number of Longest Increasing Subsequence
/*
Given an integer array nums, return the number of longest increasing subsequences.

Notice that the sequence has to be strictly increasing.

Example 1:

Input: nums = [1,3,5,4,7]
Output: 2
Explanation: The two longest increasing subsequences are [1, 3, 4, 7] and [1, 3, 5, 7].
Example 2:

Input: nums = [2,2,2,2,2]
Output: 5
Explanation: The length of longest continuous increasing subsequence is 1, and there are 5 subsequences' length is 1, so output 5.
*/
{
    // T.C: O(N^2)
    // S.C: O(N)
    var findNumberOfLIS = function (nums) {
        if (nums === null || nums.length === 0) {
            return 0;
        }
        // dp[i] is the length of longest increasing subsequence ending at index i
        let dp = new Array(nums.length);
        // freq[i] is the number of LISs ending at index i
        let freq = new Array(nums.length);
        for (let i = 0; i < nums.length; i++) {
            // Obtain length of LISs ending at i
            let lenOfLIS = 1;
            for (let j = 0; j < i; j++) {
                if (nums[j] < nums[i]) {
                    lenOfLIS = Math.max(lenOfLIS, dp[j] + 1);
                }
            }

            // Obtain number of LISs ending at i
            let freqAtI = 0
            for (let j = 0; j < i; j++) {
                if (nums[j] < nums[i] && dp[j] + 1 === lenOfLIS) {
                    freqAtI += freq[j];
                }
            }

            // Record them to arrays
            dp[i] = lenOfLIS;
            freq[i] = freqAtI === 0 ? 1 : freqAtI;
        }

        // Obtain the length of LIS out of all possible increasing sequences
        let maxLen = Math.max(...dp);

        // Obtain the total number of LISs
        let maxFreq = 0;
        for (let i = 0; i < dp.length; i++) {
            if (dp[i] === maxLen) {
                maxFreq += freq[i];
            }
        }
        return maxFreq;

    };
    // Circular Array Loop (M)
    // Maximum Sum of Two Non-Overlapping Subarrays (M)
    // Choose Numbers From Two Arrays in Range (H)
}