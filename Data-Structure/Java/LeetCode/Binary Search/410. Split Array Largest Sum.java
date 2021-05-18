/*
410. Split Array Largest Sum (Hard)

Given an array nums which consists of non-negative integers and an integer m, you can split the array into m non-empty continuous subarrays.

Write an algorithm to minimize the largest sum among these m subarrays.

Example 1: Input: nums = [7,2,5,10,8], m = 2 Output: 18
Explanation:
There are four ways to split nums into two subarrays.
The best way is to split it into [7,2,5] and [10,8],
where the largest sum among the two subarrays is only 18.
Example 2: Input: nums = [1,2,3,4,5], m = 2 Output: 9
Example 3: Input: nums = [1,4,4], m = 3 Output: 4
*/
class Solution {
    public int splitArray(int[] nums, int m) {
        int sum = Arrays.stream(nums).sum();
        int max = Arrays.stream(nums).max().getAsInt();
        return binary(nums, m, sum, max);
    }
    //high =  sum; low = max;
    private int binary(int[] nums, int m, int high, int low) {
        int mid = 0; // subArraySum 
        while (low <= high) {
            mid = low + (high - low) / 2;// subArraySum 
            if (valid(nums, m, mid)) high = mid - 1;
            else low = mid + 1;
        }
        return low;
    }

    private boolean valid(int[] nums, int m, int subArraySum) {
        int curSum = 0;
        int count = 1;
        for (int num: nums) {
            curSum += num;
            if (curSum > subArraySum) {
                curSum = num;
                count++;
                if (count > m) return false;
            }
        }
        return true;
    }
}
/*
Counting Bits
Maximum Height by Stacking Cuboids
Count Submatrices With All Ones
*/
/*
1552. Magnetic Force Between Two Balls
1482. Minimum Number of Days to Make m Bouquets
1283. Find the Smallest Divisor Given a Threshold
1292. Maximum Side Length of a Square with Sum Less than or Equal to Threshold

*/