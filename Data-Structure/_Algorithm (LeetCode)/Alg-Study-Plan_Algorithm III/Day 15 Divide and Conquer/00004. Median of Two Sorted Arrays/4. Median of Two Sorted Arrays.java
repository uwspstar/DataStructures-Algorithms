// 4. Median of Two Sorted Arrays
/*
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

 

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
*/
{
    //The overall run time complexity should be O(log (m+n)).
    //对时间复杂度的要求有 log，通常都需要用到二分查找，这道题也可以通过二分查找实现。
    //根据中位数的定义，当 m+n 是奇数时，中位数是两个有序数组中的第 (m+n)/2 个元素，
    //当 m+n 是偶数时，中位数是两个有序数组中的第 (m+n)/2 个元素和第 (m+n)/2+1 个元素的平均值。
    //因此，这道题可以转化成寻找两个有序数组中的第 k 小的数，其中 k 为 (m+n)/2 或 (m+n)/2+1。
    //因为两个数组本别是有序数组，因此，我们只需要判定交叉的关系中，是否满足左边依然小于等于右边即可，即
    //第 1 个数组分割线左边的第 1 个数小于等于第 2 个数组分割线右边的第 1 的数；
    //第 2 个数组分割线左边的第 1 个数小于等于第 1 个数组分割线右边的第 1 的数

    public class Solution {

        public double findMedianSortedArrays(int[] nums1, int[] nums2) {
            if (nums1.length > nums2.length) {
                int[] temp = nums1;
                nums1 = nums2;
                nums2 = temp;
            }

        int m = nums1.length;
        int n = nums2.length;

        // 分割线左边的所有元素需要满足的个数 m + (n - m + 1) / 2;
        int totalLeft = (m + n + 1) / 2;

        // 在 nums1 的区间 [0, m] 里查找恰当的分割线，
        // 使得 nums1[i - 1] <= nums2[j] && nums2[j - 1] <= nums1[i]
        int left = 0;
        int right = m;

            while (left < right) {
            int i = left + (right - left + 1) / 2;
            int j = totalLeft - i;
                if (nums1[i - 1] > nums2[j]) {
                    // 下一轮搜索的区间 [left, i - 1]
                    right = i - 1;
                } else {
                    // 下一轮搜索的区间 [i, right]
                    left = i;
                }
            }

        int i = left;
        int j = totalLeft - i;

        int nums1LeftMax = i == 0 ? Integer.MIN_VALUE : nums1[i - 1];
        int nums1RightMin = i == m ? Integer.MAX_VALUE : nums1[i];
        int nums2LeftMax = j == 0 ? Integer.MIN_VALUE : nums2[j - 1];
        int nums2RightMin = j == n ? Integer.MAX_VALUE : nums2[j];

            if (((m + n) % 2) == 1) {
                return Math.max(nums1LeftMax, nums2LeftMax);
            } else {
                return (double)((Math.max(nums1LeftMax, nums2LeftMax) + Math.min(nums1RightMin, nums2RightMin))) / 2;
            }
        }
    }

    // Number of Ways to Reorder Array to Get Same BST (H)
    // Simple Bank System (M)
    // Find All Lonely Numbers in the Array (M)
}