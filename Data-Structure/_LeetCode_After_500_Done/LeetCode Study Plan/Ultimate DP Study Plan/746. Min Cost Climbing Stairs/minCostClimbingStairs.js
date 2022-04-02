{
    //所以dp[i] = min(dp[i - 1], dp[i - 2]) + cost[i];
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
    }
}