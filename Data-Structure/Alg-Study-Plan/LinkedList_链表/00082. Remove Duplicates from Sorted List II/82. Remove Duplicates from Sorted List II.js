//82. Remove Duplicates from Sorted List II
/*
Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

Example 1:

Input: head = [1,2,3,3,4,4,5]
Output: [1,2,5]
*/
var deleteDuplicates = function (head) {
    if (head === null || head.next === null) return head;

    let dummy = new ListNode();
    dummy.next = head;

    let pre = dummy;
    let curr = head;

    while (curr) {
        if (curr.next && curr.val === curr.next.val) {
            let value = curr.val;
            while (curr && curr.val === value) {
                curr = curr.next;
            }
            pre.next = curr; // important
        } else {
            pre = pre.next;
            curr = curr.next;
        }
    }
    return dummy.next;
};