// [Easy] 144.binary-tree-preorder-traversal

// Given the root of a binary tree, return the preorder traversal of its nodes' values.

// Recursive solution is trivial, could you do it iteratively?
/*
思路是：
    1. 先将根结点入栈
    2. 出栈一个元素，将 右节点 和 左节点 依次入栈
    3. 重复 2 的步骤
*/
{
    //iteratively
    var preorderTraversal = function (root) {
        const result = [];
        if (root === null) return result;

        let stack = [root];

        while (stack.length) {
            let sz = stack.length;
            for (let i = 0; i < sz; i++) {
                let n = stack.pop();
                result.push(n.val);
                if (n.right !== null) stack.push(n.right); // right first
                if (n.left !== null) stack.push(n.left); // left later
            }
        }

        return result;
    };
}
{
    //Recursive
    const preorderTraversal = root => {
        const result = [];

        const dfs = root => {
            if (!root) return;

            result.push(root.val);

            dfs(root.left);
            dfs(root.right);
        }

        dfs(root);
        return result;
    };
}