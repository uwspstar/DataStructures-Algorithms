//19. Remove Nth Node From End of List
/*
Given the head of a linked list, remove the nth node from the end of the list and return its head.
*/
{
    // T: O(N)
    // S: O(1)
    // two pointers, fast go n steps first, then, fast and slow both moving
    // so the fast is n steps ahead the slow;
    // when fast reach the end of the list, the slow is pointing the n node
    // we need a pre node to remember the node before slow
    var removeNthFromEnd = function (head, n) {
        if (head === null) return null;

        let pre = null;
        let slow = head;
        let fast = head;
        
        // this for loop may have problem, if n is bigger than linked list length;
        /*
        for (let i = 0; i < n; i++) {
            fast = fast.next;
        }
        */
        while (n && fast) {
            fast = fast.next;
            n--;
        }

        if (n > 0) return null; // n is longer than the linked list

        while (fast) {
            pre = slow;
            slow = slow.next;
            fast = fast.next;
        }

        // Now, cur points to the n-th node from the end and prev points to the previous node
        if (pre === null) return slow.next; // **** this is when head node is the node to be 
        deleted

        pre.next = slow.next;

        return head;
    };
    //Swapping Nodes in a Linked List
    //Delete N Nodes After M Nodes of a Linked List
}
{
    // Time Complexity: O(N)
    // Space Complexity: O(1)
    var removeNthFromEnd = function (head, n) {
        if (head === null) return head;

        let fast = head;
        let slow = head;

        while (n > 0 && fast) {
            fast = fast.next;
            n--;
        }
        if (n > 0) return null;

        let pre = null; // **** has to be null

        while (fast) {
            pre = slow;
            slow = slow.next;
            fast = fast.next;
        }
        // Now, cur points to the n-th node from the end and prev points to the previous node
        if (pre === null) return slow.next; // **** this is when head node is the node to be deleted

        pre.next = slow.next;

        return head;
    };
    //Swapping Nodes in a Linked List
    //Delete N Nodes After M Nodes of a Linked List
}