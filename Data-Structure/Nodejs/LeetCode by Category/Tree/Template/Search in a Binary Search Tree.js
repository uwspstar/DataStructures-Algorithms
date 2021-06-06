//700. Search in a Binary Search Tree
/*
You are given the root of a binary search tree (BST) and an integer val.

Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.
*/
/*
二叉搜索树是一个有序树：

若它的左子树不空，则左子树上所有结点的值均小于它的根结点的值；
若它的右子树不空，则右子树上所有结点的值均大于它的根结点的值；
它的左、右子树也分别为二叉搜索树
这就决定了，二叉搜索树，递归遍历和迭代遍历和普通二叉树都不一样。
*/
{
    var searchBST = function(root, val) {  
        if (root == null || root.val == val) return root;
        if (root.val > val) return searchBST(root.left, val);
        if (root.val < val) return searchBST(root.right, val);
        return null;
    };
}
{
    var searchBST = function (root, val) {
        let node = root;

        while (node) {
            if (val === node.val) {
                return node;
            } else if (val > node.val) {
                node = node.right;
            } else {
                node = node.left;
            }
        }

        return null;
    };

}
/*
Construct String from Binary Tree
All Nodes Distance K in Binary Tree
Longest ZigZag Path in a Binary Tree
*/