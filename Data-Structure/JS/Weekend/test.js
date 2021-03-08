
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var removeElements = function (head, val) {
    if (head === null) return [];

    let dummy = new ListNode(0);
    dummy.next = head;

    let prev = dummy;
    let curr = head;

    while (curr != null) {
        if (curr.val == val) prev.next = curr.next;
        else prev = curr;
        curr = curr.next;
    }
    return dummy.next;
};
let node = new ListNode(1);

console.log()