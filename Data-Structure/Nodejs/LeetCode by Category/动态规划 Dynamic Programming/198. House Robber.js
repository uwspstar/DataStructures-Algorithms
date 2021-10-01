//198. House Robber
/*
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.

Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
Total amount you can rob = 2 + 9 + 1 = 12.

// dp[i][0] means maximum amount of money when not rub this ith house
// dp[i][1] means maximum amount of money when rub this ith house
// 1)  dp[i][0] = max (dp[i- 1][0], dp[i- 1][1]);
// 2)  dp[i][1] = dp[i - 1][0]+ val[i]
// return max (dp[i][1], dp[i][0])
        
*/
{
    const rob = nums => {

        if (nums.length === 0) return 0;
        if (nums.length === 1) return nums[0];
        if (nums.length === 2) return Math.max(nums[0], nums[1])  

        let dp = [];
        let N = nums.length - 1;
        for (let i = 0; i <= N; i++) {
            dp.push([]);
        }

        dp[0][0] = 0;
        dp[0][1] = nums[0];

        for (let i = 1; i <= N; i++) {
            dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1]); //not rob
            dp[i][1] = dp[i - 1][0] + nums[i]; //rob
        } 

        return Math.max(dp[N][0], dp[N][1]); 
    };
}