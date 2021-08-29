//25. Reverse Nodes in k-Group
/*
Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

You may not alter the values in the list's nodes, only nodes themselves may be changed.

Input: head = [1,2,3,4,5], k = 2 Output: [2,1,4,3,5]
Input: head = [1,2,3,4,5], k = 3 Output: [3,2,1,4,5]
Input: head = [1,2,3,4,5], k = 1 Output: [1,2,3,4,5]
Input: head = [1], k = 1 Output: [1]
*/
{
    // create a reverse  help function;
    // check 206. Reverse Linked List before start this one;

    const reverse = (head, k) => {
        let curr = head;
        let pre = null;
        let next = null;
        while (curr && k > 0) {
            next = curr.next;
            curr.next = pre;
            pre = curr;
            curr = next;
            k--;
        }
        //head = pre;
        return pre;
    }
    var reverseKGroup = function (head, k) {

        if (head === null || k === 1) return head;

        let dummy = new ListNode(0, head);

        let curr = head;
        let pre = dummy;

        while (curr) {
            let currHead = curr;
            let count = 0;

            while (curr && count < k) {
                curr = curr.next;
                count++;
            }

            if (count === k) { // reverse k-Group
                pre.next = reverse(currHead, k);
                pre = currHead;
                
            } else { // rest link
                pre.next = currHead;
            }
        }
        return dummy.next;
    };
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
        return [tail, head]; // cleaver
    }
    var reverseKGroup = function (head, k) {
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
    function reverse(head, k) {
        let prev = null;
        let curr = head;
        let next = null;
        while (curr && k > 0) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
            k--;
        }
        return prev;
    }

    var reverseKGroup = function (head, k) {

        if (k === 1 || head === null) {
            return head;
        }

        let dummy = new ListNode(0, head); // dummy head
        let curr = head;
        let prev = dummy;

        while (curr) {
            let tail = curr;
            let count = 0;

            while (curr && count < k) {
                curr = curr.next;
                count++;
            }

            if (count === k) {
                prev.next = reverse(tail, k);
                prev = tail;
            } else {
                prev.next = tail;
            }
        }

        return dummy.next;
    };
}