//1027. Longest Arithmetic Subsequence
/*
Given an array nums of integers, return the length of the longest arithmetic subsequence in nums.

Recall that a subsequence of an array nums is a list nums[i1], nums[i2], ..., nums[ik] with 0 <= i1 < i2 < ... < ik <= nums.length - 1, and that a sequence seq is arithmetic if seq[i+1] - seq[i] are all the same value (for 0 <= i < seq.length - 1).

Input: nums = [3,6,9,12] Output: 4
Explanation: 
The whole array is an arithmetic sequence with steps of length = 3.

Input: nums = [9,4,7,2,10] Output: 3
Explanation: 
The longest arithmetic subsequence is [4,7,10].

Input: nums = [20,1,15,3,10,5,8] Output: 4
Explanation: 
The longest arithmetic subsequence is [20,15,10,5].
*/
//https://leetcode-cn.com/problems/longest-arithmetic-subsequence/solution/dong-tai-gui-hua-jie-jue-zi-shu-zu-wen-t-zatn/
//https://leetcode-cn.com/problems/longest-arithmetic-subsequence/solution/dong-tai-gui-hua-ha-xi-biao-you-hua-by-acw_wangdh1/
{
    var longestArithSeqLength = function (A) {
        let len = A.length;
        let dp = Array.from(Array(len), () => new Array(len).fill(2));
        console.log('dp=', dp);
        let map = new Map();
        let max = 0;
        for (let i = 0; i < len; i++) {
            for (let j = i + 1; j < len; j++) {
                let target = 2 * A[i] - A[j];
                if (map.has(target)) dp[i][j] = dp[map.get(target)][i] + 1;
                max = Math.max(max, dp[i][j]);
            }
            map.set(A[i], i);
        }
        return max;
    };
    //Word Break II
    //Can I Win
    //Predict the Winner
}