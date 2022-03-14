// 209. Minimum Size Subarray Sum
/*
Given an array of positive integers nums and a positive integer target, return the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr] of which the sum is greater than or equal to target. If there is no such subarray, return 0 instead.

 

Example 1:

Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.
*/

{
    //return the minimal length of a contiguous subarray 
    var minSubArrayLen = function (target, A) {
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
}