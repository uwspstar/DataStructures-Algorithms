// 215. Kth Largest Element in an Array
/*
Given an integer array nums and an integer k, return the kth largest element in the array.

Note that it is the kth largest element in the sorted order, not the kth distinct element.

 

Example 1:

Input: nums = [3,2,1,5,6,4], k = 2
Output: 5
Example 2:

Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4
*/

const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

var findKthLargest = function (nums, k) {
    const N = nums.length;
    let left = 0, right = N - 1;
    while (left < right) {
        const pi = getPivotIndex(nums, left, right);
        if (pi === N - k) {
            return nums[pi];
        } else if (pi < N - k) {
            left = pi + 1;
        } else {
            right = pi - 1;
        }
    }
    return nums[left];
};

function getPivotIndex(nums, low, high) {
    const pivot = nums[high];
    let pi = low;
    for (let i = low; i <= high; i++) {
        if (nums[i] < pivot) {
            swap(nums, i, pi);
            pi++;
        }
    }
    swap(nums, pi, high);
    return pi;
}