/*
https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

34. Find First and Last Position of Element in Sorted Array
Medium  

Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
*/

//binary search = You must write an algorithm with O(log n) runtime complexity.
{
    // first while find the first one
    // second while find the last one;
    const searchRange = (nums, target) => {
        if (nums.length === 0) return [-1, -1];

        let N = nums.length;
        let l = 0;
        let r = N - 1;
        let first = - 1;
        let last = -1;

        while (l <= r) {
            let mid = parseInt(l + (r - l) / 2);
            if (nums[mid] < target) {
                l = mid + 1;
            } else { // nums[mid] >= target
                if (nums[mid] == target) { // must have
                    first = mid;
                }
                r = mid - 1;
            }
        }

        if (first == -1) return [-1, -1];

        l = first; // no need l = 0, l can be safely jump to first;
        r = N - 1;

        while (l <= r) {
            let mid = parseInt(l + (r - l) / 2);
            if (nums[mid] <= target) {
                if (nums[mid] == target) { // must have
                    last = mid;
                }
                l = mid + 1;
            } else { // nums[mid] > target
                r = mid - 1;
            }
        }

        return [first, last];
    }

    console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // [3, 4]
    console.log(searchRange([5, 7, 7, 8, 8, 10], 6)); // [ -1, -1 ]
    console.log(searchRange([5, 7, 7, 8, 8, 10], 0)); // [ -1, -1 ]
}