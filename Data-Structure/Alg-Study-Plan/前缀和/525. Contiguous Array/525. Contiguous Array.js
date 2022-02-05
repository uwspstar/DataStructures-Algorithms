// 525. Contiguous Array
/*
Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.

Example 1:
Input: nums = [0,1]
Output: 2
Explanation: [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.

Example 2:
Input: nums = [0,1,0]
Output: 2
Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
*/
//解题思路
//把输入数组中所有的0都替换成-1，那么题目就变成了求包含相同数目的-1和1的最长子数组的长度
//在一个只包含数字1和-1的数组中，如果子数组-1和1的数目相同的话，那么子数组的所有数字之和就是0
//所以这个题目就变成了求数字之和为0的最长子数组的长度

var findMaxLength = function (nums) {
    const N = nums.length;
    const map = new Map();
    map.set(0, -1);
    let preSum = 0;
    let res = 0;
    for (let i = 0; i < N; i++) {
        preSum += nums[i] == 0 ? -1 : 1;
        // 如果存在的话，则将当前索引和之前存入的索引值相减  取题目要求的最大值
        if (map.has(preSum)) {
            res = Math.max(res, i - map.get(preSum));
        } else {
            map.set(preSum, i);// 记录前缀和索引
        }
    }
    return res;
};