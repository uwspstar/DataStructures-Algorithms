{
    //203. Remove Linked List Elements
    //Input: head = [1,2,6,3,4,5,6], val = 6 Output: [1,2,3,4,5]
    // dummy head;
    var removeElements = function (head, val) {

        let dummy = new ListNode(0);
        dummy.next = head;

        let prev = dummy;
        let curr = head;

        while (curr != null) {
            if (curr.val == val) {
                prev.next = curr.next;
            }
            else {
                prev = curr;
            }
            curr = curr.next;
        }
        return dummy.next;
    };
}

// recursive
{
    // only 2 cases, 
    //1 : head.val === val, than remove head, 
    //2 : head.val !== val, then keep head, and head.next = remove the val from rest
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

}