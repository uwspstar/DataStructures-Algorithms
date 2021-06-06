//143. Reorder List
/*
You are given the head of a singly linked-list. The list can be represented as:

L0 → L1 → … → Ln - 1 → Ln
Reorder the list to be on the following form:

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
You may not modify the values in the list's nodes. Only nodes themselves may be changed.
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
 var reorderList = function(head) { 
    if (head === null || head.next === null || head.next.next === null) return head;
    
    let dummy = new ListNode(0);
    let p = dummy;
    let p1 = head;
    
    let fast = head;
    let slow = head;
    let preSlow = head;
    
    // find middle
    while (fast && fast.next) {
        fast = fast.next.next;
        preSlow = slow;
        slow = slow.next;
    }
    
    let p2 = slow;
    let curr = slow;
    let pre = null;
    let next = null;

    // reverse
    while (curr) {
        next = curr.next;
        curr.next = pre;
        pre = curr;
        curr = next
    } 
    p2 = pre; 
    
    preSlow.next  = null;
    
    // merge
    while (p1 && p2) {
        p.next = p1;
        p1 = p1.next;
        p = p.next;
        
        p.next = p2;
        p2 = p2.next;
        p = p.next;
    }
    
    return dummy.next;
    
};

/*
Convert Sorted List to Binary Search Tree
Swapping Nodes in a Linked List
Convert Binary Number in a Linked List to Integer
*/