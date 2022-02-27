//105. Construct Binary Tree from Preorder and Inorder Traversal
{
    var buildTree = function (preorder, inorder) {
        const inorderMap = new Map();
        for (let i = 0; i < inorder.length; i += 1) {
            inorderMap.set(inorder[i], i);
        }

        let preorderIndex = 0;

        const build = (start = 0, end = inorder.length - 1) => {
            if (start > end) {
                return null;
            }


            const root = new TreeNode(preorder[preorderIndex++]);

            root.left = build(start, inorderMap.get(root.val) - 1);
            root.right = build(inorderMap.get(root.val) + 1, end);

            return root;

        }

        return build();
    };
}
{
    var buildTree = function (preorder, inorder) {

        function construct(preorder, inorder) {
            // 找到根节点元素
            let root = preorder[0];
            // 确定左右子树
            let index = inorder.indexOf(root);
            let left = (index === 0 ? null : construct(preorder.slice(1, index + 1), inorder.slice(0, index)));
            let right = (index === inorder.length - 1 ? null : construct(preorder.slice(index + 1), inorder.slice(index + 1)));
            let localRoot = new TreeNode(root, left, right);
            return localRoot;
        }
        return construct(preorder, inorder);
    }
}
