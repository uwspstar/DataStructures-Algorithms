//108. Convert Sorted Array to Binary Search Tree
/*
Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.

A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.
*/

{
    //选择中间数字作为二叉搜索树的根节点
    //1382. 将二叉搜索树变平衡
    var sortedArrayToBST = function (nums) {
        const buildTree = (nums, left, right) => {
            if (left > right) return null;
            let mid = (left + right) >> 1;
            let root = new TreeNode(nums[mid]);
            root.left = buildTree(nums, left, mid - 1)
            root.right = buildTree(nums, mid + 1, right);
            return root;
        }
        return buildTree(nums, 0, nums.length - 1);
    };
    // Convert Sorted List to Binary Search Tree
}