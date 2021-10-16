//98. Validate Binary Search Tree
/*
Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
*/

//         5
//       /   \
//      4     6
//     /     /  \
//    2     7    8
//     
// inOrder,  left, self, right
var isValidBST = function (root) {
    let pre = null;
    const inOrder = (root) => {
        if (root === null) return true;
        let left = inOrder(root.left);
        if (pre !== null && pre.val >= root.val) return false;
        pre = root;
        let right = inOrder(root.right);
        return left && right;
    }
    return inOrder(root);
};