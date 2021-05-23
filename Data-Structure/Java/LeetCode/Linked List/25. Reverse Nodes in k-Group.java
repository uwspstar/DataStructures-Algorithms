// 25. Reverse Nodes in k-Group
/*
 * Given a linked list, reverse the nodes of a linked list k at a time and
 * return its modified list.
 * 
 * k is a positive integer and is less than or equal to the length of the linked
 * list. If the number of nodes is not a multiple of k then left-out nodes, in
 * the end, should remain as it is.
 * 
 * You may not alter the values in the list's nodes, only nodes themselves may
 * be changed.
 * 
 * Input: head = [1,2,3,4,5], k = 2 Output: [2,1,4,3,5] 
 * Input: head = [1,2,3,4,5], k = 3 Output: [3,2,1,4,5] 
 * Input: head = [1,2,3,4,5], k = 1 Output: [1,2,3,4,5] 
 * Input: head = [1], k = 1 Output: [1]
 */
class Solution {
    public ListNode reverseKGroup(ListNode head, int k) {
        ListNode dummy = new ListNode(0, head);
        ListNode pre = dummy;
        ListNode curr = head;
        while (curr != null) {
            ListNode currHead = curr;
            int count = 0;
            while (curr != null && count < k) {
                curr = curr.next;
                count++;
            }
            if (count == k) {
                pre.next = this.myReverse(currHead, k);
                pre = currHead;
            } else {
                pre.next = currHead;
            }
        }

        return dummy.next;
    }

    public ListNode myReverse(ListNode head, int k) {
        ListNode curr = head;
        ListNode pre = null;
        ListNode next = null;
        while (curr != null && k > 0) {
            next = curr.next;
            curr.next = pre;
            pre = curr;
            curr = next;
            k--;
        }
        return pre;
    }
}

// Swap Nodes in Pairs
// Swapping Nodes in a Linked List
class Solution {
    public ListNode reverseKGroup(ListNode head, int k) {
        ListNode hair = new ListNode(0);
        hair.next = head;
        ListNode pre = hair;

        while (head != null) {
            ListNode tail = pre;
            // 查看剩余部分长度是否大于等于 k
            for (int i = 0; i < k; ++i) {
                tail = tail.next;
                if (tail == null) {
                    return hair.next;
                }
            }
            ListNode nex = tail.next;
            ListNode[] reverse = myReverse(head, tail);
            head = reverse[0];
            tail = reverse[1];
            // 把子链表重新接回原链表
            pre.next = head;
            tail.next = nex;
            pre = tail;
            head = tail.next;
        }

        return hair.next;
    }

    public ListNode[] myReverse(ListNode head, ListNode tail) {
        ListNode prev = tail.next;
        ListNode p = head;
        while (prev != tail) {
            ListNode nex = p.next;
            p.next = prev;
            prev = p;
            p = nex;
        }
        return new ListNode[] { tail, head };
    }
}