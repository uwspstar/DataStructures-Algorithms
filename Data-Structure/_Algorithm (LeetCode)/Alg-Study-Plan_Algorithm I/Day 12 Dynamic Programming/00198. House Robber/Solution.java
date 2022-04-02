/*
基本思路
PS：这道题在《算法小抄》 的第 201 页。

假想你就是这个强盗，从左到右走过这一排房子，在每间房子前都有两种选择：抢或者不抢。

当你走过了最后一间房子后，你就没得抢了，能抢到的钱显然是 0（base case）。

以上已经明确了「状态」和「选择」：你面前房子的索引就是状态，抢和不抢就是选择。




状态转移方程：

Copy
int res = Math.max(
    // 不抢，去下家
    dp(nums, start + 1),
    // 抢，去下下家
    nums[start] + dp(nums, start + 2)
);
打家劫舍系列问题还可以进一步优化，见文章详解，这里只给出最通用的框架性解法。

详细题解：经典动态规划：打家劫舍系列问题

标签：动态规划，一维动态规划

解法代码
*/
class Solution {
    // 备忘录
    private int[] memo;

    // 主函数
    public int rob(int[] nums) {
        // 初始化备忘录
        memo = new int[nums.length];
        Arrays.fill(memo, -1);
        // 强盗从第 0 间房子开始抢劫
        return dp(nums, 0);
    }

    // 返回 dp[start..] 能抢到的最大值
    private int dp(int[] nums, int start) {
        if (start >= nums.length) {
            return 0;
        }
        // 避免重复计算
        if (memo[start] != -1)
            return memo[start];

        int res = Math.max(dp(nums, start + 1),
                nums[start] + dp(nums, start + 2));
        // 记入备忘录
        memo[start] = res;
        return res;
    }
}
/*
 * 类似题目：
 * 213. 打家劫舍 II（中等）
 * 337. 打家劫舍 III（中等）
 */