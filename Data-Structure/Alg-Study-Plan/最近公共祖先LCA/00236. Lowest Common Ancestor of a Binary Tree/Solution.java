/*
基本思路
经典问题了，先给出递归函数的定义：给该函数输入三个参数 root，p，q，它会返回一个节点：

情况 1，如果 p 和 q 都在以 root 为根的树中，函数返回的即使 p 和 q 的最近公共祖先节点。

情况 2，那如果 p 和 q 都不在以 root 为根的树中怎么办呢？函数理所当然地返回 null 呗。

情况 3，那如果 p 和 q 只有一个存在于 root 为根的树中呢？函数就会返回那个节点。

根据这个定义，分情况讨论：

情况 1，如果 p 和 q 都在以 root 为根的树中，那么 left 和 right 一定分别是 p 和 q（从 base case 看出来的）。

情况 2，如果 p 和 q 都不在以 root 为根的树中，直接返回 null。

情况 3，如果 p 和 q 只有一个存在于 root 为根的树中，函数返回该节点。

详细题解：Git原理之最近公共祖先

标签：二叉树

解法代码
*/
class Solution {
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        // base case
        if (root == null) return null;
        if (root == p || root == q) return root;

        TreeNode left = lowestCommonAncestor(root.left, p, q);
        TreeNode right = lowestCommonAncestor(root.right, p, q);
        // 情况 1
        if (left != null && right != null) {
            return root;
        }
        // 情况 2
        if (left == null && right == null) {
            return null;
        }
        // 情况 3
        return left == null ? right : left;
    }
}