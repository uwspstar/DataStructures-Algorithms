//538. 把二叉搜索树转换为累加树
/*
给出二叉 搜索 树的根节点，该树的节点值各不相同，请你将其转换为累加树（Greater Sum Tree），使每个节点 node 的新值等于原树中大于或等于 node.val 的值之和。

提醒一下，二叉搜索树满足下列约束条件：

节点的左子树仅包含键 小于 节点键的节点。
节点的右子树仅包含键 大于 节点键的节点。
左右子树也必须是二叉搜索树。

本题和 1038: https://leetcode-cn.com/problems/binary-search-tree-to-greater-sum-tree/ 相同


*/
{
    var convertBST = function (root) {
        let pre = 0;
        const ReverseInOrder = (cur) => {
            if (cur) {
                ReverseInOrder(cur.right);
                cur.val += pre;
                pre = cur.val;
                ReverseInOrder(cur.left);
            }
        }
        ReverseInOrder(root);
        return root;
    };
}
{
    var convertBST = function (root) {
        let pre = 0;
        let cur = root;
        let stack = [];
        while (cur !== null || stack.length !== 0) {
            while (cur !== null) {
                stack.push(cur);
                cur = cur.right;
            }
            cur = stack.pop();
            cur.val += pre;
            pre = cur.val;
            cur = cur.left;
        }
        return root;
    };
}