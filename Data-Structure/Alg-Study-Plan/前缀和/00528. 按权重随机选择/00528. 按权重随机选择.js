{
    var Solution = function (w) {
        this.prefixSum = [];
        this.totalSum = 0;
        for (let i = 0; i < w.length; i++) {
            this.totalSum += w[i];
            this.prefixSum[i] = this.totalSum;
        }
    };
    Solution.prototype.pickIndex = function () {
        let left = 0;
        let right = this.prefixSum.length - 1;
        let target = this.totalSum * Math.random();

        while (left < right) {
            let mid = left + Math.floor((right - left) / 2);

            if (this.prefixSum[mid] < target) {
                left = mid + 1;
            }
            else {
                right = mid;
            }
        }
        return left;
    };
}
{
    var Solution = function (w) {
        pre = new Array(w.length).fill(0);
        pre[0] = w[0];
        for (let i = 1; i < w.length; ++i) {
            pre[i] = pre[i - 1] + w[i];
        }
        this.total = _.sum(w);
    };

    Solution.prototype.pickIndex = function () {
        const x = Math.floor((Math.random() * this.total)) + 1;
        const binarySearch = (x) => {
            let low = 0, high = pre.length - 1;
            while (low < high) {
                const mid = Math.floor((high - low) / 2) + low;
                if (pre[mid] < x) {
                    low = mid + 1;
                } else {
                    high = mid;
                }
            }
            return low;
        }
        return binarySearch(x);
    };
}
/*
复杂度分析

时间复杂度：初始化的时间复杂度为 O(n)，每次选择的时间复杂度为 O(logn)，其中 n 是数组 w 的长度。

空间复杂度：O(n)，即为前缀和数组 pre 需要使用的空间。
*/
//https://leetcode-cn.com/problems/random-pick-with-weight/solution/an-quan-zhong-sui-ji-xuan-ze-by-leetcode-h13t/
