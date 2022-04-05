// 35. Search Insert Position
/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

Example 1: Input: nums = [1,3,5,6], target = 5 Output: 2
Example 2: Input: nums = [1,3,5,6], target = 2 Output: 1
Example 3: Input: nums = [1,3,5,6], target = 7 Output: 4
*/
{
    var searchInsert = function (nums, target) {
        if (nums.length === 0) return 1;
        if (nums[0] >= target) return 0;
        if (nums[nums.length - 1] < target) return nums.length;

        let left = 0;
        let right = nums.length - 1;

        while (left <= right) {
            const mid = parseInt(left + (right - left) / 2);
            if (nums[mid] === target) {
                return mid;
            }
            nums[mid] > target ? right = mid - 1 : left = mid + 1;
        }

        return left;
    };
    // Group Shifted Strings (M)
    // Super Egg Drop (H)
    // Bitwise ORs of Subarrays (M)
    // Median of Two Sorted Arrays (H)
    // Height Checker
    // Minimum Number of People to Teach
}