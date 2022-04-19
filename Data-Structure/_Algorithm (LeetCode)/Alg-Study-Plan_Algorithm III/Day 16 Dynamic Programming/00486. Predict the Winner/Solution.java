public class Solution {
    public boolean PredictTheWinner(int[] nums) {
        int[] dp = new int[nums.length];
        for (int s = nums.length; s >= 0; s--) {
            for (int e = s; e < nums.length; e++) {
                if (s == e) {
                    dp[s] = nums[s];
                } else {
                    int a = nums[s] - dp[e];
                    int b = nums[e] - dp[e - 1];
                    dp[e] = Math.max(a, b);
                }
            }
        }
        return dp[nums.length - 1] >= 0;
    }
}