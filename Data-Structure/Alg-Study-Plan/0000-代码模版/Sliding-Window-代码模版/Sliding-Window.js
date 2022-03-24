/*
初始化慢指针 = 0
初始化 ans

for (快指针 in 可迭代集合) {
    更新窗口内信息
    while (窗口内不符合题意) {
        扩展或者收缩窗口
        慢指针移动
    } 
    更新答案
} 
返回 ans
*/
// 209. Minimum Size Subarray Sum
/*

Given an array of positive integers nums and a positive integer target, return the minimal length of a contiguous subarray [nums_l, nums_l+1, ..., nums_r-1, nums_r] of which the sum is greater than or equal to target. If there is no such subarray, return 0 instead. 

Input: target = 7, nums = [2,3,1,2,4,3] Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.
*/

// positive integer , how about negative
{
    var minSubArrayLen = function (target, A) {

        let sum = 0;
        let ans = Infinity;

        let i = 0; 
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