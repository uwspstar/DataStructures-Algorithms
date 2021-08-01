//654. Maximum Binary Tree
/*
You are given an integer array nums with no duplicates. A maximum binary tree can be built recursively from nums using the following algorithm:

Create a root node whose value is the maximum value in nums.
Recursively build the left subtree on the subarray prefix to the left of the maximum value.
Recursively build the right subtree on the subarray suffix to the right of the maximum value.
Return the maximum binary tree built from nums.
*/
//遍历数组把找到最大值 maxVal，把根节点 root 做出来，然后对 maxVal 左边的数组和右边的数组进行递归调用，作为 root 的左右子树。

/*
const arr = [3,2,1,6,0,5];
const constructMaximumBinaryTree = (arr) => {
    // 找到数组中的最大值: 6
    let root = new TreeNode(6);
    // 递归调用构造左右子树
    root.left = constructMaximumBinaryTree([3,2,1]);
    root.right = constructMaximumBinaryTree([0,5]);
    return root;
}
*/
{
    var constructMaximumBinaryTree = function (nums) {
        return construct(nums, 0, nums.length);
    }

    function construct(nums, left, right) {
        if (left === right) return null;
        // quick sort ??? pivot
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