//96. 不同的二叉搜索树 DP
/*
给你一个整数 n ，求恰由 n 个节点组成且节点值从 1 到 n 互不相同的 二叉搜索树 有多少种？返回满足题意的二叉搜索树的种数。

输入：n = 3
输出：5

给定一个有序序列 1⋯n，为了构建出一棵二叉搜索树，我们可以遍历每个数字 i，将该数字作为树根，将 1⋯(i−1) 序列作为左子树，将 (i+1)⋯n 序列作为右子树。接着我们可以按照同样的方式递归构建左子树和右子树。

dp[3]，就是 元素1为头结点搜索树的数量 + 元素2为头结点搜索树的数量 + 元素3为头结点搜索树的数量
dp[3] = dp[2] * dp[0] + dp[1] * dp[1] + dp[0] * dp[2]

dp[i] += dp[以j为头结点左子树节点数量] * dp[以j为头结点右子树节点数量]
*/
{
    const numTrees = (n) => {
        let dp = new Array(n + 1).fill(0);
        dp[0] = 1;
        dp[1] = 1;

        for (let i = 2; i <= n; i++) {
            for (let j = 1; j <= i; j++) {
                dp[i] += dp[j - 1] * dp[i - j];
            }
        }

        return dp[n];
    };
}