// 56. Merge Intervals
/*
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

Example 1:
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

一个区间可以表示为 [start, end]，先按区间的 start 排序：
显然，对于几个相交区间合并后的结果区间 x，x.start 一定是这些相交区间中 start 最小的，x.end 一定是这些相交区间中 end 最大的：

*/
{
    // -------last 
    //     -------- curr
    //           ---
    // intervals = [[1,3],[2,6],[8,10],[15,18]] -> [[1,6],[8,10],[15,18]]
    // 1--3
    //   2----6
    //          8---10
    //                 15 -- 19
    // res =[[1,3]]
    var merge = function (arr) {
        if (arr.length < 2) return arr;
        const N = arr.length;
        // step 1 : 一个区间可以表示为 [start, end]，先按区间的 start 排序
        arr.sort((a, b) => a[0] - b[0]);

        let res = [arr[0]]; // [[1,3]]

        for (let i = 1; i < N; i++) {
            let last = res[res.length - 1];
            let curr = arr[i];
            if (curr[0] > last[1]) { // for the if else logic do the simple one first
                res.push(curr)
            } else {
                last[1] = Math.max(last[1], curr[1]);
            }
        }

        return res;
    };

    // Teemo Attacking (E)
    // Add Bold Tag in String (M)
    // Range Module (H)
    // Employee Free Time (H)
    // Amount of New Area Painted Each Day (H)
    // Longest Substring of One Repeating Character (H)
}
// NOTE : for swipe line, most needs sort first.