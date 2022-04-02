// 57. Insert Interval
/*
You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return intervals after the insertion.

Example 1:
Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]

Example 2:
Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
*/

const insert = (intervals, newInterval) => {
    if (newInterval === null) return intervals;
    let list = [];
    list.push(...intervals, newInterval);
    list.sort((a, b) => a[0] - b[0]);

    let res = [list[0]];

    for (let i = 1; i < list.length; i++) {
        let curr = list[i];
        let last = res[res.length - 1];

        if (curr[0] > last[1]) {
            res.push(curr);
        } else {
            last[1] = Math.max(last[1], curr[1])
        }
    }
    return res;
}

var insert = function (intervals, newInterval) {
    // -----
    //       ------
    //                -----
    //     ----
    let res = [];
    for (let curr of intervals) {
        if (newInterval === null || curr[1] < newInterval[0]) {
            //Add to the output all the intervals starting before newInterval.
            res.push(curr);
        } else if (curr[0] > newInterval[1]) {
            // Add to the output all the intervals starting after newInterval. 
            res.push(newInterval);
            res.push(curr);
            newInterval = null; //means newInterval added

        } else { //overlap  set newInterval continue loop
            newInterval[0] = Math.min(curr[0], newInterval[0]);
            newInterval[1] = Math.max(curr[1], newInterval[1]);
        }
    }

    if (newInterval !== null) res.push(newInterval);
    return res;
};