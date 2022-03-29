// 详细题解：双指针技巧秒杀七道数组题目
// https://mp.weixin.qq.com/s/Z-oYzx9O1pjiym6HtKqGIQ
/*
基本思路
类似 26. 删除有序数组中的重复项，需要使用 双指针技巧 中的快慢指针：

如果 fast 遇到需要去除的元素，则直接跳过，否则就告诉 slow 指针，并让 slow 前进一步。

详细题解：双指针技巧秒杀七道数组题目

标签：数组双指针，数组

解法代码
*/
class Solution {
    public int removeElement(int[] nums, int val) {
        int fast = 0, slow = 0;
        while (fast < nums.length) {
            if (nums[fast] != val) {
                nums[slow] = nums[fast];
                slow++;
            }
            fast++;
        }
        return slow;
    }
}
/*
 * 类似题目：
 * 
 * 26. 删除有序数组中的重复项（简单）
 * 83. 删除排序链表中的重复元素（简单）
 * 283. 移动零（简单）
 */