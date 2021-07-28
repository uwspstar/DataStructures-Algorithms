//543. Diameter of Binary Tree
/*
Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them. 

Input: root = [1,2,3,4,5] Output: 3
Explanation: 3is the length of the path [4,2,1,3] or [5,2,1,3].

Input: root = [1,2] Output: 1
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