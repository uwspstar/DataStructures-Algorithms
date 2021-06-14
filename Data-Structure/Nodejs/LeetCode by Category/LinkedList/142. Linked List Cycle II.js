//142. Linked List Cycle II
/*
Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Notice that you should not modify the linked list.

Input: head = [3,2,0,-4], pos = 1 Output: tail connects to node index 1
Explanation: There is a cycle in the linked list, where tail connects to the second node.
*/

{
    //t: O(N) , s: O(1)
    var detectCycle = function (head) {
        if (head === null) return null;

        let fast = head;
        let slow = head;

        while (fast && fast.next) {
            fast = fast.next.next;
            slow = slow.next;

            if (slow === fast) {
                let index = head;
                while (index !== fast) {
                    index = index.next;
                    fast = fast.next;
                }
                return index;
            }
        }
        return null;
    };
}
{ // brute force, t: O(N) , s: O(N), set add object
    const detectCycle = head => {
        if (head === null) return null;
        let set = new Set();
        let curr = head;
        while (curr) {
            if (set.has(curr)) {
                return curr;
            } else {
                set.add(curr);
            }
            curr = curr.next;
        }
        return null;
    }
}