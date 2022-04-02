//236. Lowest Common Ancestor of a Binary Tree
var lowestCommonAncestor = function (root, p, q) {
    if (root === null) return root;
    if (root === p || root === q) return root;

    let leftLowestCommonAncestor = lowestCommonAncestor(root.left, p, q);
    let rightLowestCommonAncestor = lowestCommonAncestor(root.right, p, q);

    if (leftLowestCommonAncestor === null) return rightLowestCommonAncestor;
    if (rightLowestCommonAncestor === null) return leftLowestCommonAncestor;

    return root;
};