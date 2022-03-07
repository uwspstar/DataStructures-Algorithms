// 21. Merge Two Sorted Lists

// think about the merge sort

var mergeTwoLists = function (l1, l2) {
    let dummy = new ListNode(0); // same as the merge sort new res = [];

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

    p.next = l1 ? l1 : l2;

    return dummy.next; // p start with dummy
};