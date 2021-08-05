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
    //翻转链表(递归方式) 
    const reverse = head => {
        if (head.next === null || head === null) return head;

        let reverseNode = reverse(head.next);
        head.next.next = head;
        head.next = null;

        return reverseNode;
    }
}
{
    const reverse = (head, cur = head, pre = null, next = null) => {
        if (head === null || head.next === null) return head;
        if (cur === null) return head;

        next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;

        return reverse(head, cur, pre, next);
    }
}