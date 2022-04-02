//34. Find First and Last Position of Element in Sorted Array
/*
Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

Example 1: Input: nums = [5,7,7,8,8,10], target = 8 Output: [3,4]

Example 2:
Input: nums = [5,7,7,8,8,10], target = 6 Output: [-1,-1]

Example 3:
Input: nums = [], target = 0 Output: [-1,-1]
*/
//https://www.youtube.com/watch?v=JuDAqNyTG4g
{
    const searchRange = (nums, target) => {
        let res = [-1, 1];
        let left = 0;
        let right = nums.length - 1;

        while (left + 1 < right) {
            let mid = left + ((right - left) >> 1)

            if (nums[mid] === target) {
                right = mid; //first half
            } else if (nums[mid] > target) {
                right = mid;
            } else {
                left = mid;
            }
        }
        if (nums[left] === target) {
            res[0] = left;
        }
        if (nums[right] === target) {
            res[0] = right;
        }

        left = 0;
        right = nums.length - 1;

        while (left + 1 < right) {
            let mid = left + ((right - left) >> 1)

            if (nums[mid] === target) {
                left = mid; //second half
            } else if (nums[mid] > target) {
                right = mid;
            } else {
                left = mid;
            }
        }

        if (nums[left] === target) {
            res[1] = left;
        }
        if (nums[right] === target) {
            res[1] = right;
        }

        return res;
    }
    console.log(searchRange([5, 7, 7, 8, 8, 10], 8)) //[ 3, 4 ]
}