//106. Construct Binary Tree from Inorder and Postorder Traversal
/*
Given two integer arrays inorder and postorder where inorder is the inorder traversal of a binary tree and postorder is the postorder traversal of the same tree, construct and return the binary tree.
*/
// 切割点在后序数组的最后一个元素，就是用这个元素来切割中序数组的，所以必要先切割中序数组
{
    // no duplicate value

    var buildTree = function (inorder, postorder) {

        if (postorder.length === 0) return postorder;

        let rootPtr = postorder.length - 1;

        const dfs = (start, end) => {
            if (end < start) return null;

            let rootVal = postorder[rootPtr--];

            let localRoot = new TreeNode(rootVal); //create a root node

            let delimiterIndex = inorder.indexOf(rootVal);

            localRoot.right = dfs(delimiterIndex + 1, end);
            localRoot.left = dfs(start, delimiterIndex - 1);

            return localRoot;

        }

        return dfs(0, inorder.length - 1);
    };
    //Construct Binary Tree from Preorder and Inorder Traversal
}