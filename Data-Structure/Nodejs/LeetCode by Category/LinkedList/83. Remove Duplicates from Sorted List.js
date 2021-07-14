//83. Remove Duplicates from Sorted List
/*
Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

Input: head = [1,1,2] Output: [1,2]
Input: head = [1,1,2,3,3] Output: [1,2,3]
*/
{
    //recursive
    var deleteDuplicates = function (head) {

        if (head === null || head.next === null) return head;

        let res = deleteDuplicates(head.next);

        if (head.val === head.next.val) {
            head = res;
        } else {
            head.next = res;
        }

        return head;
    };
    //Remove Duplicates from Sorted List II
    //Remove Duplicates From an Unsorted Linked List
}
{
    var deleteDuplicates = function (head) {

        if (head === null || head.next === null) return head;

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
{
    var deleteDuplicates = function (head, curr = head) {

        if (head === null || head.next === null) return head;
        
        if (!curr || !curr.next) return head;

        if (curr.val === curr.next.val) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
        }
        return deleteDuplicates(head, curr);
    };
    //Remove Duplicates from Sorted List II
    //Remove Duplicates From an Unsorted Linked List
}