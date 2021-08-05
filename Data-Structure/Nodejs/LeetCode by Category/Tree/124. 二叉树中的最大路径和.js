//124. 二叉树中的最大路径和
/*
路径 被定义为一条从树中任意节点出发，沿父节点-子节点连接，达到任意节点的序列。同一个节点在一条路径序列中 至多出现一次 。该路径 至少包含一个 节点，且不一定经过根节点。

路径和 是路径中各节点值的总和。

给你一个二叉树的根节点 root ，返回其 最大路径和 。

输入：root = [1,2,3]
输出：6
解释：最优路径是 2 -> 1 -> 3 ，路径和为 2 + 1 + 3 = 6

输入：root = [-10,9,20,null,null,15,7]
输出：42
解释：最优路径是 15 -> 20 -> 7 ，路径和为 15 + 20 + 7 = 42
*/
//二叉树中最大路径和
//LeetCode 124 题
/*
A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.

The path sum of a path is the sum of the node's values in the path.

Given the root of a binary tree, return the maximum path sum of any path.

Example 1: Input: root = [1,2,3] Output: 6
Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.

Example 2: Input: root = [-10,9,20,null,null,15,7] Output: 42
Explanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.

https://leetcode-cn.com/problems/binary-tree-maximum-path-sum/solution/shou-hui-tu-jie-hen-you-ya-de-yi-dao-dfsti-by-hyj8/

一个子树内部的最大路径和 = 左子树提供的最大路径和 + 根节点值 + 右子树提供的最大路径和。即 dfs(root.left) + root.val + dfs(root.right)
*/
{
    var maxPathSum = function (root) {
        //if (root === null) return 0;树中节点数目范围是 [1, 3 * 104]
        if (root.left === null && root.right === null) return root.val;
        let res = -Infinity;
        const getMaxPathSum = root => {
            if (root === null) return 0;
            let leftMaxPathSum = Math.max(getMaxPathSum(root.left), 0); // if left sum < 0, take 0
            let rightMaxPathSum = Math.max(getMaxPathSum(root.right), 0); // if right sum < 0, take 0
            res = Math.max(res, leftMaxPathSum + rightMaxPathSum + root.val);//globe res

            return Math.max(leftMaxPathSum, rightMaxPathSum) + root.val; // 当前子树对外提供的最大和
        }
        getMaxPathSum(root);
        return res;
    };
}
{
    const maxPathSum = (root) => {
        let res = Number.MIN_SAFE_INTEGER; // 最大路径和

        const getMaxPathSum = (root) => {
            if (root == null) return 0;// 遍历到null节点，收益0

            const leftMaxVal = getMaxPathSum(root.left);  // 左子树提供的最大路径和
            const rightMaxVal = getMaxPathSum(root.right); // 右子树提供的最大路径和

            const currentMaxSum = leftMaxVal + root.val + rightMaxVal; // 当前子树内部的最大路径和
            res = Math.max(res, currentMaxSum); //最大纪录

            // 当前子树对外提供的最大和
            const outputMaxSum = root.val + Math.max(leftMaxVal, rightMaxVal);

            // 对外提供的路径和为负，直接返回0。否则正常返回
            return outputMaxSum < 0 ? 0 : outputMaxSum;
        };

        getMaxPathSum(root);
        return res;
    };
}