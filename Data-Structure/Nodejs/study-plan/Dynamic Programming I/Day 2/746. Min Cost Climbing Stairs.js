//746. Min Cost Climbing Stairs
{
    //dp[i]的定义：到达第i个台阶所花费的最少体力为dp[i]。
    //可以有两个途径得到dp[i]，一个是dp[i-1] 一个是dp[i-2]。
    //一定是选最小的，所以dp[i] = min(dp[i - 1], dp[i - 2]) + cost[i];
    //注意这里为什么是加cost[i]，而不是cost[i-1],cost[i-2]之类的，因为题目中说了：每当你爬上一个阶梯你都要花费对应的体力值
    var minCostClimbingStairs = function (cost) {
        let dp = [];
        dp[0] = cost[0];
        dp[1] = cost[1];
        let n = cost.length;
        for (let i = 2; i < n; i++) {
            dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];
        }
        // 注意最后一步可以理解为不用花费，所以取倒数第一步，第二步的最少值
        return Math.min(dp[n - 1], dp[n - 2]);
    };
}