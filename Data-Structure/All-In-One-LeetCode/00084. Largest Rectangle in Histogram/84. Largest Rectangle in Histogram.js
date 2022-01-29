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