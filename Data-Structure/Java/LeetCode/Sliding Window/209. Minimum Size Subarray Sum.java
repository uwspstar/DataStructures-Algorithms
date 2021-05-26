//209. Minimum Size Subarray Sum
/*
Given an array of positive integers nums and a positive integer target, return the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr] of which the sum is greater than or equal to target. If there is no such subarray, return 0 instead.



Example 1: Input: target = 7, nums = [2,3,1,2,4,3] Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.
Example 2: Input: target = 4, nums = [1,4,4] Output: 1
Example 3: Input: target = 11, nums = [1,1,1,1,1,1,1,1] Output: 0
*/
//slide window
class Solution {

    // 滑动窗口
    public int minSubArrayLen(int s, int[] nums) {
        int left = 0;
        int sum = 0;
        int result = Integer.MAX_VALUE;
        for (int right = 0; right < nums.length; right++) {
            sum += nums[right];
            while (sum >= s) {
                result = Math.min(result, right - left + 1);
                sum -= nums[left++];
            }
        }
        return result == Integer.MAX_VALUE ? 0 : result;
    }
}
class Solution {
    public int minSubArrayLen(int s, int[] nums) {
        if (nums == null || nums.length == 0) {
            return 0;
        }

        int lo = 0;
        int hi = 0;
        int sum = 0;

        int min = Integer.MAX_VALUE;

        while (hi < nums.length) {
            sum += nums[hi];
            if (sum >= s) {
                while (lo <= hi && sum - nums[lo] >= s) {
                    sum -= nums[lo];
                    lo++;
                }
                min = Math.min(min, hi - lo + 1);
            }
            hi++;
        }
        return min != Integer.MAX_VALUE ? min : 0;
    }
}
// Maximum Length of Repeated Subarray
// Minimum Operations to Reduce X to Zero