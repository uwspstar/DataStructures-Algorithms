/*
基本思路
前文 手把手刷二叉树总结篇 说过二叉树的递归算法可以分两类，一类是遍历二叉树的类型，一类是分解子问题的类型。

前者较简单，只要运用二叉树的递归遍历框架即可；后者的关键在于明确递归函数的定义，然后利用这个定义。

这题属于前者，可以理解为遍历二叉树的所有相邻节点，然后顺手把这些相邻节点连接起来。

如果是遍历相邻节点，那么就不止是递归左右子树了，因为每一对儿相邻节点可以衍生出三对儿相邻节点：

详细题解：东哥手把手带你套框架刷通二叉树|第一期

标签：数据结构，二叉树

解法代码
*/
class Solution {
    public Node connect(Node root) {
        if (root == null)
            return null;
        connectTwoNode(root.left, root.right);
        return root;
    }

    // 辅助函数
    void connectTwoNode(Node node1, Node node2) {
        if (node1 == null || node2 == null) {
            return;
        }
        /**** 前序遍历位置 ****/
        // 将传入的两个节点连接
        node1.next = node2;

        // 连接相同父节点的两个子节点
        connectTwoNode(node1.left, node1.right);
        connectTwoNode(node2.left, node2.right);
        // 连接跨越父节点的两个子节点
        connectTwoNode(node1.right, node2.left);
    }
}
