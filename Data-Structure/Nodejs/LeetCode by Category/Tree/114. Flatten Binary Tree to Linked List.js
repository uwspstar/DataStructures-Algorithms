//114. Flatten Binary Tree to Linked List
//将二叉树展开为链表
/*
Given the root of a binary tree, flatten the tree into a "linked list":

The "linked list" should use the same TreeNode class where the right child pointer points to the next node in the list and the left child pointer is always null.

The "linked list" should be in the same order as a pre-order traversal of the binary tree.

Input: root = [1,2,5,3,4,null,6] Output: [1,null,2,null,3,null,4,null,5,null,6]
Input: root = [] Output: []
Input: root = [0] Output: [0]
*/
//1、将 root 的左子树和右子树拉平。
//2、将 root 的右子树接到左子树下方，然后将整个左子树作为右子树。
{
    var flatten = function (root) {
        if (!root) return root;

        const dfs = (n) => {
            if (!n) return null;
            if (!n.left && !n.right) return n; //leaf node return

            let leftTail = dfs(n.left);
            let rightTail = dfs(n.right);

            // logic
            if (leftTail) {
                let rightHead = n.right;
                n.right = n.left
                n.left = null
                leftTail.right = rightHead;
            }

            return rightTail === null ? leftTail : rightTail; // need to have return
        }

        dfs(root);
        return root;
    };
}
//Flatten a Multilevel Doubly Linked List
//Correct a Binary Tree
//https://labuladong.github.io/algo/2/18/20/
//你看，这就是递归的魅力，你说 flatten 函数是怎么把左右子树拉平的？说不清楚，但是只要知道 flatten 的定义如此，相信这个定义，让 root 做它该做的事情，然后 flatten 函数就会按照定义工作。另外注意递归框架是后序遍历，因为我们要先拉平左右子树才能进行后续操作。
{
    // 定义：将以 root 为根的树拉平为链表
    const  flatten = root => {
        if (root == null) return;// base case

        flatten(root.left);
        flatten(root.right);

        /**** 后序遍历位置 ****/// 1、左右子树已经被拉平成一条链表
        let left = root.left;
        let right = root.right;

        root.left = null;// 2、将左子树作为右子树 :-) !!!!
        root.right = left;

        // 3、将原先的右子树接到当前右子树的末端
        let p = root;
        while (p.right !== null) {
            p = p.right;
        }
        p.right = right;
    }
}