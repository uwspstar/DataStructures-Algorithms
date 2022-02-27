// 25. Reverse Nodes in k-Group
{
    // recursive
    
    const reverse = (a, b) => {
        let pre = null, cur = a, nxt = a;
        // while 终止的条件改一下就行了
        while (cur != b) {
            nxt = cur.next;
            cur.next = pre;
            pre = cur;
            cur = nxt;
        }
        return pre;// 返回反转后的头结点
    }

    const reverseKGroup = (head, k) => {
        if (head == null) return null;
        let a = head, b = head;
        // 区间 [a, b) 包含 k 个待反转元素

        for (let i = 0; i < k; i++) {
            // 不足 k 个，不需要反转，base case
            if (b == null) return head;
            b = b.next;
        }
        // 反转前 k 个元素
        let newHead = reverse(a, b);
        // 递归反转后续链表并连接起来
        a.next = reverseKGroup(b, k);

        return newHead;
    }

}
{
    const myReverse = (head, tail) => {
        let prev = tail.next;
        let p = head;
        while (prev !== tail) {
            const nex = p.next;
            p.next = prev;
            prev = p;
            p = nex;
        }
        return [tail, head];
    }
    var reverseKGroup = function (head, k) {
        //head 前面是 hair，笑死了
        const hair = new ListNode(0);
        hair.next = head;
        let pre = hair;

        while (head) {
            let tail = pre;
            // 查看剩余部分长度是否大于等于 k
            for (let i = 0; i < k; ++i) {
                tail = tail.next;
                if (!tail) {
                    return hair.next;
                }
            }
            const nex = tail.next;
            [head, tail] = myReverse(head, tail);
            // 把子链表重新接回原链表
            pre.next = head;
            tail.next = nex;
            pre = tail;
            head = tail.next;
        }
        return hair.next;
    };

}
{
    const reverseKG = (head, k) => {
        let curr = head;
        let pre = null;
        let next = null;
        for (let i = 0; i < k; i++) {
            next = curr.next;
            curr.next = pre;
            pre = curr;
            curr = next;
        }
        head = pre;
        return head;

    }
    var reverseKGroup = function (head, k) {
        if (head === null || k === 1) return head;

        let dummy = new ListNode(0)
        dummy.next = head;
        let pre = dummy;
        let curr = head;

        while (curr) {
            let currHead = curr;
            let count = 0;

            while (curr && count < k) {
                curr = curr.next;
                count++;
            }

            if (count === k) {
                pre.next = reverseKG(currHead, k);
                pre = currHead;// after reverse, currHead is end
            } else {
                pre.next = currHead;
            }
        }

        return dummy.next;
    }
}
{
    //recursion

}