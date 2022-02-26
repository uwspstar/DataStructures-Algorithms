//二叉树问题虽然简单，但是暗含了动态规划和回溯算法等高级算法的思想。

/***** 解法一，回溯算法思路 *****/
/*
 * 但为什么需要在前序位置增加 depth，在后序位置减小 depth？
 * 
 * 因为前面说了，前序位置是进入一个节点的时候，后序位置是离开一个节点的时候，depth 记录当前递归到的节点深度，所以要这样维护。
 * 
 * 当然，你也很容易发现一棵二叉树的最大深度可以通过子树的最大高度推导出来，这就是分解问题计算答案的思路。
 * 
 */

class Solution {

    // 记录最大深度
    int res = 0;
    // 记录遍历到的节点的深度
    int depth = 0;

    // 主函数
    int maxDepth(TreeNode root) {
        traverse(root);
        return res;
    }

    // 二叉树遍历框架
    void traverse(TreeNode root) {
        if (root == null) {// 到达叶子节点，更新最大深度
            res = Math.max(res, depth);
            return;
        }

        depth++;// 前序位置

        traverse(root.left);
        traverse(root.right);

        depth--;// 后序位置
    }
}

class Solution {

    int depth = 0;
    int res = 0;

    public int maxDepth(TreeNode root) {
        traverse(root);
        return res;
    }

    // 遍历二叉树
    void traverse(TreeNode root) {
        if (root == null) {
            return;
        }

        // 前序遍历位置
        depth++;
        // 遍历的过程中记录最大深度
        res = Math.max(res, depth);
        traverse(root.left);
        traverse(root.right);
        // 后序遍历位置
        depth--;
    }
}

/***** 解法二，动态规划思路 *****/
// 整棵树的最大深度等于左右子树的最大深度取最大值，
// 然后再加上根节点自己
class Solution2 {
    // 定义：输入一个节点，返回以该节点为根的二叉树的最大深度
    public int maxDepth(TreeNode root) {
        if (root == null) {
            return 0;
        }
        int leftMax = maxDepth(root.left);
        int rightMax = maxDepth(root.right);

        // 根据左右子树的最大深度推出原二叉树的最大深度
        return 1 + Math.max(leftMax, rightMax);
    }
}
/*
为什么主要的代码逻辑集中在后序位置？

因为这个思路正确的核心在于，你确实可以通过子树的最大高度推导出原树的高度，所以当然要首先利用递归函数的定义算出左右子树的最大深度，然后推出原树的最大深度，主要逻辑自然放在后序位置
*/