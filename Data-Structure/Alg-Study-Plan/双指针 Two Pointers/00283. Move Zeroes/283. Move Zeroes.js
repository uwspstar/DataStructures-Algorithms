// 283. Move Zeroes
/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
*/
{
    // nums = [0,1,0,3,12] -> [1,3,12,0,0] 
    const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];
    var moveZeroes = function (nums) {
        let slow = 0, fast = 0;
        while (fast < nums.length) {
            if (nums[fast] !== 0) {
                swap(nums, fast, slow)
                slow++
            }
            fast++;
        }
    };
    // Reverse Subarray To Maximize Array Value (H)
    // Number of Subsequences That Satisfy the Given Sum Condition (M)
    // Remove All Ones With Row and Column Flips (M
}