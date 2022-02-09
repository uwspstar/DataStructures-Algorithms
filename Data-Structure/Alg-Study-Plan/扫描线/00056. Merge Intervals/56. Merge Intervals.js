//56. Merge Intervals
/*
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

Example 1:
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

Example 2:
Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
*/

const  merge = arr => {
    arr.sort((a, b) => a[0] - b[0]);
    let res = [arr[0]];
    for (let i = 1; i < arr.length; i++) {
        let last = res[res.length - 1];
        let curr = arr[i];
        if (curr[0] > last[1]) {
            res.push(arr[i]);
        } else {
            last[1] = Math.max(last[1], curr[1]);
        }
    }
    return res;
}