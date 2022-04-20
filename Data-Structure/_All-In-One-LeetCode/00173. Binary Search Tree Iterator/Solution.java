/*
通知：我把所有讲过的题目都整理进了题目列表，点这里 查看

基本思路
利用栈模拟递归对 BST 进行中序遍历可以认为是一种套路题型，你记住就好了，关键在于理解 pushLeftBranch 函数，深刻理解二叉树递归遍历的过程：

另外，我还总结了一套二叉树各种遍历顺序通用的递归转迭代代码框架，详见 二叉树通用迭代框架。

标签：二叉树

解法代码
*/
class BSTIterator {
    // 模拟递归栈
    private Stack<TreeNode> stk = new Stack<>();

    // 左侧树枝一撸到底
    private void pushLeftBranch(TreeNode p) {
        while (p != null) {
            stk.push(p);
            p = p.left;
        }
    }

    public BSTIterator(TreeNode root) {
        pushLeftBranch(root);
    }

    public int next() {
        TreeNode p = stk.pop();
        pushLeftBranch(p.right);
        return p.val;
    }

    public boolean hasNext() {
        return !stk.isEmpty();
    }
}