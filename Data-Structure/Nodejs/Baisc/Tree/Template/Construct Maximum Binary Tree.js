//654. Maximum Binary Tree
/*
You are given an integer array nums with no duplicates. A maximum binary tree can be built recursively from nums using the following algorithm:

Create a root node whose value is the maximum value in nums.
Recursively build the left subtree on the subarray prefix to the left of the maximum value.
Recursively build the right subtree on the subarray suffix to the right of the maximum value.
Return the maximum binary tree built from nums.
*/

{
    //Maximum Binary Tree II
    var constructMaximumBinaryTree = function (nums) {
        return construct(nums, 0, nums.length);
    }

    function construct(nums, left, right) {
        if (left == right) return null;
        let max_i = getMax(nums, left, right); // find max value index
        let root = new TreeNode(nums[max_i]); // build root node
        root.left = construct(nums, left, max_i);
        root.right = construct(nums, max_i + 1, right);
        return root;
    }

    function getMax(nums, l, r) {
        let max_i = l;
        for (let i = l; i < r; i++) {
            if (nums[max_i] < nums[i])
                max_i = i;
        }
        return max_i;
    }
}