//21. Merge Two Sorted Lists
/*
check 2. Add Two Numbers before start to look at this one;
check merge sort before start look at this one;


Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

Input: l1 = [1,2,4], l2 = [1,3,4] Output: [1,1,2,3,4,4]
Input: l1 = [], l2 = [] Output: []
Input: l1 = [], l2 = [0] Output: [0]
*/
{
    // return a new merged list, so we can use a dummy head;
    var mergeTwoLists = function (l1, l2) {
        if (l1 === null) return l2;
        if (l2 === null) return l1;

        let dummy = new ListNode(0);
        let p = dummy;

        while (l1 && l2) {
            if (l1.val <= l2.val) {
                p.next = l1; // so we return p.next; p.next is the read start point
                l1 = l1.next;
            } else {
                p.next = l2;
                l2 = l2.next;
            }
            p = p.next;
        }

        p.next = l1 ? l1 : l2;

        return dummy.next;
    };


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