//21. Merge Two Sorted Lists
/*
Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

Input: l1 = [1,2,4], l2 = [1,3,4] Output: [1,1,2,3,4,4]
Input: l1 = [], l2 = [] Output: []
Input: l1 = [], l2 = [0] Output: [0]
*/
{
    var mergeTwoLists = function (l1, l2) {
        let dummy = new ListNode(0);
        let p = dummy;
        while (l1 && l2) {
            if (l1.val <= l2.val) {
                p.next = l1;
                l1 = l1.next
            } else {
                p.next = l2;
                l2 = l2.next
            }
            p = p.next;
        }
        p.next = l1 ? l1 : l2
        return dummy.next;
    };

}