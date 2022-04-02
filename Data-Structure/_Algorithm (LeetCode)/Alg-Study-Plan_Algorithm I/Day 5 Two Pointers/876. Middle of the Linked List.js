// 876. Middle of the Linked List 
// https://leetcode.com/problems/middle-of-the-linked-list/submissions/
{
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
    
    const middleNode = head => {
        if (!head) return null;
        let fast = head;
        let slow = head;

        while (fast && fast.next) {
            fast = fast.next.next;
            slow = slow.next;
        }
        return slow;
    };
}