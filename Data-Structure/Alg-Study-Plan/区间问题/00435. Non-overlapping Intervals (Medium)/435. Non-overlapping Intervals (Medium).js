//435. Non-overlapping Intervals
//求最少的移除区间个数，等价于尽量多保留不重叠的区间。在选择要保留区间时，区间的结 尾十分重要:选择的区间结尾越小，余留给其它区间的空间就越大，就越能保留更多的区间。因 此，我们采取的贪心策略为，优先保留结尾小且不相交的区间。具体实现方法为，先把区间按照结尾的大小进行增序排序，每次选择结尾最小且和前一个选 择的区间不重叠的区间。
// 注意 需要根据实际情况判断按区间开头排序还是按区间结尾排序。
{
    var eraseOverlapIntervals = function (intervals) {

        if (intervals.length === 0) return 0;

        intervals.sort((a, b) => (a[1] - b[1])); // sort with end time

        let end = intervals[0][1];
        let removeCount = 0;

        for (let i = 1; i < intervals.length; i++) {
            if (end <= intervals[i][0]) {
                end = intervals[i][1]; // end before start, no need to remove
            } else {
                removeCount++;
            }
        }

        return removeCount;
    };
}