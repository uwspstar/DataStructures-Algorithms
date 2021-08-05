//235. Lowest Common Ancestor of a Binary Search Tree
//235. 二叉搜索树的最近公共祖先
{
    var lowestCommonAncestor = function (root, p, q) {

        if (root === null || root === p || root === q) return root;

        let left = lowestCommonAncestor(root.left, p, q);
        let right = lowestCommonAncestor(root.right, p, q);

        if (left === null) return right;
        if (right === null) return left;

        return root;
    };

}