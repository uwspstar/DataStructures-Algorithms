// 413. Arithmetic Slices
/*
An integer array is called arithmetic if it consists of at least three elements and if the difference between any two consecutive elements is the same.

For example, [1,3,5,7,9], [7,7,7,7], and [3,-1,-5,-9] are arithmetic sequences.
Given an integer array nums, return the number of arithmetic subarrays of nums.

A subarray is a contiguous subsequence of the array.

Example 1:

Input: nums = [1,2,3,4]
Output: 3
Explanation: We have 3 arithmetic slices in nums: [1, 2, 3], [2, 3, 4] and [1,2,3,4] itself.
Example 2:

Input: nums = [1]
Output: 0
*/
{
    //Given an integer array nums, 
    //return the number of arithmetic subarrays of nums.
    var numberOfArithmeticSlices = function (nums) {
        const N = nums.length;
        if (N === 1) {
            return 0;
        }
        // d = nums[i - 1] - nums[i]; 等差
        let d = nums[0] - nums[1], cnt = 0;
        let ans = 0;
        // 因为等差数列的长度至少为 3，所以可以从 i = 2 开始枚举
        for (let i = 2; i < N; i++) {
            if (nums[i - 1] - nums[i] === d) {
                ++cnt;
            } else {
                // reset
                d = nums[i - 1] - nums[i];
                cnt = 0;
            }
            ans += cnt;
        }
        return ans;
    };
    // Arithmetic Slices II - Subsequence (H)
    // Arithmetic Subarrays (M)

    // https://leetcode-cn.com/problems/arithmetic-slices/solution/deng-chai-shu-lie-hua-fen-by-leetcode-so-g7os/
}