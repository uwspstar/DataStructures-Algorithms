//877. Stone Game
/*
Alex and Lee play a game with piles of stones.  There are an even number of piles arranged in a row, and each pile has a positive integer number of stones piles[i].

The objective of the game is to end with the most stones.  The total number of stones is odd, so there are no ties.

Alex and Lee take turns, with Alex starting first.  Each turn, a player takes the entire pile of stones from either the beginning or the end of the row.  This continues until there are no more piles left, at which point the person with the most stones wins.

Assuming Alex and Lee play optimally, return True if and only if Alex wins the game.

Input: piles = [5,3,4,5]
Output: true

Explanation:
Alex starts first, and can only take the first 5 or the last 5.
Say he takes the first 5, so that the row becomes [3, 4, 5].
If Lee takes 3, then the board is [4, 5], and Alex takes 5 to win with 10 points.
If Lee takes the last 5, then the board is [3, 4], and Alex takes 4 to win with 9 points.
This demonstrated that taking the first 5 was a winning move for Alex, so we return true.

这道题是「486. 预测赢家」的特例。和第 486 题相比，这道题增加了两个限制条件：

数组的长度是偶数；

数组的元素之和是奇数，所以没有平局。
动态规划
定义 f[l][r] 为考虑区间 [l,r]，在双方都做最好选择的情况下，先手与后手的最大得分差值为多少。

那么 f[1][n] 为考虑所有石子，先手与后手的得分差值：

f[1][n]>0，则先手必胜，返回 True
f[1][n]<0，则先手必败，返回 False
不失一般性的考虑 f[l][r] 如何转移。根据题意，只能从两端取石子（令 piles 下标从 1 开始），共两种情况：

从左端取石子，价值为 piles[l−1]；取完石子后，原来的后手变为先手，从 [l + 1, r]区间做最优决策，所得价值为 f[l + 1][r]。因此本次先手从左端点取石子的话，双方差值为： piles[l - 1] - f[l + 1][r]

从右端取石子，价值为 piles[r−1]；取完石子后，原来的后手变为先手，从 [l, r - 1]区间做最优决策，所得价值为 f[l][r−1]。因此本次先手从右端点取石子的话，双方差值为： piles[r - 1] - f[l][r - 1]

双方都想赢，都会做最优决策（即使自己与对方分差最大）。因此 f[l][r] 为上述两种情况中的最大值。

根据状态转移方程，我们发现大区间的状态值依赖于小区间的状态值，典型的区间 DP 问题。

按照从小到大「枚举区间长度」和「区间左端点」的常规做法进行求解即可。

作者：AC_OIer
链接：https://leetcode-cn.com/problems/stone-game/solution/gong-shui-san-xie-jing-dian-qu-jian-dp-j-wn31/
*/
//DP :
{
    var stoneGame = function (piles) {
        const length = piles.length;
        const dp = new Array(length).fill(0).map(() => new Array(length).fill(0));

        for (let i = 0; i < length; i++) {
            dp[i][i] = piles[i];
        }

        for (let i = length - 2; i >= 0; i--) {
            for (let j = i + 1; j < length; j++) {
                dp[i][j] = Math.max(piles[i] - dp[i + 1][j], piles[j] - dp[i][j - 1]);
            }
        }
        
        return dp[0][length - 1] > 0;
    };
}
{
    var stoneGame = function (piles) {
        const length = piles.length;
        const dp = new Array(length).fill(0);
        for (let i = 0; i < length; i++) {
            dp[i] = piles[i];
        }
        for (let i = length - 2; i >= 0; i--) {
            for (let j = i + 1; j < length; j++) {
                dp[j] = Math.max(piles[i] - dp[j], piles[j] - dp[j - 1]);
            }
        }
        return dp[length - 1] > 0;
    };
}