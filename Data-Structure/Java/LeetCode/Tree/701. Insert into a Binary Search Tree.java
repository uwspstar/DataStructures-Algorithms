/*
 * 701. Insert into a Binary Search Tree
 * 
 * Share You are given the root node of a binary search tree (BST) and a value
 * to insert into the tree. Return the root node of the BST after the insertion.
 * It is guaranteed that the new value does not exist in the original BST.
 * 
 * Notice that there may exist multiple valid ways for the insertion, as long as
 * the tree remains a BST after insertion. You can return any of them.
 */
/**
 * Definition for a binary tree node. public class TreeNode { int val; TreeNode
 * left; TreeNode right; TreeNode() {} TreeNode(int val) { this.val = val; }
 * TreeNode(int val, TreeNode left, TreeNode right) { this.val = val; this.left
 * = left; this.right = right; } }
 */
class Solution {
    public TreeNode insertIntoBST(TreeNode root, int val) {
        if (root == null)
            return new TreeNode(val);

        if (root.val < val) {
            root.right = insertIntoBST(root.right, val);
        } else {
            root.left = insertIntoBST(root.left, val);
        }

        return root;
    }
}
/*
 * Redundant Connection II Recover a Tree From Preorder Traversal Sum of Nodes
 * with Even-Valued Grandparent
 */