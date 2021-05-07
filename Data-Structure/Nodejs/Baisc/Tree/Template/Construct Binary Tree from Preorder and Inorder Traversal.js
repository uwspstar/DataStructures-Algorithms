/*105. Construct Binary Tree from Preorder and Inorder Traversal
Medium
Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.
*/
{
    var buildTree = function (preorder, inorder) {

        if (preorder.length === 0) return preorder;

        const dfs = (start, end) => {
            if (end < start) return null;

            let rootVal = preorder.shift();

            let localRoot = new TreeNode(rootVal);

            let delimiterIndex = inorder.indexOf(rootVal);

            localRoot.left = dfs(start, delimiterIndex - 1);
            localRoot.right = dfs(delimiterIndex + 1, end);

            return localRoot;
        }
        return dfs(0, inorder.length - 1);
    };
}
/*
Find the Celebrity
Array Transformation
Find a Corresponding Node of a Binary Tree in a Clone of That Tree
*/