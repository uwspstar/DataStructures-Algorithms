//203. Remove Linked List Elements
/*
Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

Input: head = [1,2,6,3,4,5,6], val = 6 Output: [1,2,3,4,5]
Input: head = [], val = 1 Output: []
Input: head = [7,7,7,7], val = 7 Output: []
*/
{   //recursive
    var removeElements = function (head, val) {
        if (head === null) return head;

        let res = removeElements(head.next, val); // a new linked list with all removed val

        if (head.val === val) {
            return res;
        } else {
            head.next = res;
            return head;
        }
    };
    //Convert Sorted List to Binary Search Tree
    //Design Linked List
    //Delete N Nodes After M Nodes of a Linked List
}
{  //iterative
    var removeElements = function(head, val) {
        if (head === null) return null;   
        let dummy = new ListNode(0);
        dummy.next = head;  
        let p =  dummy;  
        let curr = head; 
        while (curr) { 
            if (curr.val == val) {
                p.next = curr.next;
            } else {
                p = curr;
            }
            curr = curr.next
        }
        return dummy.next;
    };
}