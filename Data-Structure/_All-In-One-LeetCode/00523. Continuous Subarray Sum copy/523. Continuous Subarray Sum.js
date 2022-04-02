// 523. Continuous Subarray Sum
/*
Given an integer array nums and an integer k, return true if nums has a continuous subarray of size at least two whose elements sum up to a multiple of k, or false otherwise.

An integer x is a multiple of k if there exists an integer n such that x = n * k. 0 is always a multiple of k.

Example 1:
Input: nums = [23,2,4,6,7], k = 6
Output: true
Explanation: [2, 4] is a continuous subarray of size 2 whose elements sum up to 6.

Example 2:
Input: nums = [23,2,6,4,7], k = 6
Output: true
Explanation: [23, 2, 6, 4, 7] is an continuous subarray of size 5 whose elements sum up to 42.
42 is a multiple of 6 because 42 = 7 * 6 and 7 is an integer.

Example 3:
Input: nums = [23,2,6,4,7], k = 13
Output: false
*/
// https://leetcode-cn.com/problems/continuous-subarray-sum/solution/gong-shui-san-xie-tuo-zhan-wei-qiu-fang-1juse/
//要使得两者除 kk 相减为整数，需要满足 sum[j]sum[j] 和 sum[i - 1]sum[i−1] 对 kk 取余相同。
var checkSubarraySum = function (nums, k) {
    if (nums.length < 2) return false;
    let map = new Map();
    map.set(0, -1); //-1 is index

    let preSum = 0;
    for (let i = 0; i < nums.length; i++) {
        preSum += nums[i];

        let key = preSum % k;

        if (map.has(key)) {
            let j = map.get(key);
            if ((i - j) > 1) return true;
        } else {
            map.set(key, i); // i is the index
        }
    }
    return false;

};