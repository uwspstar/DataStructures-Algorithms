//1288. Remove Covered Intervals
/*
Given an array intervals where intervals[i] = [li, ri] represent the interval [li, ri), remove all intervals that are covered by another interval in the list.

The interval [a, b) is covered by the interval [c, d) if and only if c <= a and b <= d.

Return the number of remaining intervals.

Example 1:
Input: intervals = [[1,4],[3,6],[2,8]]
Output: 2
Explanation: Interval [3,6] is covered by [2,8], therefore it is removed.

Example 2:  
Input: intervals = [[1,4],[2,3]]
Output: 1
*/
var removeCoveredIntervals = function (intervals) {
    //[[1,4],[2,8], [3,6]]
    // 1-------4
    //    2----------8
    //       3----6
    intervals.sort((a, b) => {
        if (a[0] === b[0]) return b[1] - a[1];
        else return a[0] - b[0];
    });
    let res = 0;
    for (let i = 0; i < intervals.length - 1; i++) {
        if (intervals[i][1] >= intervals[i + 1][1]) {
            res++;
            intervals[i + 1] = intervals[i]; // replace i + 1 with i , very important
        }
    }
    return intervals.length - res;
};