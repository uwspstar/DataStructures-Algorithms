/*
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1] Output: 6

具体来说，仅仅对于位置i，能装下多少水呢？能装 2 格水，因为height[i]的高度为 0，而这里最多能盛 2 格水，2-0=2。 为什么位置i最多能盛 2 格水呢？因为，位置i能达到的水柱高度和其左边的最高柱子、右边的最高柱子有关，我们分别称这两个柱子高度为l_max和r_max；位置 i 最大的水柱高度就是min(l_max, r_max)。
# 左边最高的柱子,# 右边最高的柱子
water[i] = min(max(height[0..i]), max(height[i..end])) - height[i]
*/
{
    // 暴力算法：
    var trap = function (height) {
        let N = height.length;
        let res = 0;
        for (let i = 1; i < N - 1; i++) {
            let l_max = 0, r_max = 0;
            for (let j = i; j < N; j++)
                r_max = Math.max(r_max, height[j]);// 找右边最高的柱子
            for (let j = i; j >= 0; j--)
                l_max = Math.max(l_max, height[j]);// 找左边最高的柱子   
            res += Math.min(l_max, r_max) - height[i];
        }
        return res;
    }
}
{
    //备忘录优化
    var trap = function (height) {
        let N = height.length, res = 0, l_max = [], r_max = [];
        l_max[0] = height[0];
        r_max[N - 1] = height[N - 1];

        for (let i = 1; i < N; i++)
            l_max[i] = Math.max(height[i], l_max[i - 1]);// 从左向右计算 l_max
        for (let i = N - 2; i >= 0; i--)
            r_max[i] = Math.max(height[i], r_max[i + 1]); // 从右向左计算 r_max   
        for (let i = 1; i < N - 1; i++)
            res += Math.min(l_max[i], r_max[i]) - height[i];

        return res;
    }
}
{
    //双指针解法
    var trap = function (height) {
        let N = height.length;
        let res = 0;
        let l_max = height[0], r_max = height[N - 1];
        let left = 0, right = N - 1;

        while (left <= right) {
            l_max = Math.max(l_max, height[left]);
            r_max = Math.max(r_max, height[right]);

            // res += Math.min(l_max, r_max) - height[i]
            if (l_max < r_max) {
                res += l_max - height[left];
                left++;
            } else {
                res += r_max - height[right];
                right--;
            }
        }

        return res;
    }
}

