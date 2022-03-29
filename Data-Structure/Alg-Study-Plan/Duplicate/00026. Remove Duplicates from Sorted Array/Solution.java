// 详细题解：双指针技巧秒杀七道数组题目
// https://mp.weixin.qq.com/s/Z-oYzx9O1pjiym6HtKqGIQ
/*
基本思路
PS：这道题在《算法小抄》 的第 371 页。

有序序列去重的通用解法就是我们前文 双指针技巧 中的快慢指针技巧。

我们让慢指针 slow 走在后面，快指针 fast 走在前面探路，找到一个不重复的元素就告诉 slow 并让 slow 前进一步。这样当 fast 指针遍历完整个数组 nums 后，**nums[0..slow] 就是不重复元素**。

详细题解：双指针技巧秒杀七道数组题目

标签：数组，数组双指针

解法代码
*/
class Solution {
    public int removeDuplicates(int[] nums) {
        if (nums.length == 0) {
            return 0;
        }
        int slow = 0, fast = 0;
        while (fast < nums.length) {
            if (nums[fast] != nums[slow]) {
                slow++;
                // 维护 nums[0..slow] 无重复
                nums[slow] = nums[fast];
            }
            fast++;
        }
        // 数组长度为索引 + 1
        return slow + 1;
    }
}
/*
 * 类似题目：
 * 
 * 83. 删除排序链表中的重复元素（简单）
 * 27. 移除元素（简单）
 * 283. 移动零（简单）
 */