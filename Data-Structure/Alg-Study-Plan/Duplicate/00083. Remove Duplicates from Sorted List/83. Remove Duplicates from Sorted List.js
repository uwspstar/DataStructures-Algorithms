// 83. Remove Duplicates from Sorted List
/*
Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.
*/
{
    var deleteDuplicates = function (head) {
        if (head === null || head.next === null) return head;
        let slow = head;
        let fast = head;
        while (fast !== null) {
            if (slow.val !== fast.val) {
                slow.next = fast;

                slow = slow.next;
            }
            fast = fast.next;

        }
        // 断开与后面重复元素的连接 important !!!
        slow.next = null;
        return head;
    }
}