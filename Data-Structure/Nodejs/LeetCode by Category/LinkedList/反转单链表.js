class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
{
    const reverse = head => {
        if (head === null || head.next === null) return head;
        let cur = head;
        let pre = null;
        let next = null;
        while (cur !== null) {
            next = cur.next;
            cur.next = pre;
            pre = cur;
            cur = next;
        }
        head = pre;
        return head;
    }
}
{
    const reverse = (head, cur, pre, next) => {
        if (head === null || head.next === null) return head;
        if (cur === null) return head;

        next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
        
        return reverse(head, cur, pre, next)
    }
}