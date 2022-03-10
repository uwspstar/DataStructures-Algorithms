//61. Rotate List
/*
Given the head of a linked list, rotate the list to the right by k places
*/
{
    var rotateRight = function (head, k) {
        if (head == null || head.next === null) return head;
        if (k === 0) return head;

        let curr = head;
        let len = 0;
        while (curr) {
            curr = curr.next;
            len++;
        }

        k = k % len; // need mod
        if (k === 0) return head; // if k == n * len,

        curr = head;
        for (let i = 0; i < len - k - 1; i++) { // pre = len - k - 1
            curr = curr.next;
        }

        let dummyHead = curr.next;
        let p = dummyHead;

        curr.next = null;

        while (p.next) {
            p = p.next;
        }
        p.next = head;
        return dummyHead;
    }
}

/*
Number of Subarrays with Bounded Maximum
Number of Ways Where Square of Number Is Equal to Product of Two Numbers
Next Palindrome Using Same Digits
*/