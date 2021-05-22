//35. Search Insert Position
/*Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

Example 1: Input: nums = [1,3,5,6], target = 5 Output: 2
Example 2: Input: nums = [1,3,5,6], target = 2 Output: 1
Example 3: Input: nums = [1,3,5,6], target = 7 Output: 4
Example 4: Input: nums = [1,3,5,6], target = 0 Output: 0
Example 5: Input: nums = [1], target = 0 output: 0
 */
class Solution {
    public int searchInsert(int[] nums, int target) {
        int pivot, left = 0, right = nums.length - 1;
        while (left <= right) {
            pivot = left + (right - left) / 2;
            if (nums[pivot] == target)
                return pivot;
            if (target < nums[pivot])
                right = pivot - 1;
            else
                left = pivot + 1;
        }
        return left;
    }
}
/*
 * Median of Two Sorted Arrays Height Checker Minimum Number of People to Teach
 */
/*
Binary search is a search algorithm that find the position of a target value within a sorted array.

Usually, within binary search, we compare the target value to the middle element of the array at each iteration.

If the target value is equal to the middle element, the job is done.

If the target value is less than the middle element, continue to search on the left.

If the target value is greater than the middle element, continue to search on the right.
*/