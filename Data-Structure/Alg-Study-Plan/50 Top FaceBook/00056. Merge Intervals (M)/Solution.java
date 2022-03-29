/*
基本思路
一个区间可以表示为 [start, end]，先按区间的 start 排序：
显然，对于几个相交区间合并后的结果区间 x，x.start 一定是这些相交区间中 start 最小的，x.end 一定是这些相交区间中 end 最大的：

由于已经排了序，x.start 很好确定，求 x.end 也很容易，可以类比在数组中找最大值的过程。

详细题解：一文秒杀所有区间相关问题

标签：区间问题，排序

解法代码
*/
class Solution {
    public int[][] merge(int[][] intervals) {
        LinkedList<int[]> res = new LinkedList<>();
        // 按区间的 start 升序排列
        Arrays.sort(intervals, (a, b) -> {
            return a[0] - b[0];
        });

        res.add(intervals[0]);
        
        for (int i = 1; i < intervals.length; i++) {
            int[] curr = intervals[i];
            // res 中最后一个元素的引用
            int[] last = res.getLast();
            if (curr[0] <= last[1]) {
                last[1] = Math.max(last[1], curr[1]);
            } else {
                // 处理下一个待合并区间
                res.add(curr);
            }
        }
        return res.toArray(new int[0][0]);
    }
}
/*
 * 类似题目：
 * 1288. 删除被覆盖区间（中等）
 * 986. 区间列表的交集（中等）
 */