//Reverse Operations
/*
You are given a singly-linked list that contains N integers. A subpart of the list is a contiguous set of even elements, bordered either by either end of the list or an odd element. For example, if the list is [1, 2, 8, 9, 12, 16], the subparts of the list are [2, 8] and [12, 16].
Then, for each subpart, the order of the elements is reversed. In the example, this would result in the new list, [1, 8, 2, 9, 16, 12].
The goal of this question is: given a resulting list, determine the original order of the elements.
Implementation detail:
You must use the following definition for elements in the linked list:
class Node {
    int data;
    Node next;
}
Signature
Node reverse(Node head)
Constraints
1 <= N <= 1000, where N is the size of the list
1 <= Li <= 10^9, where Li is the ith element of the list
Example
Input:
N = 6
list = [1, 2, 8, 9, 12, 16]
Output:
[1, 8, 2, 9, 16, 12]

// Returns the last odd node as new head after reverse.
// 2 -> 4 -> 6 -> 7
// 6 -> 4 -> 2 -> 7

*/
{
    class Node {
        constructor(x) {
            this.data = x;
            this.next = null;
        }
    }
    const reverseEvent = node => {
        let curr = node;
        let pre = null;
        let next = null
        while (curr.next && curr.next.data % 2 === 0) {
            next = curr.next;
            curr.next = pre;
            pre = curr;
            curr = next;
        }
        return pre;
    }
    function reverse(head) {
        if (head === null) return head;
        let dummy = new Node(0);
        dummy.next = head;
        let curr = head;
        let pre = dummy;
        //[1, 2, 8, 9, 12, 16]
        while (curr) {
            if (curr.data % 2 !== 0) {
                pre = curr;
                curr = curr.next;
            } else {
                pre.next = reverseEvent(curr);
            }
        } 
        return dummy.next;
    }
}