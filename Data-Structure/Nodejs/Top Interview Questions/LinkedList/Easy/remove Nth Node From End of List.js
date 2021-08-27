//remove Nth Node From End of List
/*
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
*/
{
    const removeNthFromEnd = (head, n) => {
        if (head === null) return head;

        let fast = head;
        let slow = head;


        while (n > 0 && fast) {
            fast = fast.next
            n--;
        }
        if (n > 0) return null;

        let pre = null;
        while (fast) {
            pre = slow;
            fast = fast.next;
            slow = slow.next;
        }

        // ***** Now, cur points to the n-th node from the end and prev points to the previous node
        // **** this is when head node is the node to be deleted, otherwise error with null.next
        if (pre === null) return slow.next;

        pre.next = slow.next;

        return head;
    }
}

{
    var removeNthFromEnd = function (head, n) {
        var stack = [];
        let cur = head;

        if (head.next == null && n == 1) return null;

        do {
            stack.push(cur);
            cur = cur.next;
        } while (cur != null);

        let node;
        for (let i = 0; i <= n; i++) {
            node = stack.pop()
        }

        if (node == null) {
            head = head.next;
        }
        else if (node.next != null) {
            node.next = node.next.next;
        } else {
            node.next = null;
        }
        
        return head;
    };
}