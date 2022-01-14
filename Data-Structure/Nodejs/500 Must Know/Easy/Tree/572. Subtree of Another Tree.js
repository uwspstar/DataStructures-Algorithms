//572. Subtree of Another Tree
/*
Given the roots of two binary trees, root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. 

The tree could also be considered as a subtree of itself.
*/
{
    var isSubtree = function (root, subRoot) {

        if (root === null && subRoot === null) return true;

        let res = false;

        const isEqual = (n1, n2) => {
            if (!n1 && !n2) return true;
            if (!n1 || !n2) return false;
            return n1.val === n2.val && isEqual(n1.left, n2.left) && isEqual(n1.right, n2.right);
        };

        const dfs = (n) => {
            if (n === null) return;

            if (res) return res;

            if (n.val === subRoot.val) {
                res = isEqual(n, subRoot);
                //if (res) return res; // cannot put here
            }
            dfs(n.left, subRoot);
            dfs(n.right, subRoot);
        }

        dfs(root);

        return res

    };
}
//Most Frequent Subtree Sum