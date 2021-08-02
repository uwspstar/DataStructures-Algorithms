//235. Lowest Common Ancestor of a Binary Search Tree
/*
Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).” 

Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8 Output: 6
Explanation: The LCA of nodes 2 and 8 is 6.

Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4 Output: 2
Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.

Input: root = [2,1], p = 2, q = 1 Output: 2

根据BST性质可知：

如果 p.val 和 q.val 都比 root.val 小，则 p、q 肯定在 root 的左子树，递归左子树
如果 p.val 和 q.val 都比 root.val 大，则 p、q 肯定在 root 的右子树，递归右子树

*/
{
    //根据BST性质可知：
    //如果 p.val 和 q.val 都比 root.val 小，则 p、q 肯定在 root 的左子树
    //如果 p.val 和 q.val 都比 root.val 大，则 p、q 肯定在 root 的右子树
    var lowestCommonAncestor = function (root, p, q) {
        if (p.val < root.val && q.val < root.val)
            return lowestCommonAncestor(root.left, p, q);
        if (p.val > root.val && q.val > root.val)
            return lowestCommonAncestor(root.right, p, q);
        else
            return root;
    }
}
{
    var lowestCommonAncestor = function (root, p, q) {

        if (root === null || root === p || root === q) return root;

        let left = lowestCommonAncestor(root.left, p, q);
        let right = lowestCommonAncestor(root.right, p, q);

        //if not find in left side
        if (left === null) return right;

        //if not find in right side
        if (right === null) return left;

        return root;
    };

    //Smallest Common Region
    //Lowest Common Ancestor of a Binary Tree II
    //Lowest Common Ancestor of a Binary Tree IV
}
{
    var lowestCommonAncestor = function (root, p, q) {
        if ((root.val - p.val) * (root.val - q.val) <= 0) return root;
        //否则，p和q位于root的同一侧，就继续往下找
        return lowestCommonAncestor(p.val < root.val ? root.left : root.right, p, q);
    }
}
{
    var lowestCommonAncestor = function (root, p, q) {
        if (root === null) return root;

        if (p.val < root.val && q.val < root.val) {
            return lowestCommonAncestor(root.left, p, q);
        } else if (p.val > root.val && q.val > root.val) {
            return lowestCommonAncestor(root.right, p, q);
        } else return root;
    };
}