/*
基本思路
前文 手把手刷二叉树总结篇 说过二叉树的递归分为「遍历」和「分解问题」两种思维模式，这道题可以同时使用这两种思维模式。

遍历的思路就是单纯用 traverse 函数遍历一遍 BST，找到落在区间的元素，分解问题的思路关键是要明确函数定义，然后利用这个定义。

标签：二叉搜索树

解法代码
*/

// 遍历的思路
class Solution {

    int sum = 0;

    public int rangeSumBST(TreeNode root, int low, int high) {
        if (root == null)
            return 0;
        // 遍历一遍 BST 计算区间元素和
        traverse(root, low, high);
        return sum;
    }

    void traverse(TreeNode root, int low, int high) {
        if (root == null) {
            return;
        }
        if (root.val < low) {
            // 目标区间在右子树
            traverse(root.right, low, high);
        } else if (root.val > high) {
            // 目标区间在左子树
            traverse(root.left, low, high);
        } else {
            // root.val 落在目标区间，累加 sum
            sum += root.val;
            // 继续遍历左右子树
            traverse(root.right, low, high);
            traverse(root.left, low, high);
        }
    }
}

// 分解问题的思路
class Solution2 {
    // 定义：输入一个 BST，计算值落在 [low, high] 之间的元素之和
    public int rangeSumBST(TreeNode root, int low, int high) {
        if (root == null)
            return 0;
        if (root.val < low) {
            // 目标区间在右子树
            return rangeSumBST(root.right, low, high);
        } else if (root.val > high) {
            // 目标区间在左子树
            return rangeSumBST(root.left, low, high);
        } else {
            // 以 root 为根的这棵 BST 落在 [low, high] 之间的元素之和，
            // 等于 root.val 加上左右子树落在区间的元素之和
            return root.val
                    + rangeSumBST(root.left, low, high)
                    + rangeSumBST(root.right, low, high);
        }
    }
}
