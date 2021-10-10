/*
501. Find Mode in Binary Search Tree

Given the root of a binary search tree (BST) with duplicates, return all the mode(s) (i.e., the most frequently occurred element) in it.
If the tree has more than one mode, return them in any order.
Input: root = [1, null, 2, 2] Output: [2]
Input: root = [0] Output: [0]

-105 <= Node.val <= 105


*/

using System;

namespace Day3
{
    class Program
    {
        static void Main(string[] args)
        {
            TreeNode root = new TreeNode(); // need build tree
            FindModeClass.FindMode(root);
        }
    }

    public class TreeNode
    {
        public int val;
        public TreeNode left;
        public TreeNode right;
        public TreeNode(int val = 0, TreeNode left = null, TreeNode right = null)
        {
            this.val = val;
            this.left = left;
            this.right = right;
        }
    }
    public static class FindModeClass
    {
        private List<int> res = new List<int>();
        private int preValue = 0;
        private int maxCount = 0;
        private int count = 0;

        public static int[] FindMode(TreeNode root)
        {
            if (root == null) return res.ToArray();
            if (root.left == null && root.right == null)
            {
                res.Add(root.val);
                return res.ToArray();
            }

            dfs(root);
            return res.ToArray();
        }

        public void update(int currVal)
        {
            if (preValue == currVal)
            {
                count++;
            }
            else
            {
                count = 1;
                preValue = currVal;
            }

            if (maxCount == count)
            {
                res.Add(currVal);
            }

            if (count > maxCount)
            {
                maxCount = count;
                res.Clear();
                res.Add(currVal);
            }
        }

        public void dfs(TreeNode node)
        {
            if (node == null) return;

            dfs(node.left);
            update(node.val);
            dfs(node.right);
        }
    }




}
