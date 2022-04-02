// 206. Reverse Linked List
{
    var reverseList = function (head) {
        if (head === null || head.next === null) return head;

        let pre = null;
        let next = null;
        let curr = head;

        while (curr) {
            next = curr.next;
            curr.next = pre;
            pre = curr;
            curr = next;
        }

        head = pre;
        return head;
    }
}