//543. Diameter of Binary Tree
/*
Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them.

Example 1:

Input: root = [1,2,3,4,5]
Output: 3
Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].
Example 2:

Input: root = [1,2]
Output: 1
*/
{
    //The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.
    // 解题时要注意，在我们处理某个子树时，我们更新的 最长直径值和递归返回的值是不同的。这是因为待更新的最长直径值是经过该子树根节点的最长 直径(即两侧长度);而函数返回值是以该子树根节点为端点的最长直径值(即一侧长度)，使用 这样的返回值才可以通过递归更新父节点的最长直径值) 
    var diameterOfBinaryTree = function (root) {
        let ans = 0;

        const maxDepth = n => {
            if (n === null) return 0;

            let left = maxDepth(n.left);
            let right = maxDepth(n.right);
            //待更新的最长直径值是经过该子树根节点的最长 直径(即两侧长度)
            ans = Math.max(left + right, ans);

            //以该子树根节点为端点的最长直径值(即一侧长度)
            return Math.max(left, right) + 1;
        }

        maxDepth(root);

        return ans;
    }
}

{
    var diameterOfBinaryTree = function (root) {
        let diameter = 0;

        const dfs_postOrder = n => {
            if (n === null) return 0;
            let left = dfs_postOrder(n.left);
            let right = dfs_postOrder(n.right);

            // 后序遍历位置顺便计算最大直径, every node logic
            diameter = Math.max(left + right, diameter);

            return Math.max(left, right) + 1;
        }

        dfs_postOrder(root);
        return diameter;
    }
}