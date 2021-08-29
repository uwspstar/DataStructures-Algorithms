//23. Merge k Sorted Lists
{
    // T: O(NlogN) 
    // S: O(N)
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

    const mergeKLists = arr => {
        if (arr == null || arr.length === 0) return arr;

        if (arr.length < 2) return arr[0];

        if (arr.length === 2) return mergeTwoList(arr[0], arr[1]);

        let m = arr.length >> 1; //parseInt(arr.length / 2); // LogN

        let left = mergeKLists(arr.slice(0, m));
        let right = mergeKLists(arr.slice(m));

        console.log(left, right);

        return mergeTwoList(left, right);
    };

    ///Ugly Number II
}

// mergeSort : 就是个二叉树的后序遍历, firefox use it; my statable T: O(NlogN),  S: O(N)
{
    const mergeSortHelp = arr => {

        if (arr.length < 2) return arr;

        const merge = (left, right) => {
            if (left.length === 0) return right;
            if (right.length === 0) return left;

            let result = []; //S: O(N)

            while (left.length && right.length) {
                left[0] < right[0]
                    ? result.push(left.shift())
                    : result.push(right.shift());
            }
            return result.concat(left, right);
        }

        const mergeSort = arr => {
            if (arr.length < 2) return arr;
            let mid = arr.length >> 1; // left + parseInt((right - left) / 2))
            let left = mergeSort(arr.slice(0, mid));
            let right = mergeSort(arr.slice(mid));
            return merge(left, right);
        }

        return mergeSort(arr);
    }
    console.log('mergeSort', JSON.stringify(mergeSortHelp([8, 1, 2, 3, 4, 5, 6, 7])));
}