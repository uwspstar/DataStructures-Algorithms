
{
    const mergeTwoList = (l1, l2) => {
        if (l1 === null) return l2;
        if (l2 === null) return l1;

        let dummy = new ListNode();
        let p = dummy;
        while (l1 && l2) {
            if (l1.val < l2.val) {
                p.next = l1
                l1 = l1.next
            } else {
                p.next = l2
                l2 = l2.next
            }
            p = p.next;
        }
        if (l1) p.next = l1
        if (l2) p.next = l2

        return dummy.next;
    }

    var mergeKLists = function (arr) {
        if (arr == null || arr.length === 0) return null
        if (arr.length < 2) return arr[0];
        if (arr.length === 2) return mergeTwoList(arr[0], arr[1]);

        let m = parseInt(arr.length / 2);
        let left = mergeKLists(arr.slice(0, m));
        let right = mergeKLists(arr.slice(m));

        console.log(left, right)
        return mergeTwoList(left, right);
    };

    ///Ugly Number II
}

{
    const mergeKLists = function (lists) {
        if (lists == null || lists.length === 0) return null
        if (lists.length === 1) return lists[0]
        if (lists.length === 2) return mergeTwo(lists[0], lists[1])
        const left = mergeKLists(lists.slice(0, ~~(lists.length / 2)))
        const right = mergeKLists(lists.slice(~~(lists.length / 2)))

        return mergeTwo(left, right)
    };
    function mergeTwo(l1, l2) {
        const dummy = new ListNode()
        let cur = dummy
        while (l1 && l2) {
            if (l1.val < l2.val) {
                cur.next = l1
                l1 = l1.next
            } else {
                cur.next = l2
                l2 = l2.next
            }
            cur = cur.next
        }
        if (l1) cur.next = l1
        if (l2) cur.next = l2
        return dummy.next
    }
}