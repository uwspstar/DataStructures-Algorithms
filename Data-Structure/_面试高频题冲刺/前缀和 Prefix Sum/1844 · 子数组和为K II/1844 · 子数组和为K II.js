// 1844 · 子数组和为K II
// https://www.lintcode.com/problem/1844/solution/23488
// also check leetcode 560. Subarray Sum Equals K
// https://leetcode.com/problems/subarray-sum-equals-k/
/*
给定一个整数数组和一个整数k，你需要找到和为k的最短非空子数组，并返回它的长度。

输入: nums = [1,1,1,2] and k = 3 输出: 2
输入: nums = [2,1,-1,4,2,-3] and k = 3 输出: 2

prefixSum + hashTable

?? if we ask for longest 非空子数组, then, the map will save leftest idx, (if map not have prefixSum, then add to map)
*/
export class Solution {
    /**
     * @param nums: a list of integer
     * @param k: an integer
     * @return: return an integer, denote the minimum length of continuous subarrays whose sum equals to k
     */
    getPrefixSum(nums) {
        const N = nums.length;
        const prefixSum = [0];
        for (let i = 0; i < N; i++) {
            prefixSum[i + 1] = prefixSum[i] + nums[i];
        }
        return prefixSum;
    }
    subarraySumEqualsKII(nums, k) {
        const prefixSum = this.getPrefixSum(nums);
        const sum2index = new Map();
        sum2index.set(0, 0);
        let ans = Infinity;
        let N = prefixSum.length;
        for (let i = 0; i < N; i++) {
            // currSum => prefixSum[start]
            // prefixSum[i + 1] - prefixSum[start] = k
            // prefixSum[start] = prefixSum[i + 1] - k;
            // map(prefixSum[start], start)
            let key = prefixSum[i + 1] - k;
            if (sum2index.has(key)) {
                let sz = (i + 1) - sum2index.get(key);
                ans = Math.min(ans, sz);
            }
            sum2index.set(prefixSum[i + 1], i + 1);
        }
        return ans === Infinity ? -1 : ans;
    }
}