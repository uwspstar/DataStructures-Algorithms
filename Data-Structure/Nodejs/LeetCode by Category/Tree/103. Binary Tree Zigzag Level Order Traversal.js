//103. Binary Tree Zigzag Level Order Traversal
/*
Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

Example 1: Input: root = [3,9,20,null,null,15,7] Output: [[3],[20,9],[15,7]]
Example 2: Input: root = [1] Output: [[1]]
Example 3: Input: root = [] Output: []
*/
{
    //BFS : queue, push , unshift
    var zigzagLevelOrder = function (root) {
        if (root === null) return [];
        let q = [root];
        let res = [];
        let level = 0;
        while (q.length) {
            let sz = q.length;
            level += 1;
            let tmp = [];
            for (let i = 0; i < sz; i++) {
                let node = q.shift();
                if (level % 2 === 1) {
                    tmp.push(node.val);
                } else {
                    tmp.unshift(node.val);
                }
                if (node.left !== null) q.push(node.left);
                if (node.right !== null) q.push(node.right);
            }
            res.push(tmp);
        }
        return res;
    };
}
//Number of Connected Components in an Undirected Graph
//Two Sum IV - Input is a BST
//Redundant Connection