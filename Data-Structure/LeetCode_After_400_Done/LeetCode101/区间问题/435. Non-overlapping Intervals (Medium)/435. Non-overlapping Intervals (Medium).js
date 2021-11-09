/*
Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
Output: 1
Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.
 
Input: intervals = [[1,2],[1,2],[1,2]]
Output: 2
Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.
 
Input: intervals = [[1,2],[2,3]]
Output: 0
Explanation: You don't need to remove any of the intervals since they're already non-overlapping.

求最少的移除区间个数，等价于尽量多保留不重叠的区间。在选择要保留区间时，区间的结 尾十分重要:选择的区间结尾越小，余留给其它区间的空间就越大，就越能保留更多的区间。因 此，我们采取的贪心策略为，优先保留结尾小且不相交的区间。
*/
{
    var eraseOverlapIntervals = function (intervals) {

        if (intervals.length === 0) return 0;

        intervals.sort((a, b) => (a[1] - b[1])); // sort with end time

        let end = intervals[0][1];
        let count = 0;

        for (let i = 1; i < intervals.length; i++) {
            if (end <= intervals[i][0]) {
                end = intervals[i][1];
            } else {
                count++;
            }
        }

        return count;
    };
}