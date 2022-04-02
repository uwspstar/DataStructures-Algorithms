/*
基本思路
前文 手把手刷二叉树总结篇 说过二叉树的递归分为「遍历」和「分解问题」两种思维模式，这道题需要用到「遍历」的思维。

遍历以 root 为根的这棵二叉树的所有节点，
用 100. 相同的树 中的 isSame 函数判断以该节点为根的子树是否和以 subRoot 为根的那棵树相同。

标签：二叉树

解法代码
*/

class Solution {
    public boolean isSubtree(TreeNode root, TreeNode subRoot) {
        if (root == null) {
            return subRoot == null;
        }
        // 判断以 root 为根的二叉树是否和 subRoot 相同
        if (isSameTree(root, subRoot)) {
            return true;
        }
        // 去左右子树中判断是否有和 subRoot 相同的子树
        return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
    }

    public boolean isSameTree(TreeNode p, TreeNode q) {
        // 判断一对节点是否相同
        if (p == null && q == null) {
            return true;
        }
        if (p == null || q == null) {
            return false;
        }
        if (p.val != q.val) {
            return false;
        }
        // 判断其他节点是否相同
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    }
}