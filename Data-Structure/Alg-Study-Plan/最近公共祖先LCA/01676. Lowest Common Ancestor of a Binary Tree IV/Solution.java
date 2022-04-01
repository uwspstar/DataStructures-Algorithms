/*
基本思路
236. 二叉树的最近公共祖先 让你算两个节点的最近公共祖先，现在让你算多个节点的最近公共祖先。把这些节点装到 HashSet 里面方便迅速判断就行了，其他的逻辑和上一道题一模一样。

标签：二叉树

解法代码
*/
class Solution {
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode[] nodes) {
        HashSet<Integer> set = new HashSet<>();
        // 转化到集合中
        for (TreeNode node : nodes) {
            set.add(node.val);
        }
        return LCA(root, set);
    }

    private TreeNode LCA(TreeNode root, HashSet<Integer> set) {
        // base case
        if (root == null) return null;
        if (set.contains(root.val)) return root;

        TreeNode left = LCA(root.left, set);
        TreeNode right = LCA(root.right, set);
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