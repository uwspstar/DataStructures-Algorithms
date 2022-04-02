/*
基本思路
PS：这道题在《算法小抄》 的第 376 页。

这道题表面上不是求最值，但是可以改一改：

请问通过题目中的跳跃规则，最多能跳多远？如果能够越过最后一格，返回 true，否则返回 false。

所以解题关键在于求出能够跳到的最远距离。

详细题解：经典贪心算法：跳跃游戏

标签：动态规划，贪心算法，一维动态规划

解法代码
*/

class Solution {
    public boolean canJump(int[] nums) {
        int n = nums.length;
        int farthest = 0;
        for (int i = 0; i < n - 1; i++) {
            // 不断计算能跳到的最远距离
            farthest = Math.max(farthest, i + nums[i]);
            // 可能碰到了 0，卡住跳不动了
            if (farthest <= i) {
                return false;
            }
        }
        return farthest >= n - 1;
    }
}
/*
 * 类似题目：
 * 
 * 45. 跳跃游戏 II（中等）
 */