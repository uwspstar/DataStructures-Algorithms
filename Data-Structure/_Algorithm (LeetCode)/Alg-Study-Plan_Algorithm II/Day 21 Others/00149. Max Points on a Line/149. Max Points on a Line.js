// 149. Max Points on a Line
/*
Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane, return the maximum number of points that lie on the same straight line.

Input: points = [[1,1],[2,2],[3,3]]
Output: 3

Input: points = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]
Output: 4

Let's simplify the problem and search the maximum number of points on a line passing through the point i.

One could immediately notice that it's interesting to consider only the next points i + 1 .. N - 1 because the maximum number of points containing, for example, the point i - 2 was already found during the search of the maximum number of points on a line passing through the point i - 2.


朴素解法（枚举直线 + 枚举统计）
我们知道，两个点可以确定一条线。

因此一个朴素的做法是先枚举两条点（确定一条线），然后检查其余点是否落在该线中。

为了避免除法精度问题，当我们枚举两个点 ii 和 jj 时，不直接计算其对应直线的 斜率和 截距，而是通过判断 ii 和 jj 与第三个点 kk 形成的两条直线斜率是否相等（斜率相等的两条直线要么平行，要么重合，平行需要 44 个点来唯一确定，我们只有 33 个点，所以可以直接判定两直线重合）

// https://leetcode-cn.com/problems/max-points-on-a-line/solution/gong-shui-san-xie-liang-chong-mei-ju-zhi-u44s/ 

根据「朴素解法」的思路，枚举所有直线的过程不可避免，但统计点数的过程可以优化。

具体的，我们可以先枚举所有可能出现的 直线斜率（根据两点确定一条直线，即枚举所有的「点对」），使用「哈希表」统计所有 斜率 对应的点的数量，在所有值中取个 maxmax 即是答案。

一些细节：在使用「哈希表」进行保存时，为了避免精度问题，我们直接使用字符串进行保存，同时需要将 斜率 约干净。

// https://leetcode-cn.com/problems/max-points-on-a-line/solution/gong-shui-san-xie-liang-chong-mei-ju-zhi-u44s/。

*/
