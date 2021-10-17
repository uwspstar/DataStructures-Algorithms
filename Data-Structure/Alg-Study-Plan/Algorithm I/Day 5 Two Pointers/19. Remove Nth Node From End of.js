// 19. Remove Nth Node From End of List
// https://leetcode.com/problems/remove-nth-node-from-end-of-list/submissions/
{
    // Time Complexity: O(N)
    // Space Complexity: O(1)
    var removeNthFromEnd = function (head, n) {
        if (head === null) return head;

        let fast = head;
        let slow = head;

        while (n > 0 && fast) {
            fast = fast.next;
            n--;
        }
        
        if (n > 0) return null;

        let pre = null; // **** has to be null

        while (fast) {
            pre = slow;
            slow = slow.next;
            fast = fast.next;
        }
        // Now, cur points to the n-th node from the end and prev points to the previous node
        if (pre === null) return slow.next; // **** this is when head node is the node to be deleted

        pre.next = slow.next;

        return head;
    };
}