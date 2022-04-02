// 572. Subtree of Another Tree
/*
Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.
*/
{
    const isEqual = (n1, n2) => {
        if (n1 === null && n2 === null) return true;
        if (n1 === null || n2 === null) return false;
        return n1.val == n2.val && isEqual(n1.left, n2.left) && isEqual(n1.right, n2.right);
    };

    var isSubtree = function (root, subRoot) {
        if (root === null && subRoot === null) return true;
        if (root == null) return subRoot == null; // important

        if (isEqual(root, subRoot)) return true;

        return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)

    };
}
{
    const isEqual = (n1, n2) => {
        if (n1 === null && n2 === null) return true;
        if (n1 === null || n2 === null) return false;
        return n1.val == n2.val && isEqual(n1.left, n2.left) && isEqual(n1.right, n2.right);
    };

    var isSubtree = function (root, subRoot) {
        if (root === null && subRoot === null) return true;
        let res = false;

        const dfs = (n, subRoot) => {
            if (n === null) return;

            if (res) return res;

            if (n.val === subRoot.val) {
                res = isEqual(n, subRoot);//if (res) return res; // cannot put here
            }
            dfs(n.left, subRoot);
            dfs(n.right, subRoot);
        }

        dfs(root, subRoot);

        return res

    };
    // Most Frequent Subtree Sum
    // Construct Binary Tree from String
    // Print Binary Tree
    // Second Minimum Node In a Binary Tree
}