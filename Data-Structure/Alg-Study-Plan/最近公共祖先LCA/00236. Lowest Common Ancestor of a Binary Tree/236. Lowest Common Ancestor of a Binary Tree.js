// 236. Lowest Common Ancestor of a Binary Tree
/*
Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”

Example 1:
Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3
Explanation: The LCA of nodes 5 and 1 is 3.

Example 2:
Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
Output: 5
Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.
*/
{
    // 如果一个节点能够在它的左右子树中分别找到p和q，则该节点为LCA节点。
    var lowestCommonAncestor = function (root, p, q) {
        if (root === null) return root;
        if (root === p || root === q) return root; // base case

        let left = lowestCommonAncestor(root.left, p, q);
        let right = lowestCommonAncestor(root.right, p, q);

        if (left === null) return right;
        if (right === null) return left;

        return root;
    };
}
{
    // 情况 1，如果 p 和 q 都在以 root 为根的树中，那么 left 和 right 一定分别是 p 和 q（从 base case 看出来的）。
    // 情况 2，如果 p 和 q 都不在以 root 为根的树中，直接返回 null。
    // 情况 3，如果 p 和 q 只有一个存在于 root 为根的树中，函数返回该节点。

    var lowestCommonAncestor = function (root, p, q) {
        if (root === null) return root;
        if (root === p || root === q) return root;

        let left = lowestCommonAncestor(root.left, p, q);
        let right = lowestCommonAncestor(root.right, p, q);

        // case 1 :
        if (left !== null && right !== null) return root;
        // case 2 :
        if (left === null && right === null) return null;
        // case 3
        return left == null ? right : left;
    };

    // Smallest Common Region
    // Lowest Common Ancestor of a Binary Tree II
    // Lowest Common Ancestor of a Binary Tree IV
    // Step-By-Step Directions From a Binary Tree Node to Another
}