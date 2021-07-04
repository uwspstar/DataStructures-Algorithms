//704. Binary Search
/*
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
*/
{
    const binarySearch = (nums, target, left = 0, right = nums.length - 1) => {
        if (left > right) return -1;

        let mid = left + (right - left) / 2;
        mid = parseInt(mid);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            return binarySearch(nums, target, left, mid - 1);
        } else {
            return binarySearch(nums, target, mid + 1, right);
        }
    };

    console.log('recursive, binarySearch:', binarySearch([-1, 0, 3, 5, 9, 12], 9));
}
{


    //recursion
    var search = function (nums, target) {

        const searchTarget = (nums, target, left = 0, right = nums.length - 1) => {

            if (left <= right) {
                let mid = left + ((right - left) >> 1);
                mid = parseInt(mid);
                if (nums[mid] === target) {
                    return mid;
                } else if (nums[mid] > target) {
                    return searchTarget(nums, target, left, mid - 1); // right =  mid - 1
                } else {
                    return searchTarget(nums, target, mid + 1, right); // left =  mid + 1
                }
            }
            return - 1;
        }

        return searchTarget(nums, target)
    }
}
//iteration
var search = function (nums, target) {
    // [-1,0,3,5,9,12], target = 9
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = left + (right - left) / 2;
        mid = parseInt(mid);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
        console.log(mid)
    }
    return -1;
};
//Search in a Sorted Array of Unknown Size