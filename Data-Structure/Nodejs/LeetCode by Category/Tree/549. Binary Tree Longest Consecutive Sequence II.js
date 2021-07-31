//549. Binary Tree Longest Consecutive Sequence II
/*
Given the root of a binary tree, return the length of the longest consecutive path in the tree.

A consecutive path is a path where the values of the consecutive nodes in the path differ by one. This path can be either increasing or decreasing.

For example, [1,2,3,4] and [4,3,2,1] are both considered valid, but the path [1,2,4,3] is not valid.
On the other hand, the path can be in the child-Parent-child order, where not necessarily be parent-child order
*/
{
    var longestConsecutive = function (root) {
        let res = 0

        const longestPath = root => {
            if (root == null) return [0, 0]
            let inr = 1;
            let dcr = 1;

            if (root.left !== null) {
                let left = longestPath(root.left);
                if (root.val === root.left.val + 1) {
                    dcr = left[1] + 1;
                } else if (root.val === root.left.val - 1) {
                    inr = left[0] + 1;
                }
            }
            if (root.right !== null) {
                let right = longestPath(root.right);
                if (root.val === root.right.val + 1) {
                    dcr = Math.max(dcr, right[1] + 1);
                } else if (root.val === root.right.val - 1) {
                    inr = Math.max(inr, right[0] + 1);
                }
            }

            res = Math.max(res, dcr + inr - 1);
            return [inr, dcr];
        }

        longestPath(root);

        return res;

    };
}