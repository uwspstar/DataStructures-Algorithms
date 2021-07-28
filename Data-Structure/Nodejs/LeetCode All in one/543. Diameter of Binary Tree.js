//543. Diameter of Binary Tree
/*
Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them. 

Input: root = [1,2,3,4,5] Output: 3
Explanation: 3is the length of the path [4,2,1,3] or [5,2,1,3].

Input: root = [1,2] Output: 1

解题时要注意，在我们处理某个子树时，我们更新的 最长直径值和递归返回的值是不同的。这是因为待更新的最长直径值是经过该子树根节点的最长 直径(即两侧长度);而函数返回值是以该子树根节点为端点的最长直径值(即一侧长度)，使用 这样的返回值才可以通过递归更新父节点的最长直径值)。

*/
{
    var diameterOfBinaryTree = function (root) {

        if (!root) return null;
        let max = 0;

        const dfs = (n) => {
            if (!n) return 0;
            let leftLevel = dfs(n.left);
            let rightLevel = dfs(n.right);

            max = Math.max(max, leftLevel + rightLevel);
            // return the longest one between left_path and right_path;
            // remember to add 1 for the path connecting the node and its parent
            return Math.max(leftLevel, rightLevel) + 1; // 1  is root
        }

        dfs(root);
        return max;

    };
    //Diameter of N-Ary Tree
}
{
    var diameterOfBinaryTree = function (root) {
        let diameter = 0;
        const dfs_postOrder = function (node) {
            if (node === null) return 0;
    
            let left = dfs_postOrder(node.left); 
            let right = dfs_postOrder(node.right);
    
            diameter = max(left + right, diameter);
    
            return max(left, right) + 1;
        }
        dfs_postOrder(root);
        return diameter;
    }
    
}