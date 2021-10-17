//53. Maximum Subarray
{
    var maxSubArray = function(nums) {
        //dp[i] : Maximum Sum of the Subarray
        
        let N = nums.length - 1;
        
        let dp = [nums[0]];
        let ans =  [nums[0]];
        
        for (let i = 1; i <= N; i++) {
            
            dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
            ans = Math.max(ans, dp[i]);
        }
        
        return ans;
        
    }
}