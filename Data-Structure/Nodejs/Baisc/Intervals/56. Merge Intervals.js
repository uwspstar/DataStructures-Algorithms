//56. Merge Intervals
/*
Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

Example 1: Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

Example 2: Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
*/
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (arr) {
    //sort by o index
    arr.sort((a, b) => a[0] - b[0]);

    let res = [arr[0]];

    for (let i = 1; i < arr.length; i++) {
        if (res[res.length - 1][1] >= arr[i][0]) {
            res[res.length - 1][1] = Math.max(res[res.length - 1][1], arr[i][1]);
        } else {
            res.push(arr[i]);
        }
    }
    return res;
};

/*
Teemo Attacking
Add Bold Tag in String
Range Module
Employee Free Time
Partition Labels
*/