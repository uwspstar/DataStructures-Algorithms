//226. Invert Binary Tree
public class Solution
{
    public TreeNode InvertTree(TreeNode root)
    {
        if (root == null) return root;

        var left = InvertTree(root.left);
        var right = InvertTree(root.right);

        var tmp = left;
        root.left = root.right;
        root.right = tmp;

        return root;
    }
}