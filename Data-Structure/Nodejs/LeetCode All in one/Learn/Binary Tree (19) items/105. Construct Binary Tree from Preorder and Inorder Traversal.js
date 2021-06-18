/*105. Construct Binary Tree from Preorder and Inorder Traversal
Medium
Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.

Input: inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
Output: [3,9,20,null,null,15,7]
 
Input: inorder = [-1], postorder = [-1]
Output: [-1]
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
//Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7] Output: [3,9,20,null,null,15,7]
{
    var buildTree = function (preorder, inorder) {
        if (preorder === null) return preorder;

        const helpBuildTree = (start, end) => {

            if (end < start) return null;

            let rootVal =  preorder.shift();

            let root = new TreeNode(rootVal);

            let delimiter = inorder.indexOf(rootVal);

            root.left = helpBuildTree(start, delimiter);
            root.right = helpBuildTree(delimiter + 1, end);

            return root;
        }

        helpBuildTree(0, preorder.length - 1);
    }
}