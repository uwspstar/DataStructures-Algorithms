//328. Odd Even Linked List
/*
Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

The first node is considered odd, and the second node is even, and so on.

Note that the relative order inside both the even and odd groups should remain as it was in the input.

You must solve the problem in O(1) extra space complexity and O(n) time complexity.

Input: head = [1,2,3,4,5] Output: [1,3,5,2,4]
Input: head = [2,1,3,5,6,4,7] Output: [2,3,6,7,1,5,4]
*/
{
    var oddEvenList = function (head) {
        if (head === null) return head;
        let dummyEven = new ListNode(0);
        let dummyOdd = new ListNode(0);
        let count = 1;

        let curr = head;
        let p2 = dummyEven;
        let p1 = dummyOdd;

        while (curr) {
            if (count % 2 === 0) {
                p2.next = curr;
                p2 = p2.next;
            } else {
                p1.next = curr;
                p1 = p1.next;
            }
            curr = curr.next;
            count++;
        }
        p2.next = null;
        p1.next = dummyEven.next;

        return dummyOdd.next;
    };
    //Split Linked List in Parts
}
{
    var oddEvenList = function (head) {
        if (head === null) return head;

        let dummyHeadOdd = new ListNode(0);
        let dummyHeadEven = new ListNode(0);

        let curOdd = dummyHeadOdd;
        let curEven = dummyHeadEven;

        let cur = head;
        let idx = 1;

        while (cur !== null) {
            if (idx % 2 === 1) {
                curOdd.next = cur;
                curOdd = curOdd.next;
            } else {
                curEven.next = cur;
                curEven = curEven.next;
            }
            cur = cur.next;
            idx++;
        }

        curEven.next = null;
        curOdd.next = dummyHeadEven.next;

        return dummyHeadOdd.next;
    };
    //Split Linked List in Parts
}