//144. Binary Tree Preorder Traversal
/*
Given the root of a binary tree, return the preorder traversal of its nodes' values.

Example 1:

Input: root = [1,null,2,3]
Output: [1,2,3]
Example 2:

Input: root = []
Output: []
Example 3:

Input: root = [1]
Output: [1]
*/
var preorderTraversal = function (root) {

    if (!root) return [];
    const stack = [root];
    const res = [];

    while (stack.length) {
        let node = stack.pop();
        res.push(node.val);
        if (node.right) stack.push(node.right); // right side first
        if (node.left) stack.push(node.left);
    }
    return res
};