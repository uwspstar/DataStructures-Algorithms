//34. Find First and Last Position of Element in Sorted Array
/*
Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

*** You must write an algorithm with O(log n) runtime complexity.

Example 1: Input: nums = [5,7,7,8,8,10], target = 8 Output: [3,4]
Example 2: Input: nums = [5,7,7,8,8,10], target = 6 Output: [-1,-1]
Example 3: Input: nums = [], target = 0 Output: [-1,-1]
*/
//Two Binary Searches
//Normally, we compare nums[mid] == target 
//because we simply need to check if we found our target or not. 
//But now, apart from checking for equality, 
//we also need to check if mid is the first or the last index 
//where the target occurs
{/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

    const binarySearch = (nums, target, isFirst) => {
        let left = 0;
        let right = nums.length - 1;

        while (left <= right) {
            let mid = left + ((right - left) >> 1);
            //let mid = parseInt(left + ((right - left) >> 1)); // not use parseInt , >> work for int

            if (nums[mid] > target) {
                right = mid - 1;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {

                if (isFirst) { //left : mid == left or nums[mid -1] !== target
                    if (mid == left || nums[mid - 1] !== target) {
                        return mid;
                    } else {
                        right = mid - 1;
                    }
                } else {//right
                    if (mid === right || nums[mid + 1] !== target) {
                        return mid;
                    } else {
                        left = mid + 1;
                    }
                }
            }
        }
        return -1;
    }

    var searchRange = function (nums, target) {

        let leftIdx = binarySearch(nums, target, true);
        // cannot use if (!leftIdx); 
        // leftIdx  can be index 0:
        if (leftIdx === -1) return [-1, -1];

        let rightIdx = binarySearch(nums, target, false);

        return [leftIdx, rightIdx];
    };

/*
Smallest Rectangle Enclosing Black Pixels
Maximum Average Subarray II
Distinct Numbers in Each Subarray
*/}
/*
Smallest Rectangle Enclosing Black Pixels
Maximum Average Subarray II
Distinct Numbers in Each Subarray
*/