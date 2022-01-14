//83. Remove Duplicates from *** Sorted linked List
/*
Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

Input: head = [1,1,2] Output: [1,2]
Input: head = [1,1,2,3,3] Output: [1,2,3]
*/
{
    // t : O(n)
    // s : O(1)
    var deleteDuplicates = function (head) {

        if (head === null) return null;
        let current = head;

        while (current && current.next) {
            if (current.val === current.next.val) {
                current.next = current.next.next;
            } else current = current.next;
        }
        return head;
    };
    //Remove Duplicates from Sorted List II
    //Remove Duplicates From an Unsorted Linked List
}

{   // recursive way
    //linked list always have recursive way
    //O(N)
    const deleteDuplicates = head => {
        if (head == null || head.next == null) return head;

        let res = deleteDuplicates(head.next);

        if (head.val == head.next.val) {
            head = res;
        } else {
            head.next = res;
        }
        return head;
    }
}