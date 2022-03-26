/*
基本思路
PS：这道题在《算法小抄》 的第 381 页。

区间调度问题是让你计算若干区间中最多有几个互不相交的区间，这道题是区间调度问题的一个简单变体。

区间调度问题思路可以分为以下三步：

1、从区间集合 intvs 中选择一个区间 x，这个 x 是在当前所有区间中结束最早的（end 最小）。

2、把所有与 x 区间相交的区间从区间集合 intvs 中删除。

3、重复步骤 1 和 2，直到 intvs 为空为止。之前选出的那些 x 就是最大不相交子集。

详细题解：运用贪心算法来做时间管理

标签：区间问题，排序

解法代码
*/
class Solution {
    public int eraseOverlapIntervals(int[][] intervals) {
        int n = intervals.length;
        return n - intervalSchedule(intervals);
    }

    // 区间调度算法，算出 intvs 中最多有几个互不相交的区间
    int intervalSchedule(int[][] intvs) {
        if (intvs.length == 0) return 0;
        // 按 end 升序排序
        Arrays.sort(intvs, new Comparator<int[]>() {
            public int compare(int[] a, int[] b) {
                return a[1] - b[1];
            }
        });
        // 至少有一个区间不相交
        int count = 1;
        // 排序后，第一个区间就是 x
        int x_end = intvs[0][1];
        for (int[] interval : intvs) {
            int start = interval[0];
            if (start >= x_end) {
                // 找到下一个选择的区间了
                count++;
                x_end = interval[1];
            }
        }
        return count;
    }
}
/*
类似题目：

452. 用最少数量的箭引爆气球（中等）
*/