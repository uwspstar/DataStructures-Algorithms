//92. Reverse Linked List II
/*
Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

Example 1: Input: head = [1,2,3,4,5], left = 2, right = 4 Output: [1,4,3,2,5]
Example 2: Input: head = [5], left = 1, right = 1 Output: [5]
*/
{
    var reverseBetween = function (head, m, n) {

        if (m === n) return head;

        let start = head;
        let cur = head;
        let i = 1;
        while (i < m) {
            start = cur;
            cur = cur.next;
            i++;
        }

        let prev = null;
        let tail = cur;

        while (i <= n) {
            let next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
            i++;
        }
        start.next = prev;
        tail.next = cur;
        return m === 1 ? prev : head;
    };

    //Swap Nodes in Pairs
    //Remove Zero Sum Consecutive Nodes from Linked List
    //Remove Duplicates From an Unsorted Linked List
}
{

    //https://leetcode-cn.com/problems/reverse-linked-list-ii/solution/fan-zhuan-lian-biao-ii-by-leetcode-solut-teyq/
    var reverseBetween = function (head, m, n) {
        let dummy = new ListNode();
        dummy.next = head;
        let pre = dummy;
        for (let i = 0; i < m - 1; ++i) {
            pre = pre.next;
        }

        let cur = pre.next;
        let next = null;
        for (let i = 0; i < n - m; ++i) {
            next = cur.next;
            cur.next = next.next;
            next.next = pre.next;
            pre.next = next;
        }
        return dummy.next;
    };

    //Split Linked List in Parts
    //Linked List Components
    //Merge In Between Linked Lists
    //Swap Nodes in Pairs
    //Remove Zero Sum Consecutive Nodes from Linked List
    //Remove Duplicates From an Unsorted Linked List


}
{
    //https://leetcode-cn.com/problems/reverse-linked-list-ii/solution/fan-zhuan-lian-biao-ii-by-leetcode-solut-teyq/
    var reverseBetween = function (head, left, right) {
        // 因为头节点有可能发生变化，使用虚拟头节点可以避免复杂的分类讨论
        const dummyNode = new ListNode(-1);
        dummyNode.next = head;

        let pre = dummyNode;
        // 第 1 步：从虚拟头节点走 left - 1 步，来到 left 节点的前一个节点
        // 建议写在 for 循环里，语义清晰
        for (let i = 0; i < left - 1; i++) {
            pre = pre.next;
        }

        // 第 2 步：从 pre 再走 right - left + 1 步，来到 right 节点
        let rightNode = pre;
        for (let i = 0; i < right - left + 1; i++) {
            rightNode = rightNode.next;
        }

        // 第 3 步：切断出一个子链表（截取链表）
        let leftNode = pre.next;
        let curr = rightNode.next;

        // 注意：切断链接
        pre.next = null;
        rightNode.next = null;

        // 第 4 步：同第 206 题，反转链表的子区间
        reverseLinkedList(leftNode);

        // 第 5 步：接回到原来的链表中
        pre.next = rightNode;
        leftNode.next = curr;
        return dummyNode.next;
    };

    const reverseLinkedList = (head) => {
        let pre = null;
        let cur = head;

        while (cur) {
            const next = cur.next;
            cur.next = pre;
            pre = cur;
            cur = next;
        }
    }
}
{
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
        return [tail, head];
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
        rightNode.next = null;

        // 第 4 步：同第 206 题，反转链表的子区间
        reverseLinkedList(leftNode, rightNode);

        // 第 5 步：接回到原来的链表中
        pre.next = rightNode;
        leftNode.next = postEnd;

        return dummyNode.next;
    };
}