//35. Search Insert Position
/*Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

Example 1: Input: nums = [1,3,5,6], target = 5 Output: 2
Example 2: Input: nums = [1,3,5,6], target = 2 Output: 1
Example 3: Input: nums = [1,3,5,6], target = 7 Output: 4
Example 4: Input: nums = [1,3,5,6], target = 0 Output: 0
Example 5: Input: nums = [1], target = 0 output: 0
 */
{
    /**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
    var searchInsert = function (nums, target) {
        if (nums.length === 0) return 1;
        if (nums[0] >= target) return 0;
        if (nums[nums.length - 1] < target) return nums.length;

        let left = 0;
        let right = nums.length - 1;

        while (left <= right) {
            const i = parseInt(left + (right - left) / 2); // do not use (right + left) / 2      
            if (nums[i] === target) {
                return i;
            }
            nums[i] > target ? right = i - 1 : left = i + 1;
        }

        return left;
    };
    /*
    Median of Two Sorted Arrays
    Height Checker
    Minimum Number of People to Teach
    */
}