// 138. Copy List with Random Pointer
{
    var copyRandomList = function (head) {
        if (head === null) return head;
        let map = new Map();
        let curr = head;
        while (curr) {
            map.set(curr, new Node(curr.val)); // use map save new node val
            curr = curr.next;
        }
        curr = head;
        while (curr) {
            //map.get(curr) is a new node just created
            map.get(curr).next = curr.next ? map.get(curr.next) : null;
            map.get(curr).random = curr.random ? map.get(curr.random) : null;
            curr = curr.next;
        }

        return map.get(head);
    };


}