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
