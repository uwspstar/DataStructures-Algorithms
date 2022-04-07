//1469. Find All The Lonely Nodes

/*
In a binary tree, a lonely node is a node that is the only child of its parent node. The root of the tree is not lonely because it does not have a parent node.

Given the root of a binary tree, return an array containing the values of all lonely nodes in the tree. Return the list in any order.

 

Example 1:
Input: root = [1,2,3,null,4] Output: [4]
Explanation: Light blue node is the only lonely node.
Node 1 is the root and is not lonely.
Nodes 2 and 3 have the same parent and are not lonely.
*/
{
    var getLonelyNodes = function (root) {
        if (root === null) return [];
        let res = [];
        const dfs = (node) => {
            if (node === null) return;

            if (node.left === null && node.right !== null) {
                res.push(node.right.val);
            }

            if (node.left !== null && node.right === null) {
                res.push(node.left.val);
            }

            node.left && dfs(node.left);
            node.right && dfs(node.right);
        }
        dfs(root);
        return res;

    };
    // Binary Tree Tilt (E)
    // Univalued Binary Tree (E)
}