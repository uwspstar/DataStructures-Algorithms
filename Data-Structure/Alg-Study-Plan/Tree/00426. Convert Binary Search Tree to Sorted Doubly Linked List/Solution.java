class Solution {
    // 定义：输入一棵 BST，返回该 BST 改造成的环形链表的头结点
    public Node treeToDoublyList(Node root) {
        if (root == null) {
            return null;
        }
        // 先把左右子树都变成环形链表
        Node leftHead = treeToDoublyList(root.left);
        Node rightHead = treeToDoublyList(root.right);
        Node leftTail, rightTail;

        // 根节点接到左右两个环形链表中间
        if (leftHead != null) {
            leftTail = leftHead.left;
            root.left = leftTail;
            leftTail.right = root;
        } else {
            leftTail = leftHead = root;
        }
        if (rightHead != null) {
            rightTail = rightHead.left;
            root.right = rightHead;
            rightHead.left = root;
        } else {
            rightTail = rightHead = root;
        }

        // 两个环形链表头尾相接形成大的环形链表
        leftHead.left = rightTail;
        rightTail.right = leftHead;

        return leftHead;
    }
}
