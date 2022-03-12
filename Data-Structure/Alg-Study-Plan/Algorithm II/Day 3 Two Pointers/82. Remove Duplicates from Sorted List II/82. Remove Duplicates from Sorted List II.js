//82. Remove Duplicates from Sorted List II
{
    var deleteDuplicates = function (head) {
        if (head === null || head.next === null) return head;

        let dummy = new ListNode();
        dummy.next = head;

        let pre = dummy;
        let curr = head;

        while (curr) {
            if (curr.next && curr.val === curr.next.val) {
                let value = curr.val;
                while (curr && curr.val === value) {
                    curr = curr.next;
                }
                pre.next = curr;
            } else {
                pre = pre.next;
                curr = curr.next;
            }
        }
        return dummy.next;
    };
    //1836. Remove Duplicates From an Unsorted Linked List
}