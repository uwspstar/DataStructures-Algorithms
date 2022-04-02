// 162. Find Peak Element
/*
A peak element is an element that is strictly greater than its neighbors.

Given an integer array nums, find a peak element, and return its index. If the array contains multiple peaks, return the index to any of the peaks.

You may imagine that nums[-1] = nums[n] = -∞.

You must write an algorithm that runs in O(log n) time.

Input: nums = [1,2,3,1] Output: 2
Explanation: 3 is a peak element and your function should return the index number 2.
 
Input: nums = [1,2,1,3,5,6,4] Output: 5
Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.
*/
{
    // template 2
    const findPeakElement = nums => {

        let N = nums.length;
        let left = 0;
        let right = N - 1;
        let res = -1;

        while (left <= right) {
            let mid = parseInt(left + (right - left) / 2);

            if (nums[mid] > nums[mid + 1] && nums[mid] > nums[mid - 1]) {
                res = mid;
                break;
            }
            // 1) the key part is understand, if the mid < mid + 1; then, at least have one peak at right;
            if (nums[mid] < nums[mid + 1]) {
                res = mid + 1; // could be peak
                left = mid + 1;
            } else {// nums[mid] > nums[mid + 1] at least have one peak at left;
                res = mid; // // could be peak
                right = mid - 1;
            }
        }
        return res;

    };

    console.log(findPeakElement([1, 2, 3, 1])); // 2
    console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4])); // 5
}