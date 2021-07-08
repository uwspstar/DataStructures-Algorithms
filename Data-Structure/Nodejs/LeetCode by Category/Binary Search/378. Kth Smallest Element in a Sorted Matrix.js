//378. Kth Smallest Element in a Sorted Matrix
/*
Given an n x n matrix where each of the rows and columns are sorted in ascending order, return the kth smallest element in the matrix.

Note that it is the kth smallest element in the sorted order, not the kth distinct element.

Example 1:

Input: matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8
Output: 13
Explanation: The elements in the matrix are [1,5,9,10,11,12,13,13,15], and the 8th smallest number is 13
Example 2:

Input: matrix = [[-5]], k = 1
Output: -5

可以这样描述走法：

初始位置在 matrix[n−1][0]（即左下角）；

设当前位置为 matrix[i][j]。若 matrix[i][j]≤mid，则将当前所在列的不大于 mid 的数的数量（即 i + 1）累加到答案中，并向右移动，否则向上移动；

不断移动直到走出格子为止。

我们发现这样的走法时间复杂度为 O(n)，即我们可以线性计算对于任意一个 mid，矩阵中有多少数不大于它。这满足了二分查找的性质。

不妨假设答案为 xx，那么可以知道 rl≤x≤r，这样就确定了二分查找的上下界。

每次对于「猜测」的答案 mid，计算矩阵中有多少数不大于 mid ：

如果数量不少于 kk，那么说明最终答案 x 不大于 mid；
如果数量少于 kk，那么说明最终答案 x 大于 mid。
这样我们就可以计算出最终的结果 x 了

链接：https://leetcode-cn.com/problems/kth-smallest-element-in-a-sorted-matrix/solution/you-xu-ju-zhen-zhong-di-kxiao-de-yuan-su-by-leetco/

*/
{
    const check = (m, mid, k, len) => {
        let i = len - 1;
        let j = 0;
        let num = 0;
        while (i >= 0 && j < len) {
            if (m[i][j] <= mid) {
                num += i + 1;
                j++;
            } else {
                i--;
            }
        }
        return num >= k;
    }
    var kthSmallest = function (m, k) {
        let len = m.length;
        let left = m[0][0];
        let right = m[len - 1][len - 1];

        while (left < right) {

            let mid = left + parseInt((right - left) / 2);
            if (check(m, mid, k, len)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        return left;
    };
}
{
    var kthSmallest = function (m, k) {
        const n = m.length;
        let min = m[0][0];
        let max = m[n - 1][n - 1];
        while (max > min) {
            const mid = min + Math.floor((max - min) / 2);
            let count = 0;

            m.forEach(row => {
                for (let i = 0; i < n && row[i] <= mid; i++) {
                    count++;
                }
            })

            if (count >= k) max = mid;
            else min = mid + 1;
        }
        return min;
    };
    //Find K Pairs with Smallest Sums
    //Kth Smallest Number in Multiplication Table
    //Find K-th Smallest Pair Distance
    //K-th Smallest Prime Fraction
}
{
    var kthSmallest = function (m, k) {
        let res = [];
        let len = m.length;
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len; j++) {

                res.push(m[i][j]);
            }
        }
        res.sort((a, b) => a - b);
        return res[k - 1];
    };
}
