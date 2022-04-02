/*
基本思路
PS：这道题在《算法小抄》 的第 64 页。

经典题目了，要使用双指针技巧中的快慢指针，每当慢指针 slow 前进一步，快指针 fast 就前进两步。

如果 fast 最终遇到空指针，说明链表中没有环；如果 fast 最终和 slow 相遇，那肯定是 fast 超过了 slow 一圈，说明链表中含有环。

详细题解：单链表的六大解题套路，你都见过么？

标签：数据结构，链表，链表双指针

解法代码
*/

public class Solution {
    public boolean hasCycle(ListNode head) {
        // 快慢指针初始化指向 head
        ListNode slow = head, fast = head;
        // 快指针走到末尾时停止
        while (fast != null && fast.next != null) {
            // 慢指针走一步，快指针走两步
            slow = slow.next;
            fast = fast.next.next;
            // 快慢指针相遇，说明含有环
            if (slow == fast) {
                return true;
            }
        }
        // 不包含环
        return false;
    }
}
/*
 * 类似题目：
 * 
 * 21. 合并两个有序链表（简单）
 * 23. 合并 K 个升序链表（困难）
 * 142. 环形链表 II（中等）
 * 876. 链表的中间结点（简单）
 * 160. 相交链表（简单）
 * 19. 删除链表的倒数第 N 个结点（中等）
 */