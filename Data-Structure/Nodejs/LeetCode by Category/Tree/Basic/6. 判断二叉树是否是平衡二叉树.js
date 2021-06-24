/*
110. Balanced Binary Tree

Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:

a binary tree in which the left and right subtrees of every node differ in height by no more than 1.
*/
//因为代码的逻辑其实是求的根节点的高度，而根节点的高度就是这颗树的最大深度，所以才可以使用后序遍历
//a binary tree in which the left and right subtrees of every node differ in height by no more than 1.
{
    var isBalanced = function (root) {
        if (root === null) return true;
        let res = true;
        const dfs = n => {
            if (n === null) return true;

            let left = dfs(n.left);
            let right = dfs(n.right)

            if (Math.abs(left - right) > 1) {
                res = false;
                return -1;
            }

            return 1 + Math.max(left, right)
        }
        dfs(root);
        return res;
    };
    /*
    Find Leaves of Binary Tree
    Flip Equivalent Binary Trees
    Path With Maximum Minimum Value
    */
}
{
    const height = (root) => {
        if (root == null) return -1;
        return 1 + Math.max(height(root.left), height(root.right));
    }
    var isBalanced = function (root) {
        if (root === null) return true;

        return Math.abs(height(root.left) - height(root.right)) < 2
            && isBalanced(root.left)
            && isBalanced(root.right);
    };
    //Maximum Width of Binary Tree
    //Cracking the Safe
    //Find Elements in a Contaminated Binary Tree
}