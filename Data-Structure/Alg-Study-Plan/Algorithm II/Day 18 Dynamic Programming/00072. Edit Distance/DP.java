/*
基本思路
PS：这道题在《算法小抄》 的第 123 页。

解决两个字符串的动态规划问题，一般都是用两个指针 i, j 分别指向两个字符串的最后，然后一步步往前走，缩小问题的规模。

对于每对儿字符 s1[i] 和 s2[j]，可以有四种操作：

if s1[i] == s2[j]:
    啥都别做（skip）
    i, j 同时向前移动
else:
    三选一：
        插入（insert）
        删除（delete）
        替换（replace）
那么「状态」就是指针 i, j 的位置，「选择」就是上述的四种操作。

如果使用自底向上的迭代解法，这样定义 dp 数组：dp[i-1][j-1] 存储 s1[0..i] 和 s2[0..j] 的最小编辑距离 。dp 数组索引至少是 0，所以索引会偏移一位。

然后把上述四种选择用 dp 函数表示出来，就可以得出最后答案了。

详细题解：经动态规划：编辑距离

标签：动态规划，二维动态规划

解法代码
*/
class Solution {
    public int minDistance(String s1, String s2) {
        int m = s1.length(), n = s2.length();
        int[][] dp = new int[m + 1][n + 1];
        // base case
        for (int i = 1; i <= m; i++)
            dp[i][0] = i;
        for (int j = 1; j <= n; j++)
            dp[0][j] = j;
        // 自底向上求解
        for (int i = 1; i <= m; i++)
            for (int j = 1; j <= n; j++)
                if (s1.charAt(i - 1) == s2.charAt(j - 1))
                    dp[i][j] = dp[i - 1][j - 1];
                else
                    dp[i][j] = min(
                        dp[i - 1][j] + 1, 
                        dp[i][j - 1] + 1, 
                        dp[i - 1][j - 1] + 1
                    );
        // 储存着整个 s1 和 s2 的最小编辑距离
        return dp[m][n];
    }

    int min(int a, int b, int c) {
        return Math.min(a, Math.min(b, c));
    }
}