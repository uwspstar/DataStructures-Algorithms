// 209. Minimum Size Subarray Sum
// 代码模版 : subarray, substring
/*
Given an array of positive integers nums and a positive integer target, return the minimal length of a contiguous subarray [nums_l, nums_l+1, ..., nums_r-1, nums_r] of which the sum is greater than or equal to target. 

If there is no such subarray, return 0 instead. 

Input: target = 7, nums = [2,3,1,2,4,3] Output: 2

Explanation: The subarray [4,3] has the minimal length under the problem constraint.

*/

// positive integer , how about negative
{
    var minSubArrayLen = function (target, A) {
        
        if (A === null  || A.length === 0) return 0;
        let sum = 0;
        let ans = Infinity; // If there is no such subarray, return 0 instead. , we can use ans = 0;

        let i = 0;
        for (let j = 0; j < A.length; j++) {
            sum += A[j];
            while (sum >= target) {
                ans = Math.min(ans, j - i + 1);
                sum -= A[i];
                i++;
            }
        }
        return (ans !== Infinity) ? ans : 0; // very important, 
        // If there is no such subarray, return 0 instead. , we can initial ans = 0; then, we do not need this line
    }
}