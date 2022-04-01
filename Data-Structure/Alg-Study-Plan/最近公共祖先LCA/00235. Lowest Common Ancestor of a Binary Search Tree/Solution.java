/*
基本思路
比较经典的是 236. 二叉树的最近公共祖先，我在 这篇文章 讲了那道题的解法。

如果在 BST 中寻找最近公共祖先，反而容易很多，主要利用 BST 左小右大（左子树所有节点都比当前节点小，右子树所有节点都比当前节点大）的特点即可。

1、如果 p 和 q 都比当前节点小，那么显然 p 和 q 都在左子树，那么 LCA 在左子树。

2、如果 p 和 q 都比当前节点大，那么显然 p 和 q 都在右子树，那么 LCA 在右子树。

3、一旦发现 p 和 q 在当前节点的两侧，说明当前节点就是 LCA。

标签：二叉树

解法代码
*/
class Solution {
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        if (root == null)
            return null;
        if (p.val > q.val) {
            // 保证 p.val <= q.val，便于后续情况讨论
            return lowestCommonAncestor(root, q, p);
        }
        if (root.val >= p.val && root.val <= q.val) {
            // p <= root <= q
            // 即 p 和 q 分别在 root 的左右子树，那么 root 就是 LCA
            return root;
        }
        if (root.val > q.val) {
            // p 和 q 都在 root 的左子树，那么 LCA 在左子树
            return lowestCommonAncestor(root.left, p, q);
        } else {
            // p 和 q 都在 root 的右子树，那么 LCA 在右子树
            return lowestCommonAncestor(root.right, p, q);
        }
    }

}

class Solution2 {

    TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {
        // 保证 val1 较小，val2 较大
        int val1 = Math.min(p.val, q.val);
        int val2 = Math.max(p.val, q.val);
        return find(root, val1, val2);
    }

    // 在 BST 中寻找 val1 和 val2 的最近公共祖先节点
    TreeNode find(TreeNode root, int val1, int val2) {
        if (root == null) {
            return null;
        }
        if (root.val > val2) {
            // 当前节点太大，去左子树找
            return find(root.left, val1, val2);
        }
        if (root.val < val1) {
            // 当前节点太小，去右子树找
            return find(root.right, val1, val2);
        }
        // val1 <= root.val <= val2
        // 则当前节点就是最近公共祖先
        return root;
    }
}