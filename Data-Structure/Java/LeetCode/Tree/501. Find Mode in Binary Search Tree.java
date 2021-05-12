//501. Find Mode in Binary Search Tree
/*
Given the root of a binary search tree (BST) with duplicates, return all the mode(s) (i.e., the most frequently occurred element) in it.

If the tree has more than one mode, return them in any order.

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than or equal to the node's key.
The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
Both the left and right subtrees must also be binary search trees.
*/
/**
 * Definition for a binary tree node. public class TreeNode { int val; TreeNode
 * left; TreeNode right; TreeNode() {} TreeNode(int val) { this.val = val; }
 * TreeNode(int val, TreeNode left, TreeNode right) { this.val = val; this.left
 * = left; this.right = right; } }
 */
class Solution {
    int count;
    int maxCount;
    int base;
    List<Integer> answer;

    public int[] findMode(TreeNode root) {
        answer = new ArrayList<Integer>();
        count = 0;
        maxCount = 0;
        base = 0;

        dfsInorder(root);

        // convert List<Integer> to int[]
        int[] mode = new int[answer.size()];
        for (int i = 0; i < answer.size(); ++i) {
            mode[i] = answer.get(i);
        }
        return mode;
    }

    public void dfsInorder(TreeNode n) {
        if (n == null) {
            return;
        }
        dfsInorder(n.left);
        update(n.val);
        dfsInorder(n.right);
    }

    public void update(int x) {
        if (x == base) {
            count++;
        } else {
            count = 1;
            base = x;
        }

        if (count == maxCount) {
            answer.add(x);
        }

        if (count > maxCount) {
            maxCount = count;
            answer.clear();
            answer.add(x);
        }
    }
}
/*
 * Binary Tree Upside Down Equal Tree Partition All Nodes Distance K in Binary
 * Tree
 */
