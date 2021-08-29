//206. Reverse Linked List
/*
Given the head of a singly linked list, reverse the list, and return the reversed list.

Input: head = [1,2,3,4,5] Output: [5,4,3,2,1]
Input: head = [1,2] Output: [2,1]
Input: head = [] Output: []
*/
{
    var reverseList = function (head) {
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
}
{
    var reverseList = function (head) {
        if (!head || !head.next) return head;
        // 5->4->3->2->1 
        let p = reverseList(head.next);
        head.next.next = head;
        head.next = null;
        return p;
    };
}
{
    class ListNode {
        constructor(val) {
            this.val = val;
            this.next = null;
        }
    }
    {
        //翻转链表(递归方式) 
        const reverse = head => {
            if (head.next === null || head === null) return head;

            let reverseNode = reverse(head.next);
            // after revise head.next, we have two node, head and reverseNode
            // head.next is reverseNode; and we wan the reverseNode.next is head;
            // reverseNode -> head;
            // reverseNode.next = head;
            // head.next.next is head;
            head.next.next = head;
            //reverseNode -> head -> null;
            head.next = null;

            return reverseNode;
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
            head = pre; // pre is new head now;

            return head;
        }
    }
    {
        //翻转链表(递归方式) from while loop, not recommend,
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
}