// 1675. 数组的最小偏移量
/*
给你一个由 n 个正整数组成的数组 nums 。

你可以对数组的任意元素执行任意次数的两类操作：

如果元素是 偶数 ，除以 2
例如，如果数组是 [1,2,3,4] ，那么你可以对最后一个元素执行此操作，使其变成 [1,2,3,2]
如果元素是 奇数 ，乘上 2
例如，如果数组是 [1,2,3,4] ，那么你可以对第一个元素执行此操作，使其变成 [2,2,3,4]
数组的 偏移量 是数组中任意两个元素之间的 最大差值 。

返回数组在执行某些操作之后可以拥有的 最小偏移量 。

 

示例 1：

输入：nums = [1,2,3,4]
输出：1
解释：你可以将数组转换为 [1,2,3,2]，然后转换成 [2,2,3,2]，偏移量是 3 - 2 = 1
示例 2：

输入：nums = [4,1,5,20,3]
输出：3
解释：两次操作后，你可以将数组转换为 [4,2,5,5,3]，偏移量是 5 - 2 = 3
示例 3：

输入：nums = [2,10,8]
输出：3

*/
{
    //[1,2,3,4] --> [2,2,3,2]
    //[4,1,5,20,3] -->[4,2,5,5,3]
    //[2,10,8] -> [2,10,2]
    var minimumDeviation = function (nums) {
        let pq = new MaxPriorityQueue({ priority: x => x })
        for (let n of nums) {
            if (n % 2 !== 0) n *= 2
            pq.enqueue(n);
        }

        let ans = pq.front().element - pq.back().element;
        //console.log('pq=', pq.toArray(),'ans=', ans, pq.front().element, pq.back().element);
        while (pq.front().element % 2 === 0) { 
            // keep / 2 for the biggest one,
            pq.enqueue(pq.dequeue().element / 2);
            //console.log('pq=', pq.toArray(),'ans=', ans);
            ans = Math.min(ans, pq.front().element - pq.back().element);
        }

        return ans;
    };
}
{


    const defaultCmp = (a, b) => a > b;
    const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];

    class Heap {
        constructor(cmp = defaultCmp) {
            this.container = [];
            this.cmp = cmp;
            this.end = Infinity;
        }

        insert(val) {
            this.end = Math.min(this.end, val);

            const { container, cmp } = this;

            container.push(val);

            let index = container.length - 1;

            while (index) {
                let parent = (index - 1) >> 1;

                if (cmp(container[parent], container[index])) break;

                swap(container, index, parent);

                index = parent;
            }
        }

        extract() {
            if (!this.size()) return null;
            if (this.size() == 1) return this.container.pop();

            const { container, cmp } = this;

            swap(container, 0, container.length - 1);

            const ans = container.pop(), len = container.length;
            let index = 0, betterChild = index * 2 + 1;

            while (betterChild < len) {
                let right = index * 2 + 2;

                if (right < len && cmp(container[right], container[betterChild])) betterChild = right;

                if (cmp(container[index], container[betterChild])) break;

                swap(container, index, betterChild);

                index = betterChild;
                betterChild = index * 2 + 1;
            }

            return ans;
        }

        top() {
            if (!this.size()) return null;
            return this.container[0];
        }

        size() {
            return this.container.length;
        }
    }

    const minimumDeviation = (nums) => {
        let maxHeap = new Heap(), ans = Infinity, val, max;

        for (let i = 0; i < nums.length; i++) {
            val = nums[i] % 2 ? nums[i] * 2 : nums[i];

            maxHeap.insert(val);
        }

        while (ans > 0 && maxHeap.top() % 2 == 0) {
            max = maxHeap.extract();

            maxHeap.insert(max >> 1);

            ans = Math.min(ans, maxHeap.top() - maxHeap.end);
        }

        return ans;
    };


    // https://leetcode-cn.com/problems/minimize-deviation-in-array/solution/zui-da-dui-you-xian-dui-lie-si-lu-xiang-seb2v/
}