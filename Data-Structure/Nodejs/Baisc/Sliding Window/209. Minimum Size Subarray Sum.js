//209. Minimum Size Subarray Sum
/*
Given an array of positive integers nums and a positive integer target, return the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr] of which the sum is greater than or equal to target. If there is no such subarray, return 0 instead.



Example 1: Input: target = 7, nums = [2,3,1,2,4,3] Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.
Example 2: Input: target = 4, nums = [1,4,4] Output: 1
Example 3: Input: target = 11, nums = [1,1,1,1,1,1,1,1] Output: 0
*/
{
    var minSubArrayLen = function (target, nums) {
        if (nums.length === 0) return 0;
        let minLen = nums.length + 1;
        let fast = 0;
        let slow = 0;
        let maxSum = nums[fast];
        while (fast < nums.length) {
            if (maxSum < target) {
                maxSum += nums[++fast];
                continue;
            } else {
                minLen = Math.min(minLen, fast - slow + 1);
                if (minLen === 1) return 1;
                maxSum -= nums[slow++]
            }
        }
        return minLen > nums.length ? 0 : minLen;
    };
}
{
    //不要以为for里放一个while就以为是$O(n^2)$啊， 主要是看每一个元素被操作的次数，每个元素在滑动窗后进来操作一次，出去操作一次，每个元素都是被被操作两次，所以时间复杂度是2 * n 也就是$O(n)
    
    var minSubArrayLen = function (target, nums) {
        // 长度计算一次
        const len = nums.length;
        let l = r = sum = 0,
            res = len + 1; // 子数组最大不会超过自身
        while (r < len) {
            sum += nums[r++];
            // 窗口滑动
            while (sum >= target) {
                // r始终为开区间 [l, r)
                res = res < r - l ? res : r - l;
                sum -= nums[l++];
            }
        }
        return res > len ? 0 : res;
    };
}