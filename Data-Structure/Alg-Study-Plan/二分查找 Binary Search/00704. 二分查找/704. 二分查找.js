// 704. 二分查找
/*
给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
示例 1:

输入: nums = [-1,0,3,5,9,12], target = 9
输出: 4
解释: 9 出现在 nums 中并且下标为 4

*/
{
    var search = function (nums, target) {
        // [-1,0,3,5,9,12], target = 9
        if (nums.length === 0) return -1;

        let N = nums.length
        let left = 0;
        let right = N - 1;

        while (left <= right) {
            let mid = left + ((right - left) >> 1);
            if (nums[mid] === target) {
                return mid
            } else if (nums[mid] > target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return -1;
    };
    // Ugly Number III (M)
    // Kth Smallest Subarray Sum  (M)
    // Find the Longest Valid Obstacle Course at Each Position (H)
}