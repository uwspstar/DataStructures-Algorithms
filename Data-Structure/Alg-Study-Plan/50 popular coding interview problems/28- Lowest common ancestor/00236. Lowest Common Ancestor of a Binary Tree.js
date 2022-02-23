// 236. Lowest Common Ancestor of a Binary Tree
/*
Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3
Explanation: The LCA of nodes 5 and 1 is 3.
*/
{
    var lowestCommonAncestor = function (root, p, q) {
        if (root === null) return root;
        if (root === p || root === q) return root;

        let leftLowestCommonAncestor = lowestCommonAncestor(root.left, p, q);
        let rightLowestCommonAncestor = lowestCommonAncestor(root.right, p, q);

        if (leftLowestCommonAncestor === null) return rightLowestCommonAncestor;
        if (rightLowestCommonAncestor === null) return leftLowestCommonAncestor;

        return root;
    };
}