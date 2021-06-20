/*
Given a linked list of integers list, create a function that reverses it in-place without using an additional data structure.

Example 1:
Input: list = 5 -> 3 -> 6 -> 4 -> 7 -> null
Output: 7 -> 4 -> 6 -> 3 -> 5 -> null

Example 2:
Input: list = 1 -> 2 -> 3 -> null Output: 3 -> 2 -> 1 -> null
*/
{
    class Node {
        constructor(val, next = null) {
            this.val = val
            this.next = next;
        }
    }

    const reverseNode = head => {
        if (head === null) return head;
        let curr = head;
        let pre = null;
        let next = null;
        while (curr) {
            next = curr.next;
            curr.next = pre;
            pre = curr;
            curr = next;
        }
        head = pre;
        return head;
    }
}
{
    var reverseList = function (head) {
        if (head === null || head.next === null) return head;
        // 5->4->3->2->1 
        let p = reverseList(head.next);
        head.next.next = head;
        head.next = null;
        return p;
    };
}
{
    var reverseList = function (head) {
        if (head === null) return null;
        let current = head;
        let pre = null;
        let next = null
        while (current) {
            next = current.next;
            current.next = pre;
            pre = current;
            current = next;
        }
        head = pre;
        return head;
    };
}