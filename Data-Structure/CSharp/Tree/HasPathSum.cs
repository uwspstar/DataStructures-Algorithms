// 112. Path Sum
public class Solution
{
    public bool HasPathSum(FileTreeNode root, int targetSum)
    {
        if (root == null) return false;
        if (root.left == null && root.right == null && root.val == targetSum) return true;

        return HasPathSum(root.left, targetSum - root.val) || HasPathSum(root.right, targetSum - root.val);

    }
}