//23. Merge k Sorted Lists

/*
You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

 

Example 1:

Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6
Example 2:

Input: lists = []
Output: []
Example 3:

Input: lists = [[]]
Output: []
*/
{
    const mergeTwoList = (l1, l2) => {
        if (l1 === null) return l2;
        if (l2 === null) return l1;

        let dummy = new ListNode();
        let p = dummy;

        while (l1 && l2) {
            if (l1.val < l2.val) {
                p.next = l1;
                l1 = l1.next;
            } else {
                p.next = l2;
                l2 = l2.next;
            }
            p = p.next;
        }
        if (l1) p.next = l1;
        if (l2) p.next = l2;

        return dummy.next;
    }

    var mergeKLists = function (arr) {
        if (arr === null || arr.length === 0) return null;
        if (arr.length < 2) return arr[0];
        if (arr.length === 2) return mergeTwoList(arr[0], arr[1]);

        let mid = arr.length >> 1;
        let left = mergeKLists(arr.slice(0, mid));
        let right = mergeKLists(arr.slice(mid));

        return mergeTwoList(left, right);
    };

}
{
    const convertToQueue = (lists) => {
        const queue = new MinPriorityQueue({ priority: (node) => node.val });

        for (const list of lists) {
            console.log('list=', list);
            list && queue.enqueue(list);
        }


        return queue;
    }

    const builder = (queue) => {
        const newNode = new ListNode();
        let cur = newNode;

        while (queue.size()) {
            let node = queue.dequeue().element;
            cur.next = new ListNode(node.val);
            cur = cur.next;

            node = node.next;
            node && queue.enqueue(node);
        }

        return newNode.next;
    }

    var mergeKLists = function (lists) {
        const queue = convertToQueue(lists);
        console.log('queue=', queue);
        return builder(queue);
    };
}