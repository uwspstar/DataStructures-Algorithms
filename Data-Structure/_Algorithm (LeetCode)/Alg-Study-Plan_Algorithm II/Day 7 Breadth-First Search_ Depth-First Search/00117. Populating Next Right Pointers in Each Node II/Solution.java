/*
基本思路
前文 我的算法学习经验 说过二叉树的递归分为「遍历」和「分解问题」两种思维模式。

但这题和 116. 填充每个节点的下一个右侧节点指针 还不一样，输入的不是完全二叉树，所以不好直接用递归。

这题用 BFS 算法 进行层序遍历比较直观，在 for 循环，无非就是想办法遍历所有节点，然后把这个节点和相邻节点连起来罢了。

当然，还有效率更高的方式，就是直接操作指针，不过略有些难懂，暂时不写。

标签：二叉树，BFS 算法

解法代码
*/
class Solution {
    public Node connect(Node root) {
        if (root == null) {
            return null;
        }
        // 二叉树层序遍历框架
        Queue<Node> q = new LinkedList<>();
        q.offer(root);
        while (!q.isEmpty()) {
            int sz = q.size();
            // 遍历一层
            Node pre = null;
            for (int i = 0; i < sz; i++) {
                Node cur = q.poll();
                // 链接当前层所有节点的 next 指针
                if (pre != null) {
                    pre.next = cur;
                }
                pre = cur;
                // 将下一层节点装入队列
                if (cur.left != null) {
                    q.offer(cur.left);
                }
                if (cur.right != null) {
                    q.offer(cur.right);
                }
            }
        }
        return root;
    }
}