//111. Minimum Depth of Binary Tree
/*
Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.
*/

//最小深度是从根节点到最近叶子节点的最短路径上的节点数量。，注意是叶子节点。
{
    //BFS
    var minDepth = function (root) {
        if (!root) return 0;
        let q = [root];
        let depth = 1;
        while (q.length) {
            const sz = q.length;
            for (let i = 0; i < sz; i++) {
                const node = q.shift();
                if (node.left === null && node.right === null) {
                    return depth;
                } // this is the logic to find minDepth
                node.left && q.push(node.left);
                node.right && q.push(node.right)
            }
            depth++;
        }
        return depth;
    };
}
/*
Lowest Common Ancestor of a Binary Search Tree
Check if There is a Valid Path in a Grid
Pseudo-Palindromic Paths in a Binary Tree
*/