// 145. 二叉树的后序遍历 递归算法很简单，你可以通过迭代算法完成吗？
{
    const postorderTraversal = root => {
        if (root === null) return [];
        let stack = [root];
        let outStack = [];
        let res = [];
        while (stack.length > 0) {
            let n = stack.pop();
            outStack.push(n);
            if (n.left !== null) {
                stack.push(n.left);
            }
            if (n.right !== null) {
                stack.push(n.right);
            }
        }
        while (outStack.length > 0) {
            let n = outStack.pop();
            res.push(n.val);
        }

        return res;
    };
}
{
    var postorderTraversal = function (root) {
        let res = [];
        if (root === null) return res;

        const postOrder = root => {
            if (root === null) return [];
            root.left && postOrder(root.left);
            root.right && postOrder(root.right);
            res.push(root.val) //logic : self
        }

        postOrder(root);
        return res;
    };
}