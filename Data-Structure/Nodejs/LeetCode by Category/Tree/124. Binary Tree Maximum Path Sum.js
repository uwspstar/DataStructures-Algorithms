//124. Binary Tree Maximum Path Sum
/*
A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.

The path sum of a path is the sum of the node's values in the path.

Given the root of a binary tree, return the maximum path sum of any path.

Example 1: Input: root = [1,2,3] Output: 6
Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.

Example 2: Input: root = [-10,9,20,null,null,15,7] Output: 42
Explanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.
*/
{
    var maxPathSum = function (root) {
        let max = new Array();
        max[0] = -Infinity;

        const dfs = (n, max) => {

            let left = n.left === null ? 0 : Math.max(dfs(n.left, max), 0); // no negative number
            let right = n.right === null ? 0 : Math.max(dfs(n.right, max), 0);
            let curr = n.val + left + right;

            max[0] = Math.max(max[0], curr);

            return n.val + Math.max(left, right); // 
        }

        dfs(root, max);

        return max[0];
    };
}