/*
基本思路
这里要用到前文 手把手刷二叉树总结篇 说过的后序位置的妙用。

一般的拍脑袋思路是，遍历二叉树，然后对每一个节点计算左右的最大高度。

但是计算一棵二叉树的最大深度也需要递归遍历这棵树的所有节点，如果对每个节点都算一遍最大深度，时间复杂度是比较高的。

所以最好的解法是反过来思考，只计算一次最大深度，计算的过程中在后序遍历位置顺便判断二叉树是否平衡：

对于每个节点，先算出来左右子树的最大高度，然后在后序遍历的位置根据左右子树的最大高度判断平衡性。

标签：二叉树，后序遍历

解法代码
*/

class Solution {
    public boolean isBalanced(TreeNode root) {
        maxDepth(root);
        return isBalanced;
    }

    // 记录二叉树是否平衡
    boolean isBalanced = true;

    // 输入一个节点，返回以该节点为根的二叉树的最大深度
    int maxDepth(TreeNode root) {
        if (root == null) {
            return 0;
        }
        // if (!isBalanced) {
        //     // 随便返回一个值即可，旨在结束递归
        //     return -666;
        // }

        int leftMaxDepth = maxDepth(root.left);
        int rightMaxDepth = maxDepth(root.right);

        // 后序遍历位置
        // 如果左右最大深度大于 1，就不是平衡二叉树
        if (Math.abs(rightMaxDepth - leftMaxDepth) > 1) {
            isBalanced = false;
        }

        return 1 + Math.max(leftMaxDepth, rightMaxDepth);
    }
}