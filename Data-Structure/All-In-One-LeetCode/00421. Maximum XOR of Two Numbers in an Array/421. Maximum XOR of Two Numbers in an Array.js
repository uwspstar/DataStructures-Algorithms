//421. Maximum XOR of Two Numbers in an Array
/*
Given an integer array nums, return the maximum result of nums[i] XOR nums[j], where 0 <= i <= j < n.

Example 1:

Input: nums = [3,10,5,25,2,8]
Output: 28
Explanation: The maximum result is 5 XOR 25 = 28.
Example 2:

Input: nums = [14,70,53,83,49,91,36,80,92,51,66,70]
Output: 127
*/
//brute force
var findMaximumXOR = function (nums) {
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            res = Math.max(res, nums[i] ^ nums[j]);
        }
    }
    return res;
};

var findMaximumXOR = function (n) {
    let max = 0, mask = 0;
    // 0 <= nums[i] <= 2^31 - 1
    for (let i = 31; i >= 0; i--) {
        mask = mask | (1 << i);
        console.log('mask=', mask);
        let set = new Set();
        for (const num of n) {
            set.add(num & mask);
        }
        console.log('set=', set);

        let tmp = max | (1 << i);

        for (const prefix of set) {
            if (set.has(tmp ^ prefix)) {
                max = tmp;
                break;
            }
        }
    }
    return max;
};