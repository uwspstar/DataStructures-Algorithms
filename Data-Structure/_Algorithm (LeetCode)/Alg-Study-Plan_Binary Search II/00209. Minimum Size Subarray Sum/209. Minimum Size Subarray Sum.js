// 209. Minimum Size Subarray Sum
/*
Given an array of positive integers nums and a positive integer target, return the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr] of which the sum is greater than or equal to target. If there is no such subarray, return 0 instead.

Example 1:
Input: target = 7, nums = [2,3,1,2,4,3] Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.

Example 2:
Input: target = 4, nums = [1,4,4] Output: 1

Example 3:
Input: target = 11, nums = [1,1,1,1,1,1,1,1] Output: 0
*/
{
    // return the minimal length of a contiguous subarray 
    // Approach #2 A better brute force [Accepted] : preSum
    // Approach #3 Using Binary search [Accepted] : preSum + Binary Search
    // Approach #4 Using 2 pointers [Accepted] : t: O(N), s: O(1)
    var minSubArrayLen = function (target, A) {
        if (A === null || A.length === 0) return 0;
        let i = 0;
        let sum = 0;
        let ans = Infinity;

        for (let j = 0; j < A.length; j++) {
            sum += A[j];
            while (sum >= target) {
                ans = Math.min(ans, j - i + 1);
                sum -= A[i];
                i++;
            }
        }
        return (ans != Infinity) ? ans : 0; // very important
    }
    // 1658. Minimum Operations to Reduce X to Zero
    // 2090. K Radius Subarray Averages
    // Minimum Operations to Reduce X to Zero (M)
    // K Radius Subarray Averages (M)
    // Maximum Product After K Increments (M)
}