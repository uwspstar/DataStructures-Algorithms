class Solution {
    public List<Integer> getAllElements(TreeNode root1, TreeNode root2) {
        // BST 有序迭代器
        BSTIterator t1 = new BSTIterator(root1);
        BSTIterator t2 = new BSTIterator(root2);
        LinkedList<Integer> res = new LinkedList<>();
        // 类似合并有序链表的算法逻辑
        while (t1.hasNext() && t2.hasNext()) {
            if (t1.peek() > t2.peek()) {
                res.add(t2.next());
            } else {
                res.add(t1.next());
            }
        }
        // 如果有一棵 BST 还剩元素，添加到最后
        while (t1.hasNext()) {
            res.add(t1.next());
        }
        while (t2.hasNext()) {
            res.add(t2.next());
        }
        return res;
    }

}

// BST 有序迭代器
class BSTIterator {

    Stack<TreeNode> stk = new Stack<>();

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

    public int peek() {
        return stk.peek().val;
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