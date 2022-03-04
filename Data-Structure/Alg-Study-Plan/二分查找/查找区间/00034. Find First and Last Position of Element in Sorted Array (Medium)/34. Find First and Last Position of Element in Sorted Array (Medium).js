//34. Find First and Last Position of Element in Sorted Array (Medium)
/*
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.
*/
const searchRange = (nums, target) => {
    if (nums.length === 0) return [-1, -1];

    let N = nums.length;
    let l = 0;
    let r = N - 1;
    let first = - 1;
    let last = -1;
    // 1) find first
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

    if (first == -1) return [-1, -1]; // make sure first is valid

    l = first; // first will be start
    r = N - 1;
    // 2) find last
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