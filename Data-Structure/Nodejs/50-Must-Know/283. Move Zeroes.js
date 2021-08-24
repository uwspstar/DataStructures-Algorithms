//283. Move Zeroes
/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1: Input: nums = [0,1,0,3,12] Output: [1,3,12,0,0]
Example 2: Input: nums = [0] Output: [0]
*/

{
    // T : O(N)
    // S : O(1)
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
{
    // move 0, on left, 1 on right, in place
    const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];
    const sort01 = arr => {
        if (arr.length < 2) return arr;
        let p = -1;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 0) {
                p++;
                swap(arr, i, p);
            }
        }
    }
    console.log(sort01([0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1]));

}
{
    //75. Sort Colors : 3 way partition (Dutch National Flag problem)
    //Input: nums = [2,0,2,1,1,0] Output: [0,0,1,1,2,2]
    const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

    var sortColors = function (nums) {
        let p0 = 0;
        let curr = 0;
        let p2 = nums.length - 1;
        while (curr <= p2) { // < and ==
            if (nums[curr] === 2) {
                swap(nums, p2, curr);
                p2--;
            } else if (nums[curr] === 0) {
                swap (nums, curr, p0);
                curr++;
                p0++;
            } else {
                curr++;
            }
        }
        return nums;
    }

    console.log('sortColors = ',sortColors([2,0,1,2,0,1,1,2,2,1,1,0,0,1]))

}