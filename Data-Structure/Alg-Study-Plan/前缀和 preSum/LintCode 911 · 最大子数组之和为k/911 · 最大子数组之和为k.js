// 911 · 最大子数组之和为k
/*
给一个数组nums和目标值k，找到数组中最长的子数组，使其中的元素和为k。如果没有，则返回0。

输入: nums = [1, -1, 5, -2, 3], k = 3 输出: 4
解释: 子数组[1, -1, 5, -2]的和为3，且长度最大

输入: nums = [-2, -1, 2, 1], k = 1 输出: 2
解释: 子数组[-1, 2]的和为1，且长度最大

*/
export class Solution {

    getPrefixSum(nums) {
        const N = nums.length;
        const prefixSum = Array(N + 1).fill(0);
        for (let i = 0; i < nums.length; i++) {
            prefixSum[i + 1] = prefixSum[i] + nums[i];
        }
        return prefixSum;
    }
    maxSubArrayLen(nums, k) {
        // Write your code here
        if (nums.length === 0) return 0
        const N = nums.length;
        let res = - 1;
        const prefixSum = this.getPrefixSum(nums);
        console.log('prefixSum=', prefixSum);

        let sum2idx = new Map();
        sum2idx.set(0, 0);

        for (let i = 0; i < N; i++) {
            let currSum = prefixSum[i + 1] - k; // prefixSum[i] is currSum

            if (sum2idx.has(currSum)) {
                res = Math.max(res, i + 1 - sum2idx.get(currSum));
            }
            if (!sum2idx.has(prefixSum[i])) {
                sum2idx.set(prefixSum[i], i);
            }
        }
        return res;
    }
    
    maxSubArrayLen2(nums, k) {
        // Write your code here
        if (nums.length === 0) return 0
        const N = nums.length;
        let res = - 1;
        const prefixSum = Array(N + 1).fill(0);
        console.log('prefixSum=', prefixSum);

        let sum2idx = new Map();
        sum2idx.set(0, 0);

        for (let i = 0; i < N; i++) {
            prefixSum[i + 1] = prefixSum[i] + nums[i];
            let currSum = prefixSum[i + 1] - k; // prefixSum[i] is currSum

            if (sum2idx.has(currSum)) {
                res = Math.max(res, i + 1 - sum2idx.get(currSum));
            }
            if (!sum2idx.has(prefixSum[i])) {
                sum2idx.set(prefixSum[i], i);
            }
        }
        return res;
    }
}