/*
基本思路
标准的前缀和问题，核心思路是用一个新的数组 preSum 记录 nums[0..i-1] 的累加和，看图 10 = 3 + 5 + 2：

看这个 preSum 数组，如果我想求索引区间 [1, 4] 内的所有元素之和，就可以通过 preSum[5] - preSum[1] 得出。

这样，sumRange 函数仅仅需要做一次减法运算，避免了每次进行 for 循环调用，最坏时间复杂度为常数 O(1)。

详细题解：小而美的算法技巧：前缀和数组

标签：前缀和

解法代码
*/

class NumArray {
    // 前缀和数组
    private int[] preSum;

    /* 输入一个数组，构造前缀和 */
    public NumArray(int[] nums) {
        // preSum[0] = 0，便于计算累加和
        preSum = new int[nums.length + 1];
        // 计算 nums 的累加和
        for (int i = 1; i < preSum.length; i++) {
            preSum[i] = preSum[i - 1] + nums[i - 1];
        }
    }

    /* 查询闭区间 [left, right] 的累加和 */
    public int sumRange(int left, int right) {
        return preSum[right + 1] - preSum[left];
    }
}
/*
 * 类似题目：
 * 
 * 304. 二维区域和检索 - 矩阵不可变（中等）
 * 560. 和为K的子数组（中等）
 */