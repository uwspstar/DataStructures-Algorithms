//42. Trapping Rain Water
/*
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

 

Example 1:


Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9
*/
{
    var trap = function (height) {
        if (height.length == 0) return 0;
        let N = height.length;
        let res = 0;
        // 数组充当备忘录
        let leftMax = [];
        let rightMax = [];
        // 初始化 base case
        leftMax[0] = height[0];
        rightMax[N - 1] = height[N - 1];

        // 从左向右计算 l_max
        for (let i = 1; i < N; i++) {
            leftMax[i] = Math.max(height[i], leftMax[i - 1]);
        }

        // 从右向左计算 r_max
        for (let i = N - 2; i >= 0; i--) {
            rightMax[i] = Math.max(height[i], rightMax[i + 1]);
        }

        // 计算答案
        for (let i = 1; i < N - 1; i++) {
            res += Math.min(leftMax[i], rightMax[i]) - height[i];
        }

        return res;
    }
}