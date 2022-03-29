// 详细题解：双指针技巧秒杀七道数组题目
// https://mp.weixin.qq.com/s/Z-oYzx9O1pjiym6HtKqGIQ

/*
基本思路
PS：这道题在《算法小抄》 的第 371 页。

思路和 26. 删除有序数组中的重复项 完全一样，唯一的区别是把数组赋值操作变成操作指针而已。

详细题解：双指针技巧秒杀七道数组题目

标签：链表，链表双指针

解法代码
*/
class Solution {
    public deleteDuplicates(ListNode head) {
        if (head == null) return null;
        ListNode slow = head, fast = head;
        while (fast != null) {
            if (fast.val != slow.val) {
                // nums[slow] = nums[fast];
                slow.next = fast;
                // slow++;
                slow = slow.next;
            }
            // fast++
            fast = fast.next;
        }
        // 断开与后面重复元素的连接
        slow.next = null;
        return head;
    }
}
/*
 * 类似题目：
 * 
 * 26. 删除有序数组中的重复项（简单）
 * 27. 移除元素（简单）
 * 283. 移动零（简单）
 */