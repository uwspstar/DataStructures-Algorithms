/*
Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.


对于链表找环路的问题，有一个通用的解法——快慢指针(Floyd 判圈法)。给定两个指针， 分别命名为 slow 和 fast，起始位置在链表的开头。每次 fast 前进两步，slow 前进一步。如果 fast 可以走到尽头，那么说明没有环路;如果 fast 可以无限走下去，那么说明一定有环路，且一定存 在一个时刻 slow 和 fast 相遇。当 slow 和 fast 第一次相遇时，我们将 fast 重新移动到链表开头，并 让 slow 和 fast 每次都前进一步。当 slow 和 fast 第二次相遇时，相遇的节点即为环路的开始点。


*/
{
    var detectCycle = function (head) {
        if (head === null) return head;
        let fast = head;
        let slow = head;

        while (fast && fast.next) {
            fast = fast.next.next; // move 2 steps
            slow = slow.next;

            if (slow === fast) {
                let curr = head;
                while (curr !== fast) {
                    curr = curr.next;
                    fast = fast.next; // move 1 step
                }
                return curr;
            }
        }
        return null;
    };
}