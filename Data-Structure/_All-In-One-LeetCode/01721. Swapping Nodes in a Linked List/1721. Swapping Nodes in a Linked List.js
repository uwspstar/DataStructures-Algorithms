// 1721. Swapping Nodes in a Linked List
/*
You are given the head of a linked list, and an integer k.

Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).

Example 1:
Input: head = [1,2,3,4,5], k = 2
Output: [1,4,3,2,5]

Example 2:
Input: head = [7,9,6,6,7,8,3,0,9,5], k = 5
Output: [7,9,6,6,8,7,3,0,9,5]
*/
{
    var swapNodes = function (head, k) {
        let p = head;
        let fast = head;
        let slow = head;
        for (let i = 0; i < k - 1; i++) {
            p = p.next;
            fast = fast.next;
        }
        console.log(p.val, fast.val);

        fast = fast.next;

        while (fast) {
            fast = fast.next;
            slow = slow.next;
        }

        console.log(p.val, slow.val)

        let tmp = slow.val;
        slow.val = p.val;
        p.val = tmp;

        return head;
    };
    // Circular Array Loop (M)
    // Most Profit Assigning Work (M)
    // The k Strongest Values in an Array (M)
}