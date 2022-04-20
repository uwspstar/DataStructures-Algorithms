/*
堆 Heap 使用条件
    - 找最大值或者最小值(60%)
    - 找第 k 大(pop k 次 复杂度 O(nlogk))(50%)
    - 要求 logn 时间对数据进行操作(40%)

堆不能解决的问题
    - 查询比某个数大的最小值/最接近的值(平衡排序二叉树 Balanced BST 才可以解决)
    - 找某段区间的最大值最小值(线段树 SegmentTree 可以解决)
    - O(n) 找第 k 大 (使用快排中的 partition 操作)
*/
// https://leetcode.com/problems/kth-largest-element-in-an-array/submissions/
var findKthLargest = function (nums, k) {
    let pq = new MinPriorityQueue();

    for (let i = 0; i < nums.length; i++) {
        pq.enqueue(nums[i]);

        if (pq.size() > k) {
            pq.dequeue();
        }
    }

    return pq.dequeue().element;
};