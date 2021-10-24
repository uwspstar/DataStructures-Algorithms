//https://github.com/labuladong/fucking-algorithm/tree/master/%E7%AE%97%E6%B3%95%E6%80%9D%E7%BB%B4%E7%B3%BB%E5%88%97

//递归

{
    //简单的递推不会消耗空间。比如这个例子，给一个链表头，计算它的长度：
    /* 典型的递推遍历框架，需要额外空间 O(1) */
    /*
    public int size(Node head) {
        int size = 0;
            for (Node p = head; p != null; p = p.next) size++;
            return size;
        }
    */
    /* 我偏要递归，万物皆递归，需要额外空间 O(N) */
    /*
    public int size(Node head) {
            if (head == null) return 0;
            return size(head.next) + 1;
        }
    */
}
{
    //遍历二叉树。
    /*
    void traverse(TreeNode* root) {
        if (root == null) return;
        traverse(root->left);
        traverse(root->right);
    */
    /*
     这几行代码就足以扫荡任何一棵二叉树了。我想说的是，对于递归函数traverse(root)，我们只要相信：给它一个根节点root，它就能遍历这棵树，因为写这个函数不就是为了这个目的吗？所以我们只需要把这个节点的左右节点再甩给这个函数就行了，因为我相信它能完成任务的。那么遍历一棵N叉数呢？太简单了好吧，和二叉树一模一样啊。
     void traverse(TreeNode * root) {
         if (root == null) return;
         for (child : root -> children)
         traverse(child);
     }
     */

}

{

    /* 437. Path Sum III https://leetcode.com/problems/path-sum-iii/ */
    /*
    Given the root of a binary tree and an integer targetSum, return the number of paths where the sum of the values along the path equals targetSum.
    The path does not need to start or end at the root or a leaf, but it must go downwards (i.e., traveling only from parent nodes to child nodes).
    
    root = [10,5,-3,3,2,null,11,3,-2,null,1],
    sum = 8
    
          10
         /  \
        5   -3
       / \    \
      3   2   11
     / \   \
    3  -2   1
    
    Return 3. The paths that sum to 8 are:
    
    1.  5 -> 3
    2.  5 -> 2 -> 1
    3. -3 -> 11
    
    看不懂没关系，底下有更详细的分析版本，这里突出体现递归的简洁优美 
    
        int pathSum(TreeNode root, int sum) {
                if (root == null) return 0;
                return count(root, sum) +
                    pathSum(root.left, sum) + pathSum(root.right, sum);
            }
        int count(TreeNode node, int sum) {
                if (node == null) return 0;
                return (node.val == sum) +
                    count(node.left, sum - node.val) + count(node.right, sum - node.val);
    }

    每个递归函数应该做的事：
    PathSum 函数：给他一个节点和一个目标值，他返回以这个节点为根的树中，和为目标值的路径总数。

 有了以上铺垫，详细注释一下代码
    int pathSum(TreeNode root, int sum) {
            if (root == null) return 0;
        int pathImLeading = count(root, sum); // 自己为开头的路径数
        int leftPathSum = pathSum(root.left, sum); // 左边路径总数（相信他能算出来）
        int rightPathSum = pathSum(root.right, sum); // 右边路径总数（相信他能算出来）
            return leftPathSum + rightPathSum + pathImLeading;
        }
    int count(TreeNode node, int sum) {
            if (node == null) return 0;
        // 我自己能不能独当一面，作为一条单独的路径呢？
        int isMe = (node.val == sum) ? 1 : 0;
        // 左边的小老弟，你那边能凑几个 sum - node.val 呀？
        int leftBrother = count(node.left, sum - node.val);
        // 右边的小老弟，你那边能凑几个 sum - node.val 呀？
        int rightBrother = count(node.right, sum - node.val);
            return isMe + leftBrother + rightBrother; // 我这能凑这么多个
        }

    还是那句话，明白每个函数能做的事，并相信他们能够完成。
    总结下，PathSum 函数提供的二叉树遍历框架，在遍历中对每个节点调用 count 函数，看出先序遍历了吗（这道题什么序都是一样的）；count 函数也是一个二叉树遍历，用于寻找以该节点开头的目标值路径。好好体会吧！

    */
}
{

    const helper = (node, sum) => {
        if (node === null) return 0;
        // 我自己能不能独当一面，作为一条单独的路径呢？
        let isMyself = (node.val === sum) ? 1 : 0;
        // 左边的小老弟，你那边能凑几个 sum - node.val 呀？
        let leftChild = helper(node.left, sum - node.val);
        // 右边的小老弟，你那边能凑几个 sum - node.val 呀？
        let rightChild = helper(node.right, sum - node.val);

        return isMyself + leftChild + rightChild;

    }

    const pathSum = (root, sum) => {
        if (root === null) return 0;
        // 自己为开头的路径数
        let myself = helper(root, sum);
        // 左边路径总数（相信他能算出来）
        let myLeft = pathSum(root.left, sum);
        // 右边路径总数（相信他能算出来）
        let myRight = pathSum(root.right, sum);

        return myself + myLeft + myRight;

    }
}