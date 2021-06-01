//203. Remove Linked List Elements
/*
Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

Input: head = [1,2,6,3,4,5,6], val = 6 Output: [1,2,3,4,5]
Input: head = [], val = 1 Output: []
Input: head = [7,7,7,7], val = 7 Output: []
*/

//iterative
class Solution {
    public ListNode removeElements(ListNode head, int val) {
        ListNode dummy = new ListNode(0);
        dummy.next = head;

        ListNode prev = dummy;
        ListNode curr = head;

        while (curr != null) {
            if (curr.val == val)
                prev.next = curr.next;
            else
                prev = curr;
            curr = curr.next;
        }
        return dummy.next;
    }
}

// Convert Sorted List to Binary Search Tree
// Design Linked List
// Delete N Nodes After M Nodes of a Linked List

// recursive
class Solution {
    public ListNode removeElements(ListNode head, int val) {
        if (head == null)
            return head;
        ListNode res = removeElements(head.next, val);
        if (head.val == val) {
            return res;
        } else {
            head.next = res;
            return head;
        }
    }
}