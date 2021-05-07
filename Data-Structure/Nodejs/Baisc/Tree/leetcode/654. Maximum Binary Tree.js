//654. Maximum Binary Tree
/*
You are given an integer array nums with no duplicates. A maximum binary tree can be built recursively from nums using the following algorithm:

Create a root node whose value is the maximum value in nums.
Recursively build the left subtree on the subarray prefix to the left of the maximum value.
Recursively build the right subtree on the subarray suffix to the right of the maximum value.
Return the maximum binary tree built from nums.
*/

{
    var constructMaximumBinaryTree = function (nums) {
        return construct(nums, 0, nums.length);
    }

    function construct(nums, left, right) {
        if (left === right) return null;

        let max_i = getMaxIndex(nums, left, right); // find max value index
        let root = new TreeNode(nums[max_i]); // build root node
        root.left = construct(nums, left, max_i);
        root.right = construct(nums, max_i + 1, right);
        return root;
    }

    function getMaxIndex(nums, left, right) {
        let maxIndex = left;
        for (let i = left; i < right; i++) {
            if (nums[maxIndex] < nums[i]) {
                maxIndex = i;
            }
        }
        return maxIndex;
    }
}

    //Maximum Binary Tree II