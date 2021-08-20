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