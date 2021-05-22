//283. Move Zeroes
/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1: Input: nums = [0,1,0,3,12] Output: [1,3,12,0,0]
Example 2: Input: nums = [0] Output: [0]
*/
class Solution {
    public void moveZeroes(int[] nums) {
        int p = 0;
        // maintaining the relative order of the non-zero elements.
        // [1,3,0,12]
        // p
        // i
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] != 0) {
                int tmp = nums[i];
                nums[i] = nums[p];
                nums[p] = tmp;
                p++;
            }
        }
    }
}
// Array Nesting
// Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts
// Check If Array Pairs Are Divisible by k
