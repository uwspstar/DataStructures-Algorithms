{
    // two color ways
    // https://leetcode-solution-leetcode-pp.gitbook.io/leetcode-solution/thinkings/tree

    // left, right, self
    var postorderTraversal = function (root) {
        if (root === null) return [];
        let white = 0; // has not deal with it
        let grey = 1;  // has done;
        let stack = [[white, root]];
        let res = [];
        while (stack.length > 0) {
            let [color, node] = stack.pop();
            if (color === white) {
                stack.push([grey, node]); //self
                node.right && stack.push([white, node.right]); //right
                node.left && stack.push([white, node.left]); //left

            } else {
                res.push(node.val);
            }
        }
        return res;
    };
}
{
    const postorder = root => {
        if (!root) return
        const outputStack = []
        const stack = [root]

        while (stack.length) {
            const n = stack.pop()
            outputStack.push(n)
            if (n.left) stack.push(n.left)
            if (n.right) stack.push(n.right)
        }

        while (outputStack.length) {
            const n = outputStack.pop()
            console.log(n.val)
        }
    }
}