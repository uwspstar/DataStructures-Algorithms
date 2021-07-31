class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

//search, insert, delete
{
    const searchNode = (head, key) => {
        let cur = head;
        while (cur && cur.val != key) {
            cur = curr.next;
        }
        return cur;
    }
}
{
    const insertAfter = (node, newNode) => {
        newNode.next = node.next;
        node.next = newNode;
    }
}
{
    const deleteList = node => {
        node.next = node.next.next;
    }
}
{
    //MERGE TWO SORTED LISTS
    //Consider two singly linked lists in which each node holds a number. Assume the lists are sorted
    //Hint: Two sorted arrays can be merged using two indices. For lists, take care when one iterator reaches the end.

    //21. Merge Two Sorted Lists
    {
        var mergeTwoLists = function (l1, l2) {
            let dummy = new ListNode(0);//Creates a placeholder for the result
            let p = dummy;
            while (l1 && l2) {
                if (l1.val <= l2.val) {
                    p.next = l1;
                    l1 = l1.next
                } else {
                    p.next = l2;
                    l2 = l2.next
                }
                p = p.next;
            }
            p.next = l1 ? l1 : l2
            return dummy.next;
        };

    }
    const mergeTwoSortedLists = (l1, l2) => {
        if (l1 === null) return l2;
        if (l2 === null) return l1;

        let dummy = new ListNode(0)
        let l = dummy;
        let p1 = l1; // not change original list
        let p2 = l2;
        while (p1 && p2) {
            if (p1.val < p2.val) {
                l.next = p1;
                p1 = p1.next;
            } else {
                l.next = p2;
                p2 = p2.next;
            }
            l = l.next;
        }
        if (p1) {
            l.next = p1;
        }
        if (p2) {
            l.next = p2;
        }
        return dummy.next;;
    }
}


