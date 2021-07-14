//82. Remove Duplicates from Sorted List II
/*
Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

Example 1: Input: head = [1,2,3,3,4,4,5] Output: [1,2,5]
Example 2: Input: head = [1,1,1,2,3] Output: [2,3]

删除链表中重复出现的节点，全部删掉一个都不保留
因为删除某个节点 node，需要让 node 的 pre.next = node.next，删除全部重复的元素可能删掉 head 元素，因此需要构造一个 dummy node，让其指向 head 的前序节点，也就是 dummy.next = head。这样需要删除 head 的时候就可以令 dummy.next = head.next。
*/
{
    //删除全部重复的元素可能删掉 head 元素, 需要构造一个 dummy node
    var deleteDuplicates = function (head) {
        if (head === null || head.next === null) return head;
        let dummy = new ListNode(); 
        dummy.next = head;

        let pre = dummy;
        let curr = head;

        while (curr) {
            if (curr.next !== null && curr.val === curr.next.val) {
                let value = curr.val;
                while (curr && curr.val === value) {
                    curr = curr.next;
                }
                pre.next = curr
            } else {
                pre = pre.next;
                curr = curr.next;
            }
        }
        return dummy.next;
    };
    
    //1836. Remove Duplicates From an Unsorted Linked List
}