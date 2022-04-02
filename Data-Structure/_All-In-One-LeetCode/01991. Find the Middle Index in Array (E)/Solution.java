public class Solution {
    public int findMiddleIndex(int[] nums) {
        int totalSum = 0, leftSum = 0;

        for (int i = 0; i < nums.length; i++) {
            totalSum += nums[i];
        }

        for (int i = 0; i < nums.length; leftSum += nums[i++]) {
            if (leftSum * 2 == totalSum - nums[i]) {
                return i;
            }
        }

        return -1;
    }
}
