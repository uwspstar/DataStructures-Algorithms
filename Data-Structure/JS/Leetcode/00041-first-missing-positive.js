/*
41. First Missing Positive : Hard 
Given an unsorted integer array, find the smallest missing positive integer.

Example 1: Input: [1,2,0] Output: 3
Example 2: Input: [3,4,-1,1] Output: 2
Example 3: Input: [7,8,9,11,12] Output: 1
*/

const firstMissingPositive = function (nums) {

    if (nums.length < 2) return nums[0] === 1 ? 2 : 1;

    let result = [];
    for (let i = 0; i < nums.length; i++) {
        const temp = nums[i];
        if (temp > nums.length) {
            result[i] = false;
        }
        if (temp > 0) {
            result[temp - 1] = true;
        }

    }
    for (let i = 0; i < result.length; i++) {
        if (!result[i]) {
            return i + 1;
        }
    }
    return result.length + 1;
};