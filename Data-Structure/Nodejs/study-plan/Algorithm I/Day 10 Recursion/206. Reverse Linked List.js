var reverseList = function(head) {
    if (head === null) return null;
    let current = head;
    let pre = null;
    let next = null
    while (current) {
        next = current.next;
        current.next = pre;
        pre = current;
        current = next;
    }
    head = pre;
    return head;
};