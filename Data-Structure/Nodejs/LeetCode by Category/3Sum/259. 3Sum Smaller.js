/**
Given an array of n integers nums and an integer target, find the number of index triplets i, j, k with 0 <= i < j < k < n that satisfy the condition nums[i] + nums[j] + nums[k] < target.

 

Example 1:

Input: nums = [-2,0,1,3], target = 2
Output: 2
Explanation: Because there are two triplets which sums are less than 2:
[-2,0,1]
[-2,0,3]
Example 2:

Input: nums = [], target = 0
Output: 0
Example 3:

Input: nums = [0], target = 0
Output: 0
 */
{
    var threeSumSmaller = function (nums, target) {
        if (nums.length < 3) return 0;
        let res = 0;
        nums.sort((a, b) => a - b);
        for (let i = 0; i < nums.length; i++) {
            let left = i + 1;
            let right = nums.length - 1;
            while (left < right) {
                let sum = nums[i] + nums[left] + nums[right];
                if (sum < target) {
                    res += right - left; // this is the key logic
                    left++;
                } else {
                    right--;
                }
            }
        }
        return res;
    };
}
//Valid Triangle Number