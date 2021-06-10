//1004. Max Consecutive Ones III
/*
Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

Example 1:

Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
Example 2:

Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
Output: 10
Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.

/
//本题是求最大连续子区间，可以使用滑动窗口方法

代码思路：

使用 left 和 right 两个指针，分别指向滑动窗口的左右边界。
right 主动右移：right 指针每次移动一步。当 A[right] 为 0，说明滑动窗口内增加了一个 0；
left 被动右移：判断此时窗口内 0 的个数，如果超过了 K，则 left 指针被迫右移，直至窗口内的 0 的个数小于等于 K 为止。
滑动窗口长度的最大值就是所求

作者：fuxuemingzhu
链接：https://leetcode-cn.com/problems/max-consecutive-ones-iii/solution/fen-xiang-hua-dong-chuang-kou-mo-ban-mia-f76z/

*/
class Solution {
    public int longestOnes(int[] nums, int k) {
        int len = nums.length;
        int res = 0;
        int left = 0;
        int right = 0;
        int zeros = 0;

        while (right < len) {

            if (nums[right] == 0) {
                zeros++;
            }

            while (zeros > k) {
                if (nums[left++] == 0)
                    zeros--;
            }

            res = Math.max(res, right - left + 1);
            right++;
        }
        return res;
    }
}
// Longest Repeating Character Replacement
// Max Consecutive Ones
// Max Consecutive Ones II