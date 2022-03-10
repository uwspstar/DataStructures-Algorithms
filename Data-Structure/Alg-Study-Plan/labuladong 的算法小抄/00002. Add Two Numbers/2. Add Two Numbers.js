/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

Example 1:


Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
*/
{
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
}
/*
Multiply Strings Medium
Add Binary Easy
Sum of Two Integers Medium
Add Strings Easy
Add Two Numbers II Medium
Add to Array-Form of Integer Easy
Add Two Polynomials Represented as Linked Lists Medium
*/