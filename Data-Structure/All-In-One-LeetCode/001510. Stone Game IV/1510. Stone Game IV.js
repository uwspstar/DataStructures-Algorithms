//1510. 石子游戏 IV
/*
Alice 和 Bob 两个人轮流玩一个游戏，Alice 先手。

一开始，有 n 个石子堆在一起。每个人轮流操作，正在操作的玩家可以从石子堆里拿走 任意 非零 平方数 个石子。

如果石子堆里没有石子了，则无法操作的玩家输掉游戏。

给你正整数 n ，且已知两个人都采取最优策略。如果 Alice 会赢得比赛，那么返回 True ，否则返回 False 。

我们用 f[i]f[i] 表示先手在面对 ii 颗石子时是否处于必胜态（会赢得比赛）。由于先手和后手都采取最优策略，那么 f[i]f[i] 为必胜态，当且仅当存在某个 f[i - k^2]f[i−k 
2
 ] 为必败态。也就是说，当先手在面对 ii 颗石子时，可以选择取走 k^2k 
2
  颗，剩余的 i-k^2i−k 
2
  颗对于后手来说是必败态，因此先手会获胜。

我们可以写出状态转移方程：
https://leetcode-cn.com/problems/stone-game-iv/solution/shi-zi-you-xi-iv-by-leetcode-solution/
  
any f[i−k ^2] is false where 1≤k 2≤i 
otherwise 边界条件为 f[0]=false，即没有石子时，先手会输掉游戏

*/

const winnerSquareGame = n => {
    let f = Array(n + 1).fill(false);
    for (let i = 1; i <= n; ++i) {
        for (let k = 1; k * k <= i; ++k) {
            if (!f[i - k * k]) {
                f[i] = true;
                break;
            }
        }
    }
    
    return f[n];
}

