// /14. 二叉树剪枝
/*给定二叉树根结点 root ，此外树的每个结点的值要么是 0，要么是 1。

返回移除了所有不包含 1 的子树的原二叉树。

( 节点 X 的子树为 X 本身，以及所有 X 的后代。)

示例1:
输入: [1,null,0,0,1]
输出: [1,null,0,null,1]
 
解释: 
只有红色节点满足条件“所有不包含 1 的子树”。
右图为返回的答案。

class Solution {
    public TreeNode pruneTree(TreeNode root) {
        return containsOne(root) ? root : null;
    }

    public boolean containsOne(TreeNode node) {
        if (node == null) return false;
        boolean a1 = containsOne(node.left);
        boolean a2 = containsOne(node.right);
        if (!a1) node.left = null;
        if (!a2) node.right = null;
        return node.val == 1 || a1 || a2;
    }
}

作者：LeetCode
链接：https://leetcode-cn.com/problems/binary-tree-pruning/solution/er-cha-shu-jian-zhi-by-leetcode/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
*/
/*
 后续遍历，对于每个节点：
如果左子树需要剪枝，右子树需要剪枝，当前节点值为 0 也需要剪枝，
返回剪枝后的结果。即：return (!root.left && !root.right && root.val === 0) ? null : root;
*/
var pruneTree = function (root) {
    if (root === null) return root;
    root.left = pruneTree(root.left);
    root.right = pruneTree(root.right);
    return (root.left === null && root.right === null && root.val === 0) ? null : root;
};

