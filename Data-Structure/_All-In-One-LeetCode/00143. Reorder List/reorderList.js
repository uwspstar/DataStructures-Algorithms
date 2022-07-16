class ListNode {
    constructor(val) {
        this.value = val;
        this.next = next;
    }
}

const reverse = head =>  {
    if (head === null || head.next === null) {
        return head
    }    

    let curr = head;
    let pre = null;
    let nxt = null;

    while (curr) {
        nxt = curr.next;
        curr.next = pre;
        pre = curr;
        curr = nxt
    }

    return pre;
}

const merge = (l1, l2) => {

    let dummy = new ListNode(-1);

    let p = dummy;

    while (l1 && l2) {
        let tmp1 = l1.next
        let tmp2 = l2.next

        p.next = l1; 
        p = p.next;
        p.next = l2;
        p = p.next;

        l1 = tmp1;
        l2 = tmp2;
    }

    if (l1) p.next = l1;
    if (l2) p.next = l2;

    return dummy.next

}

const reorderList = head => {
    if (head === null || head.next === null) {
        return head
    }

    let slow = head
    let fast  = head

    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
    }

    let second = slow.next;
    slow.next = null;

    second = reverse(second);
    
    first = head; 

    return merge(first, second)
}