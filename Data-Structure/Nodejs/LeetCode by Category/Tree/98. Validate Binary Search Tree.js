//98. Validate Binary Search Tree
/*
Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
*/
/*
二叉搜索树 : 其中序遍历的结果是一个有序数组

假设一个二叉搜索树具有如下特征：

节点的左子树只包含小于当前节点的数。
节点的右子树只包含大于当前节点的数。
所有左子树和右子树自身必须也是二叉搜索树。

可以递归中序遍历将二叉搜索树转变成一个数组


不能单纯的比较左节点小于中间节点，右节点大于中间节点就完事了
我们要比较的是 左子树所有节点小于中间节点，右子树所有节点大于中间节点。
*/
{
    // perfect for inOrder , because of root is bigger than left
    //         5
    //       /   \
    //      4     6
    //     /     /  \
    //    2     7    8
    //     
    // inOrder,  left, self, right
    var isValidBST = function (root) {
        if (root === null) return true;
        const stack = [];
        let p = root;
        let pre = null;
        while (stack.length > 0 || p !== null) {
            while (p) {
                stack.push(p);
                p = p.left;
            }
            let n = stack.pop();

            //二叉搜索树其中序遍历的结果是一个有序数组
            if (pre !== null && n.val <= pre) {  
                return false;
            }

            pre = n.val; // for next compare
            p = n.right;
        }

        return true;
    };

}
//Find Mode in Binary Search Tree
{
    function helper(n, min, max) {
        if (!n) {
            return true; // We hit the end of the path
        }

        if ((min !== null && n.val <= min) || (max !== null && n.val >= max)) {
            return false;  // current node's val doesn't satisfy the BST rules
        }

        // Continue to scan left and right
        return helper(n.left, min, n.val) && helper(n.right, n.val, max);
    }

    var isValidBST = function (root) {
        if (!root) {
            return true; // Sanity check for passing test case '[]'
        }
        return helper(root, null, null);
    };
}