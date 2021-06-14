// /61. Rotate List
/*
Given the head of a linked list, rotate the list to the right by k places.

Input: head = [1,2,3,4,5], k = 2 Output: [4,5,1,2,3] 
Input: head = [0,1,2], k = 4 Output: [2,0,1]
*/
{
    var rotateRight = function (head, k) {
        if (head === null) return head;

        let len = lengthOfLL(head); //get linklist length

        k = k % len;

        if (k === 0) {
            return head;
        } 
        
        head = reverseLL(head, null); // Reverse the entire list
        
        let tail1 = head;// Find the tail of first k-node list

        for (let i = 0; i < k; i++) {
            tail1 = tail1.next;
        }
        let head1 = reverseLL(head, tail1);// Reverse the first k-node list
        
        let head2 = reverseLL(tail1, null);// Reverse the remaining list
        
        let cur = head1;// Chain two lists

        while (cur.next !== null) {
            cur = cur.next;
        }
        cur.next = head2;

        return head1;
    };

    const reverseLL = (head, tail) => {
        let prev = null;
        let cur = head;
        while (cur !== tail) {
            let next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }
        return prev;
    }

    const lengthOfLL = (head) => {
        let count = 0;
        let cur = head;
        while (cur !== null) {
            cur = cur.next;
            count++;
        }
        return count;
    }
    
}