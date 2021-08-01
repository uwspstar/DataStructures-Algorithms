//111. Minimum Depth of Binary Tree
/*
Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.
*/

//最小深度是从根节点到最近叶子节点的最短路径上的节点数量。，注意是叶子节点。
{
    //template recursion tree
    var minDepth = function (root) {
        //only root
        if (root === null) return 0;
        if (root.left === null && root.right === null) return 1;

        let res = Infinity;

        // only left
        let leftMinDepth = minDepth(root.left);
        // only right
        let rightMinDepth = minDepth(root.right);

        res = Math.min(leftMinDepth, rightMinDepth, res);
        
        return res;
    }
}

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
                if (node.left === null && node.right === null) {// this is the logic to find minDepth
                    return depth;
                }
                node.left && q.push(node.left);
                node.right && q.push(node.right)
            }
            depth++;
        }
        return depth;
    };
}

var minDepth = function (root) {
    if (root === null) return 0;

    if (root.left === null && root.right === null) { //leaf node
        return 1;
    }

    let treeMinDepth = Infinity;

    if (root.left !== null) {
        treeMinDepth = Math.min(minDepth(root.left), treeMinDepth);
    }

    if (root.right !== null) {
        treeMinDepth = Math.min(minDepth(root.right), treeMinDepth);
    }

    return 1 + treeMinDepth;
};

//Design Add and Search Words Data Structure
//As Far from Land as Possible
//Change the Root of a Binary Tree
//Lowest Common Ancestor of a Binary Search Tree
//Check if There is a Valid Path in a Grid
//Pseudo-Palindromic Paths in a Binary Tree
