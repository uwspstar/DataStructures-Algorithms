//746. Min Cost Climbing Stairs
/*
You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.

You can either start from the step with index 0, or the step with index 1.

Return the minimum cost to reach the top of the floor. 

Input: cost = [10,15,20] Output: 15
Explanation: Cheapest is: start on cost[1], pay that cost, and go to the top. 

Input: cost = [1,100,1,1,1,100,1,1,100,1] Output: 6
Explanation: Cheapest is: start on cost[0], and only step on 1s, skipping cost[3].

找出达到楼层顶部的最低花费


1) if 楼层顶部 is i, then the 最低花费 dp[i];
 = min(dp[i - 1],  dp[i - 2]) + cost[i]

(注意这里认为是第一步一定是要花费）

*/
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
    //Word Search
    //Greatest Sum Divisible by Three
    //Delivering Boxes from Storage to Ports
}
