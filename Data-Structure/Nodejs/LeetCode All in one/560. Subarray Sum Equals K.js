/*
560. Subarray Sum Equals K

Given an array of integers nums and an integer k, return the total number of continuous subarrays whose sum equals to k.

Example 1: Input: nums = [1,1,1], k = 2 Output: 2
Example 2: Input: nums = [1,2,3], k = 3 Output: 2
*/
{
    var subarraySum = function (nums, k) {
        let preSum = 0;
        let count = 0;
        let map = {};
        // think about Two Sum
        for (let i = 0; i < nums.length; i++) {
            preSum += nums[i];

            let key =  preSum - k;
            if (map[key]) {
                count = map[key] + count;
            }

            if (preSum === k) count++;

            if (map[preSum]) {
                map[preSum] += 1;
            } else {
                map[preSum] = 1;
            }
        }
    }
}