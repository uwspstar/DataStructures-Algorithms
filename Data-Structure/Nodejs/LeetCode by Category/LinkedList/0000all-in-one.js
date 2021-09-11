class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
//basic API : search , insert, delete, reverse
{
    const searchNode = (head, key) => {
        let curr = head;
        while (curr && curr.val !== key) {
            curr = curr.next;
        }
        return curr;
    }
}
{
    const inSertAfterNode = (node, newNode) => {
        newNode.next = node.next;
        node.next = newNode;
    }
}
{
    const deleteNextNode = node => {
        node.next = node.next.next;
    }
}
{
    //iteration
    const reverseWholeList = head => {
        if (head === null || head.next === null) return head;
        let curr = head;
        let next = null;
        let pre = null;

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
{
    // recursive
    const reverseWholeList = head => {
        if (head === null || head.next === null) return head;

        //step 1
        let reversList = reverseWholeList(head.next);

        // 把拿到的链表进行反转，然后返回新的头结点
        // after step 1, we have head -> reversList (new head)
        head.next.next = head;
        head.next = null;

        return reversList;

    }
}
{
    //翻转一个 Kth nodes 链表
    const reverseKthNode = (head, k) => {
        let curr = head;
        let next = null;
        let pre = null;

        while (curr && k > 0) {
            next = curr.next;
            curr.next = pre;
            pre = curr;
            curr = next;
            k--;
        }

        head = pre;

        return head;
    }
}
{
    //翻转一个子链表，并且返回新的头与尾,  as a tuple or array
    const reverseHeadTail = (head, tail) => {
        let curr = head;
        let next = null;
        let pre = null;

        while (curr !== tail) { // similar as curr !== null 
            next = curr.next;
            curr.next = pre;
            pre = curr;
            curr = next
        }

        head = pre;
        tail = next;

        return [tail, head]
    }

    const reverseLinkedList = (head, tail) => {
        let cur = head;
        let pre = null;
        let next = null;

        while (cur) {
            next = cur.next;
            cur.next = pre;
            pre = cur;
            cur = next;
        }

        return [tail, head]
    }
}
{
    //Reverse Nodes in k-Group
    //Input: head = [1,2,3,4,5], k = 2 Output: [2,1,4,3,5]
    //Input: head = [1,2,3,4,5], k = 3 Output: [3,2,1,4,5]
    const reverseKth = (head, k) => {
        let curr = head;
        let next = null;
        let pre = null;

        while (curr && k > 0) {
            next = curr.next;
            curr.next = pre;
            pre = curr;
            curr = next;

            k--;
        }

        head = pre;
        return head;

    }
    const reverseKGroup = (head, k) => {
        if (head === null || head.next === null || k === 1) return head;

        let dummy = new ListNode();

        let curr = head;
        let pre = dummy;

        while (curr) {
            let currHead = curr;
            let count = 0;

            while (curr && count < k) {
                curr = curr.next;
                count++;
            }

            if (count === k) {
                pre.next = reverseKth(currHead, k);
                pre = currHead;
            } else {
                pre.next = currHead;
            }
        }

        return dummy.next;
    }
}
{
    //92. Reverse Linked List II
    //Input: head = [1,2,3,4,5], left = 2, right = 4 Output: [1,4,3,2,5]
    //Input: head = [5], left = 1, right = 1 Output: [5]
    const reverseLinkedList = (head, tail) => {
        let cur = head;
        let pre = null;
        let next = null;
        while (cur) {
            next = cur.next;
            cur.next = pre;
            pre = cur;
            cur = next;
        }
        return [tail, head]
    }
    var reverseBetween = function (head, left, right) {
        const dummyNode = new ListNode();
        dummyNode.next = head;

        let pre = dummyNode;

        // 第 1 步：从虚拟头节点走 left - 1 步，来到 left 节点的前一个节点
        for (let i = 0; i < left - 1; i++) {// 建议写在 for 循环里，语义清晰
            pre = pre.next;
        }

        // 第 2 步：从 pre 再走 right - left + 1 步，来到 right 节点
        let rightNode = pre;
        for (let i = 0; i < right - left + 1; i++) {
            rightNode = rightNode.next;
        }

        //console.log('pre=',pre,'rightNode=',rightNode);

        // 第 3 步：切断出一个子链表（截取链表）
        let leftNode = pre.next;
        let postEnd = rightNode.next;

        // 注意：切断链接 *** 
        pre.next = null;
        
        rightNode.next = null; // tail will be null

        // 第 4 步：同第 206 题，反转链表的子区间
        reverseLinkedList(leftNode, rightNode);

        // 第 5 步：接回到原来的链表中
        pre.next = rightNode;
        leftNode.next = postEnd;

        return dummyNode.next;
    };
    {
        var reverseBetween = function (head, left, right) {
            if (head === null || left > right) return head;

            const dummy = new ListNode(-1, head);
            let pre = dummy;

            for (let i = 0; i < left - 1; i++) {
                pre = pre.next;
            }

            const cur = pre.next;

            for (let i = 0; i < right - left; i++) {
                const next = cur.next;
                cur.next = next.next;
                next.next = pre.next;
                pre.next = next;
            }

            return dummy.next;
        };
    }
}