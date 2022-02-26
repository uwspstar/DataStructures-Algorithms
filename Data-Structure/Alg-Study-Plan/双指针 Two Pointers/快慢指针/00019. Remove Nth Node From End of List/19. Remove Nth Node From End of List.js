// 19. Remove Nth Node From End of List
var removeNthFromEnd = function (head, k) {
    if (head === null) return null;
    let fast = head;
    while (k > 0 && fast) {
        fast = fast.next;
        k--;
    }
    if (k > 0) return null;
    let pre = null;
    let slow = head;
    while (fast) {
        pre = slow;
        slow = slow.next;
        fast = fast.next;
    }

    if (!pre) return slow.next; // remove first one;

    pre.next = slow.next;

    return head;
}