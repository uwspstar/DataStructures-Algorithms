//435. Non-overlapping Intervals
/*
给定多个区间，计算让这些区间互不重叠所需要移除区间的最少个数。起止相连不算重叠。
输入是一个数组，数组由多个长度固定为 2 的数组组成，表示区间的开始和结尾。输出一个 整数，表示需要移除的区间数量。
                	
Input: [[1,2], [2,4], [1,3]] Output: 1

在这个样例中，我们可以移除区间 [1,3]，使得剩余的区间 [[1,2], [2,4]] 互不重叠。 
*/
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