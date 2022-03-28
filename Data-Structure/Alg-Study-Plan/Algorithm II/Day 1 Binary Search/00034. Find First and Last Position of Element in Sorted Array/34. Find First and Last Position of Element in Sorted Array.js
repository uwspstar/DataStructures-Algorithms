//34. Find First and Last Position of Element in Sorted Array
/*
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
*/

/*
Plates Between Candles
Find Target Indices After Sorting Array
*/
{
    const findFirstPosition = (nums, target) => {
        let left = 0, right = nums.length - 1;
        while (left <= right) {
            let mid = left + ((right - left) >> 1);
            if (nums[mid] > target) {
                right = mid - 1;
            } else if (nums[mid] < target) {
                left = mid + 1
            } else {
                right = mid - 1;
            }
        }

        if (nums[left] !== target || left >= nums.length) return - 1;
        return left;
    }
    const findLastPosition = (nums, target) => {
        let left = 0, right = nums.length - 1;
        while (left <= right) {
            let mid = left + ((right - left) >> 1);
            if (nums[mid] > target) {
                right = mid - 1;
            } else if (nums[mid] < target) {
                left = mid + 1
            } else {
                left = mid + 1;
            }
        }

        if (nums[right] !== target || right < 0) return -1;

        return right;
    }
    var searchRange = function (nums, target) {
        return [findFirstPosition(nums, target), findLastPosition(nums, target)];
    };

    // Plates Between Candles (M)
    // Find Target Indices After Sorting Array (E)
}