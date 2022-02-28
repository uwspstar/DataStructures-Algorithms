// 654. Maximum Binary Tree
// T : O(N^2) , S: O(N)
{
    const build = (nums, left, right) => {
        if (left === right) return null;

        let maxIdx = left;

        for (let i = left; i < right; i++) {
            if (nums[maxIdx] < nums[i]) {
                maxIdx = i;
            }
        }

        let root = new TreeNode(nums[maxIdx]); // build root node

        root.left = build(nums, left, maxIdx);
        root.right = build(nums, maxIdx + 1, right);

        return root;
    }

    var constructMaximumBinaryTree = function (nums) {
        return build(nums, 0, nums.length);
    }
}