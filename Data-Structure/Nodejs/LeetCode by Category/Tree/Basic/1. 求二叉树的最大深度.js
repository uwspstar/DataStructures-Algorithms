//104. Maximum Depth of Binary Tree
/*Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
*/
// use template recursion tree
{
    const maxDepth = root => {
        // 1. only root
        if (root === null) return 0;
        if (root.left === null && root.right === null) return 1;
        let res = 0;
        // 2. only left
        let leftMaxDepth = maxDepth(root.left);
        // 3. only right
        let rightMaxDepth = maxDepth(root.right);
        // 4. combine result
        res = Math.max(leftMaxDepth, rightMaxDepth) + 1;
        return res;
    }
}
{
    // DFS
    var maxDepth = function (root) {
        if (root === null) return 0;
        let maxLevel = 1;
        const dfs = (n, depth) => {
            if (n === null) return;

            if (n.left === null && n.right === null) {
                maxLevel = Math.max(maxLevel, depth);
            }

            n.left && dfs(n.left, depth + 1);
            n.right && dfs(n.right, depth + 1);
        }
        dfs(root, 1);
        return maxLevel;
    }
}
{
    //BFS
    var maxDepth = function (root) {
        if (root === null) return 0;
        let q = [root];
        let depth = 0; // inside while has at least one ++
        while (q.length > 0) {
            let sz = q.length;
            for (let i = 0; i < sz; i++) {
                let n = q.shift();
                n.left && q.push(n.left);
                n.right && q.push(n.right);
            }
            depth++;
        }

        return depth;
    }
}
// recursive template
{
    var maxDepth = function (root) {
        if (root === null) return 0;
        let leftDepth = maxDepth(root.left);
        let rightDepth = maxDepth(root.right);
        return 1 + Math.max(leftDepth, rightDepth);
    }
}