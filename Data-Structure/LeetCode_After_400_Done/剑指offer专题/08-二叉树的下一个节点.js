// 二叉树的下一个结点
// 题目：给定一棵二叉树和其中的一个结点，如何找出中序遍历顺序的下一个结点？
// 树中的结点除了有两个分别指向左右子结点的指针以外，还有一个指向父结点的指针。
/*
二叉树中的节点和周围节点可能有四种关系（画图出来更直观）

左子树的父节点
右子树的父节点
父节点的左子树
父节点的右子树

关系2存在时，返回右子树的最左节点，否则到步骤2
关系3存在时，返回父节点，否则到步骤3
关系4存在时，向上回溯，对父节点使用步骤2，否则到步骤4
（节点是根节点）返回nul
*/
{
    class BinaryTreeNode {
        constructor(val, left, right, parent) {
            this.val = element;
            this.left = left;
            this.right = right;
            this.parent = parent;
        }
    }
    const findNextNode = (node) => {
        if (root === null) return root;
        let curr = null;

        if (node.right !== null) {
            // 返回右子树的最左节点
            curr = node.right;
            while (curr !== null) {
                curr = curr.left;
            }
            return curr;
        } else if (node.parent !== null) {
            //返回父节点
            if (node.parent.left === node) {
                return node.parent;
            } else if (node.parent.right === node) {
                curr = node.parent;
                // 向上回溯
                while (curr.parent && curr.parent.right === curr) {
                    curr = node.parent;
                }
                if (curr.parent !== null) {
                    return curr.parent;
                }
            }
        }

        return null;
    }
}