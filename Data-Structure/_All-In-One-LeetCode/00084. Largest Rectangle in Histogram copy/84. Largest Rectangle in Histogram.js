//84. 柱状图中最大的矩形
/*
给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。

求在该柱状图中，能够勾勒出来的矩形的最大面积。

输入：heights = [2,1,5,6,2,3]
输出：10
解释：最大的矩形为图中红色区域，面积为 10
*/
{
    var largestRectangleArea = function (heights) {
        let max = 0;
        const stack = [-1];

        for (let i = 0; i < heights.length; i++) {
            while (peek(stack) !== -1 && heights[peek(stack)] >= heights[i]) {
                const currentHeight = heights[stack.pop()];
                const currentWidth = i - peek(stack) - 1;
                max = Math.max(max, currentHeight * currentWidth);
            }

            stack.push(i);
        }

        while (peek(stack) !== -1) {
            const currentHeight = heights[stack.pop()];
            const currentWidth = heights.length - peek(stack) - 1;
            max = Math.max(max, currentHeight * currentWidth);
        }

        return max;
    };

    function peek(stack) {
        return stack[stack.length - 1];
    }
}