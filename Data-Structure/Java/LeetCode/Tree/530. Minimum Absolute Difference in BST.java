//530. Minimum Absolute Difference in BST
//Given the root of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.
/**
 * Definition for a binary tree node. public class TreeNode { int val; TreeNode
 * left; TreeNode right; TreeNode() {} TreeNode(int val) { this.val = val; }
 * TreeNode(int val, TreeNode left, TreeNode right) { this.val = val; this.left
 * = left; this.right = right; } }
 */

// recursion
class Solution {
    int pre;
    int ans;

    public int getMinimumDifference(TreeNode root) {
        ans = Integer.MAX_VALUE;
        pre = -1;
        dfs(root);
        return ans;
    }

    public void dfs(TreeNode root) {
        if (root == null) {
            return;
        }

        if (root.left != null) {
            dfs(root.left);
        }

        if (pre == -1) {
            pre = root.val;
        } else {
            ans = Math.min(ans, root.val - pre);
            pre = root.val;
        }

        if (root.right != null) {
            dfs(root.right);
        }
    }
}

// Iteration
class Solution {
    public int getMinimumDifference(TreeNode root) {
        int ans = Integer.MAX_VALUE;
        int pre = -1;

        Stack<TreeNode> stack = new Stack<TreeNode>();
        TreeNode p = root;

        while (!stack.empty() || p != null) {
            while (p != null) {
                stack.push(p);
                p = p.left;
            }
            TreeNode n = stack.pop();

            if (pre == -1) {
                pre = n.val;
            } else {
                ans = Math.min(ans, n.val - pre);
                pre = n.val;
            }

            p = n.right;
        }
        return ans;
    }
}