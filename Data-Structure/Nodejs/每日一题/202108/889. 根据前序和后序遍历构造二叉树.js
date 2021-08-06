//889. 根据前序和后序遍历构造二叉树
/*
返回与给定的前序和后序遍历匹配的任何二叉树。

pre 和 post 遍历中的值是不同的正整数。

输入：pre = [1,2,4,5,3,6,7], post = [4,5,2,6,7,3,1]
输出：[1,2,3,4,5,6,7]

我们令左分支有 L 个节点。我们知道左分支的头节点为 pre[1]，但它也出现在左分支的后序表示的最后。所以 pre[1] = post[L-1]（因为结点的值具有唯一性），因此 L = post.indexOf(pre[1]) + 1。

现在在我们的递归步骤中，左分支由 pre[1 : L+1] 和 post[0 : L] 重新分支，而右分支将由 pre[L+1 : N] 和 post[L : N-1] 重新分支。 

*/
{
    var constructFromPrePost = function (pre, post) {
        if (!pre.length) return null;

        const root = new TreeNode(pre[0]);
        const leftCount = post.indexOf(pre[1]) + 1;

        console.log('leftCount=', leftCount, 'root=', root.val);

        root.left = constructFromPrePost(pre.slice(1, leftCount + 1), post.slice(0, leftCount))
        root.right = constructFromPrePost(pre.slice(leftCount + 1), post.slice(leftCount, post.length - 1))
        return root;
    };
}