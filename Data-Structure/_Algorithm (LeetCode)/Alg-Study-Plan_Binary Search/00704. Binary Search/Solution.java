/*
基本思路
PS：这道题在《算法小抄》 的第 71 页。

二分搜索的基本形式，不过并不实用，比如 target 重复出现多次，本算法得出的索引位置是不确定的。

更常见的二分搜索形式是搜索左侧边界和右侧边界，即对于 target 重复出现多次的情景，计算 target 的最小索引和最大索引。

这几种二分搜索的形式的详细探讨见详细题解。

详细题解：我作了首诗，保你闭着眼睛也能写对二分查找

标签：二分搜索

解法代码
*/
class Solution {
    public int search(int[] nums, int target) {
        int left = 0;
        int right = nums.length - 1; // 注意
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (nums[mid] == target)
                return mid;
            else if (nums[mid] < target)
                left = mid + 1; // 注意
            else if (nums[mid] > target)
                right = mid - 1; // 注意
        }
        return -1;
    }
}
/*
 * 类似题目：
 * 
 * 34. 在排序数组中查找元素的第一个和最后一个位置（中等）
 */
