//958. Check Completeness of a Binary Tree
/*
Given the root of a binary tree, determine if it is a complete binary tree.

In a complete binary tree, every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

Example 1:
Input: root = [1,2,3,4,5,6] Output: true
Explanation: Every level before the last is full (ie. levels with node-values {1} and {2, 3}), and all nodes in the last level ({4, 5, 6}) are as far left as possible.

Example 2:
Input: root = [1,2,3,4,5,null,7] Output: false
Explanation: The node with value 7 isn't as far left as possible.
*/
{

    //In a complete binary tree, no node should be encountered after null node is encountered.

    var isCompleteTree = function (root) {
        let queue = [root];

        while (queue.length > 0) {
            let node = queue.shift();
            if (node === null) {
                break;
            }
            queue.push(node.left);// cannot check node.left === null
            queue.push(node.right);
        }

        while (queue.length > 0) {
            let node = queue.shift();
            if (node !== null) {
                return false;
            }
        }
        return true;
        // T.C: O(N)
        // S.C: O(N)
    };
    //Flip Binary Tree To Match Preorder Traversal
    //Sum of Nodes with Even-Valued Grandparent
    //Build Binary Expression Tree From Infix Expression
}
{
    const isFullTree = node => {

        if (node == null) return true;

        if (node.left === null && node.right === null) {
            return true;
        }
        // if both left and right subtrees are not null 
        // the are full 

        if ((node.left !== null) && (node.right !== null)) {
            return (isFullTree(node.left) && isFullTree(node.right));
        }
        return false;

    }
}