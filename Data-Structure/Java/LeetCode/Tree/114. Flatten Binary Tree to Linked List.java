//114. Flatten Binary Tree to Linked List
/*
Given the root of a binary tree, flatten the tree into a "linked list":

The "linked list" should use the same TreeNode class where the right child pointer points to the next node in the list and the left child pointer is always null.
The "linked list" should be in the same order as a pre-order traversal of the binary tree.

Input: root = [1,2,5,3,4,null,6] Output: [1,null,2,null,3,null,4,null,5,null,6]
Input: root = [] Output: []
Input: root = [0] Output: [0]
*/
/**
 * Definition for a binary tree node. public class TreeNode { int val; TreeNode
 * left; TreeNode right; TreeNode() {} TreeNode(int val) { this.val = val; }
 * TreeNode(int val, TreeNode left, TreeNode right) { this.val = val; this.left
 * = left; this.right = right; } }
 */
class Solution {
    private TreeNode flattenTree(TreeNode node) {
        if (node == null)
            return null;

        // For a leaf node, we simply return the node as is.
        if (node.left == null && node.right == null) {
            return node;
        }

        TreeNode leftTail = this.flattenTree(node.left);
        TreeNode rightTail = this.flattenTree(node.right);

        // If there was a left subtree, we shuffle the connections
        // around so that there is nothing on the left side anymore.
        if (leftTail != null) {
            leftTail.right = node.right;
            node.right = node.left;
            node.left = null;
        }

        // We need to return the "rightmost" node after we are
        // done wiring the new connections.
        return rightTail == null ? leftTail : rightTail;
    }

    public void flatten(TreeNode root) {

        this.flattenTree(root);
    }
}
// Flatten a Multilevel Doubly Linked List
// Correct a Binary Tree
/*
 * Time Complexity: O(N) since we process each node of the tree exactly once.
 * Space Complexity: O(N) which is occupied by the recursion stack. The problem
 * statement doesn't mention anything about the tree being balanced or not and
 * hence, the tree could be e.g. left skewed and in that case the longest branch
 * (and hence the number of nodes in the recursion stack) would be N.
 */