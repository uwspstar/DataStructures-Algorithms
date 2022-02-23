```
前文 手把手刷二叉树总结篇 说过二叉树的递归算法可以分两类，一类是遍历二叉树的类型，一类是分解子问题的类型。

前者较简单，只要运用二叉树的递归遍历框架即可；后者的关键在于明确递归函数的定义，然后利用这个定义。

这题属于后者，flatten 函数的定义：

给 flatten 函数输入一个节点 root，那么以 root 为根的二叉树就会被拉平为一条链表。

如何利用这个定义来完成算法？你想想怎么把以 root 为根的二叉树拉平为一条链表？

很简单，以下流程：

1、将 root 的左子树和右子树拉平。

2、将 root 的右子树接到左子树下方，然后将整个左子树作为右子树。

至于如何把 root 的左右子树拉平，不用你操心，flatten 函数的定义就是这样，交给他做就行了。

把上面的逻辑翻译成代码，即可解决本题。

详细题解：东哥手把手带你套框架刷通二叉树|第一期

标签：数据结构，二叉树
```
```java
class Solution {
    // 定义：将以 root 为根的树拉平为链表
    public void flatten(TreeNode root) {
        // base case
        if (root == null) return;
        // 先递归拉平左右子树
        flatten(root.left);
        flatten(root.right);

        /****后序遍历位置****/
        // 1、左右子树已经被拉平成一条链表
        TreeNode left = root.left;
        TreeNode right = root.right;

        // 2、将左子树作为右子树
        root.left = null;
        root.right = left;

        // 3、将原先的右子树接到当前右子树的末端
        TreeNode p = root;
        while (p.right != null) {
            p = p.right;
        }
        p.right = right;
    }
}
```
