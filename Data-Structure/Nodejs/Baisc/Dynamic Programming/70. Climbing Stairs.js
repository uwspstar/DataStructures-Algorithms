//70. Climbing Stairs
/*
ou are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top? 

Input: n = 2 Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps 

Input: n = 3 Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/
/*
One can reach i^{th} step in one of the two ways:

Taking a single step from (i-1)^{th} step.

Taking a step of 22 from (i-2)^{th} step.

So, the total number of ways to reach i^{th} is equal to sum of ways of reaching (i-1)^{th}
th step and ways of reaching (i-2)^{th} step.

Let dp[i]dp[i] denotes the number of ways to reach on i th
  step: dp[i]=dp[i-1]+dp[i-2]
*/
{
    var climbStairs = function (n) {
        if (n === 1) return 1;
        if (n === 2) return 2;
        if (n === 3) return 3;
        let dp1 = 1;
        let dp2 = 1;
        for (let i = 2; i <= n; i++) {
            let tmp = dp2;
            dp2 = dp1 + dp2;
            dp1 = tmp;
        }
        return dp2;
    };
}