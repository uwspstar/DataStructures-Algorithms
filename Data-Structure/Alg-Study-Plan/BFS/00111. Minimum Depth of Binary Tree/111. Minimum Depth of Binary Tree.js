// 111. Minimum Depth of Binary Tree
/*
Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: 2

Example 2:
Input: root = [2,null,3,null,4,null,5,null,6]
Output: 5
*/
var minDepth = function (root) {
    if (root === null) return 0;
    let q = [root];
    let depth = 0 // usually the depth for root is 0;
    while (q.length > 0) {
        let sz = q.length;
        for (let i = 0; i < sz; i++) {
            let n = q.shift();
            if (n.left === null && n.right === null) return (depth + 1);
            n.left && q.push(n.left);
            n.right && q.push(n.right);
        }
        depth++;
    }
    return depth + 1; //The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node. 
};