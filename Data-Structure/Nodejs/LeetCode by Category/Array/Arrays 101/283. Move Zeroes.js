//283. Move Zeroes
/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1: Input: nums = [0,1,0,3,12] Output: [1,3,12,0,0]
Example 2: Input: nums = [0] Output: [0]
*/

{
    var swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];
    var moveZeroes = function (nums) {
        let p = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== 0) {
                swap(nums, i, p);
                p++;
            }
        }
    };

    //Array Nesting
    //Maximum Area of a Piece of Cake After Horizontal and Vertical Cuts
    //Check If Array Pairs Are Divisible by k
    //Longest Substring with At Most Two Distinct Characters
    //Range Sum of Sorted Subarray Sums
    //Rotating the Box
}
