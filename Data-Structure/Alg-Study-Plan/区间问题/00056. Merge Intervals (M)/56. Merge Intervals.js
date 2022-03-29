// 56. Merge Intervals
/*
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
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
        let N = arr.length;
        arr.sort((a, b) => a[0] - b[0]);
        console.log('arr=', arr);

        let res = [arr[0]]; // [1,3]

        for (let i = 1; i < N; i++) {
            let last = res[res.length - 1];
            let curr = arr[i];
            if (curr[0] > last[1]) {
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