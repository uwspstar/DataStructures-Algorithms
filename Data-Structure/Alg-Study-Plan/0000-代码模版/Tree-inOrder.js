//[Easy] 94.binary-tree-inorder-traversal
//给定一个二叉树的根节点 root ，返回它的 中序 遍历。 递归算法很简单，你可以通过迭代算法完成吗？
{
    var inorderTraversal = function (root) {
        let result = []
        if (root === null) return result;

        let stack = [];
        let p = root;
        while (stack.length > 0 || p !== null) {
            while (p) {
                stack.push(p);
                p = p.left;
            }
            let node = stack.pop();
            result.push(node.val);
            p = node.right;
        }

        return result;
    };
}
{
    var inorderTraversal = function (root) {
        let res = [];
        if (root === null) return res;

        const inorder = root => {
            root.left && inorder(root.left);
            res.push(root.val);
            root.right && inorder(root.right);
        }

        inorder(root);

        return res;
    };

}