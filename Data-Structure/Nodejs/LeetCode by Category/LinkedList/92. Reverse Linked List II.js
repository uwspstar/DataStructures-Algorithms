//92. Reverse Linked List II
/*
Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

Example 1: Input: head = [1,2,3,4,5], left = 2, right = 4 Output: [1,4,3,2,5]
Example 2: Input: head = [5], left = 1, right = 1 Output: [5]
*/
{
    var reverseBetween = function (head, m, n) {

        if (m === n) return head;
        
        let start = head;
        let cur = head;
        let i = 1;
        while (i < m) {
            start = cur;
            cur = cur.next;
            i++;
        }

        let prev = null;
        let tail = cur;

        while (i <= n) {
            let next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
            i++;
        }
        start.next = prev;
        tail.next = cur;
        return m === 1 ? prev : head;
    };
    
    //Swap Nodes in Pairs
    //Remove Zero Sum Consecutive Nodes from Linked List
    //Remove Duplicates From an Unsorted Linked List
}