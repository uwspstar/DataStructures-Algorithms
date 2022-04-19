// 669. Trim a Binary Search Tree
/*
Given the root of a binary search tree and the lowest and highest boundaries as low and high, trim the tree so that all its elements lies in [low, high]. Trimming the tree should not change the relative structure of the elements that will remain in the tree (i.e., any node's descendant should remain a descendant). It can be proven that there is a unique answer.

Return the root of the trimmed binary search tree. Note that the root may change depending on the given bounds.

Example 1:
Input: root = [1,0,2], low = 1, high = 2
Output: [1,null,2]

Example 2:
Input: root = [3,0,4,null,2,null,null,1], low = 1, high = 3
Output: [3,2,null,1]
*/
{
    var trimBST = function (root, low, high) {
        if (root === null) return null;
        if (root.val < low) {
            // 直接返回 root.right
            // 等于删除 root 以及 root 的左子树
            return trimBST(root.right, low, high)
        }

        if (root.val > high) {
            // 直接返回 root.right
            // 等于删除 root 以及 root 的左子树
            return trimBST(root.left, low, high)
        }

        // 闭区间 [lo, hi] 内的节点什么都不做
        root.left = trimBST(root.left, low, high);
        root.right = trimBST(root.right, low, high);

        return root;
    };
    // Binary Tree Upside Down (M)
    // Count Servers that Communicate (M)
    // Design an Expression Tree With Evaluate Function (M)
}