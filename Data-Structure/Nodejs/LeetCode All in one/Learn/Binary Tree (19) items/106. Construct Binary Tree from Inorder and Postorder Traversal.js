//106. Construct Binary Tree from Inorder and Postorder Traversal
/*
Given two integer arrays inorder and postorder where inorder is the inorder traversal of a binary tree and postorder is the postorder traversal of the same tree, construct and return the binary tree.

Input: inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
Output: [3,9,20,null,null,15,7]

Input: inorder = [-1], postorder = [-1] 
Output: [-1]

*/
// 切割点在后序数组的最后一个元素，就是用这个元素来切割中序数组的，所以必要先切割中序数组
{
    // no duplicate value

    var buildTree = function (inorder, postorder) {

        if (postorder.length === 0) return postorder;

        const dfs = (start, end) => {
            if (end < start) return null;

            let rootVal = postorder.pop(); // last one is new root node

            let localRoot = new TreeNode(rootVal);

            let delimiterIndex = inorder.indexOf(rootVal);

            localRoot.right = dfs(delimiterIndex + 1, end);
            localRoot.left = dfs(start, delimiterIndex - 1);

            return localRoot;

        }

        return dfs(0, inorder.length - 1);
    };

    //Construct Binary Tree from Preorder and Inorder Traversal
}
//105:
//Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7] Output: [3,9,20,null,null,15,7]
{
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
}