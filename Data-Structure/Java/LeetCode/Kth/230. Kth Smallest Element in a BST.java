//230. Kth Smallest Element in a BST
/*
Given the root of a binary search tree, and an integer k, return the kth (1-indexed) smallest element in the tree.
Input: root = [3,1,4,null,2], k = 1 Output: 1;
Input: root = [5,3,6,2,4,null,null,1], k = 3 Output: 3;
*/
/*
Follow up: If the BST is modified often (i.e., we can do insert and delete operations) and you need to find the kth smallest frequently, how would you optimize?*/
/**
 * Definition for a binary tree node. public class TreeNode { int val; TreeNode
 * left; TreeNode right; TreeNode() {} TreeNode(int val) { this.val = val; }
 * TreeNode(int val, TreeNode left, TreeNode right) { this.val = val; this.left
 * = left; this.right = right; } }
 */
class Solution {

    public ArrayList<Integer> inorder(TreeNode root, ArrayList<Integer> arr) {
        if (root == null)
            return arr;
        inorder(root.left, arr);
        arr.add(root.val);
        inorder(root.right, arr);
        return arr;
    }

    public int kthSmallest(TreeNode root, int k) {
        ArrayList<Integer> nums = inorder(root, new ArrayList<Integer>());
        return nums.get(k - 1);
    }
}
class Solution {
    
    public int kthSmallest(TreeNode root, int k) {
        LinkedList<TreeNode> stack = new LinkedList<TreeNode>();
        TreeNode p = root;
        ArrayList<Integer> arr = new ArrayList<Integer>();
        while (stack.size() > 0 || p!= null) {
            while (p != null) {
                stack.add(p);
                p = p.left;
            }
            TreeNode tmp = stack.removeLast();
            arr.add(tmp.val);
            p = tmp.right;
        }
        return arr.get(k - 1);
    }
}
class Solution {
    
    public ArrayList<Integer> arr;
    
    public void dfs_inorder(TreeNode root, ArrayList<Integer> arr) {
        if (root == null) return; 
        if (root.left != null) dfs_inorder(root.left, arr);
        arr.add(root.val);
        if (root.right != null) dfs_inorder(root.right, arr); 
         
    }
    
    public int kthSmallest(TreeNode root, int k) {
        arr = new ArrayList<Integer>();     
        dfs_inorder(root, arr);
        return arr.get(k - 1);
    }  
}