//104. Maximum Depth of Binary Tree
/*Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
*/
{
    // DFS
    var maxDepth = function(root) {
        if (root === null) return 0;
        let maxLevel = 1;
        const dfs = (n, depth) => {
            if (n === null) return; 
            
            if (n.left === null && n.right === null) {
                maxLevel = Math.max (maxLevel, depth);
            }  
            
            n.left && dfs(n.left, depth + 1);
            n.right && dfs(n.right, depth + 1);
        } 
        dfs(root, 1);
        return maxLevel;
    }
}