//61. Rotate List
/*
Given the head of a linked list, rotate the list to the right by k places.

Input: head = [1,2,3,4,5], k = 2 Output: [4,5,1,2,3]

Input: head = [0,1,2], k = 4 Output: [2,0,1]
*/
{
    var rotateRight = function (head, k) {
        if (head === null||head.next === null) return head;

        let len = 0;
        let curr = head;

        while (curr) {
            curr = curr.next;
            len++;
        }

        k = k % len;

        if (k === 0) return head;

        let fast = head;
        let slow = head;
        let pre = null;
        let last = null;

        while (fast && k > 0) {
            last = fast;
            fast = fast.next;
            k--;
        }

        while (fast) {
            last = fast;
            pre = slow;
            fast = fast.next;
            slow = slow.next;
        }

        pre.next = null;
        last.next = head;
        
        return slow;
    };
    //Split Linked List in Parts
}