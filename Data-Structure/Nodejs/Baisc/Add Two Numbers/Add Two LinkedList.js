//2. Add Two Numbers
/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let dummy = new ListNode(0);
    let p = dummy;
    let p1 = l1;
    let p2 = l2;
    let carry = 0;
    while (p1 || p2) {
        let sum = carry;
        sum += p1 ? p1.val : 0;
        sum += p2 ? p2.val : 0;
        carry = parseInt(sum / 10);
        p.next = new ListNode(sum % 10);
        p = p.next;

        p1 ? p1 = p1.next : {};
        p2 ? p2 = p2.next : {};
    }
    if (carry > 0) p.next = new ListNode(carry) // do not forget this one
    return dummy.next;
};

/*
Sum of Two Integers
Add Two Numbers II
Add to Array-Form of Integer
Add Two Polynomials Represented as Linked Lists
*/