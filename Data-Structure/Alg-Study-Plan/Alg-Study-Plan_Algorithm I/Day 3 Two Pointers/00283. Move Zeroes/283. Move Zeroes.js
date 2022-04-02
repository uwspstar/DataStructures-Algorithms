// 283. Move Zeroes
/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
*/
{
    const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

    const moveZeroes = arr => {
        let p0 = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== 0) {
                swap(arr, i, p0);
                p0++;
            }
        }
    }
}
{
    var swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];
    // [ 1, 1, 0, 0, 2, 2] 
    //            p
    //                  i
    // move all 0's to the end of it while maintaining the relative order of the non-zero elements.
    var moveZeroes = function (nums) {
        let p = 0;// curr 0 position
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== 0) {
                swap(nums, i, p);
                p++;
            }
        }
    };
}
{
    var moveZeroes = function (nums) {
        // 0(1) space

        // If the current element is not 0, then we need to
        // append it just in front of last non 0 element we found.

        let lastNonZeroIndex = 0;

        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== 0) {
                nums[lastNonZeroIndex] = nums[i];
                lastNonZeroIndex++; // move to next place for valid val
            }
        }

        // now, we have all non-zero elements placed in correct order.
        // just need to pad the rest of the array with 0's
        for (let j = lastNonZeroIndex; j < nums.length; j++) {
            nums[j] = 0;
        }
    };
}