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
{
    /**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    const n = nums.length;
    
    // S1 初始化窗口左右指针、窗口长度结果以及当前窗口和
    let left = 0;
    let right = 0;
    let ans = Infinity;
    let sum = 0; 
    
    // S2 模拟像右滑动
    while(right<n){
        // S3 寻找可行解
        sum+=nums[right];
        right++;

        // S4 当已找到可行解时，缩小窗口以优化
        while(sum>=target){
            // S4-1 更新结果值
            ans = Math.min(ans, right-left);
            // S4-2 缩小窗口
            sum-=nums[left];
            left++;
        }
    }

    // 如果 ans 不变，则说明没有符合条件的子数组
    return ans === Infinity ? 0 : ans;
};

// https://leetcode-cn.com/problems/minimum-size-subarray-sum/solution/xing-dai-lu-hua-dong-chuang-kou-suan-fa-8sei6/
}