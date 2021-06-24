//708. Insert into a Sorted Circular Linked List
// this one is the one in phone screen interview
/*
Given a Circular Linked List node, which is sorted in ascending order, write a function to insert a value insertVal into the list such that it remains a sorted circular list. The given node can be a reference to any single node in the list and may not necessarily be the smallest value in the circular list.

If there are multiple suitable places for insertion, you may choose any place to insert the new value. After the insertion, the circular list should remain sorted.

If the list is empty (i.e., the given node is null), you should create a new single circular list and return the reference to that single node. Otherwise, you should return the originally given node.

Input: head = [3,4,1], insertVal = 2 Output: [3,4,1,2]
Explanation: In the figure above, there is a sorted circular list of three elements. You are given a reference to the node with value 3, and we need to insert 2 into the list. The new node should be inserted between node 1 and node 3. After the insertion, the list should look like this, and we should still return node 3.

Input: head = [], insertVal = 1 Output: [1]
Explanation: The list is empty (given head is null). We create a new single circular list and return the reference to that single node.
Example 3:

Input: head = [1], insertVal = 0 Output: [1,0]
*/
{
    var insert = function (head, insertVal) {
        let newNode = new Node(insertVal, null);
        if (head === null) {
            newNode.next = newNode;
            return newNode;
        }

        let inserted = false;
        let cur = head;

        while (!inserted) {
            let curVal = cur.val, nextVal = cur.next.val;
            if ((curVal > nextVal && insertVal <= nextVal) // minimum
                || (curVal > nextVal && insertVal > curVal) // maximum
                || (insertVal > curVal && insertVal <= nextVal) // general
            ) {
                newNode.next = cur.next;
                cur.next = newNode;
                inserted = true;
            }
            cur = cur.next;
            // we've made a full circle
            if (!inserted && cur === head) {
                newNode.next = cur.next;
                cur.next = newNode;
                inserted = true;
            }
        }
        return head;
    };
    //Insertion Sort List
}