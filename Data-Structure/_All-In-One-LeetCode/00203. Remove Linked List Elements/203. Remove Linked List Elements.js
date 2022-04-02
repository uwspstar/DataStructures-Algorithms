//203. Remove Linked List Elements

var removeElements = function (head, val) {
    if (head === null) return head;
    let res = removeElements(head.next, val);
    if (head.val === val) {
        return res;
    } else {
        head.next = res;
        return head;
    }
}