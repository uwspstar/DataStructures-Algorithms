/*
基本思路
我们用 [a1, a2] 和 [b1, b2] 表示在 A 和 B 中的两个区间，如果这两个区间有交集，需满足 b2 >= a1 && a2 >= b1，分下面四种情况：

根据上图可以发现规律，假设交集区间是 [c1, c2]，那么 c1 = max(a1, b1), c2 = min(a2, b2)：

这一点就是寻找交集的核心。

详细题解：一文秒杀所有区间相关问题

标签：区间问题，数组双指针

解法代码
*/

class Solution {
    public int[][] intervalIntersection(int[][] A, int[][] B) {
        List<int[]> res = new LinkedList<>();
        int i = 0, j = 0;
        while (i < A.length && j < B.length) {
            int a1 = A[i][0], a2 = A[i][1];
            int b1 = B[j][0], b2 = B[j][1];

            if (b2 >= a1 && a2 >= b1) {
                res.add(new int[]{
                        Math.max(a1, b1), Math.min(a2, b2)
                });
            }
            if (b2 < a2) {
                j++;
            } else {
                i++;
            }
        }
        return res.toArray(new int[0][0]);
    }
}
/*
类似题目：

1288. 删除被覆盖区间（中等）
56. 区间合并（中等）
*/