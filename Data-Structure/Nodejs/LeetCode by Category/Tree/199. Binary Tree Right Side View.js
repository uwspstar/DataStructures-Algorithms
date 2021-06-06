//199. Binary Tree Right Side View
//Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.
/*
Populating Next Right Pointers in Each Node
Boundary of Binary Tree
*/
//199. Binary Tree Right Side View
//https://leetcode.com/problems/binary-tree-right-side-view
//The problem is to return a list of last elements from all levels, 
//so it's the way more natural to implement BFS here.
//BFS:

//      1
//.    / \
//    2   3
//     \   \
//      5   4 
{
    var rightSideView = function (root) {
        if (root === null) return [];

        let rightSide = [];
        let q = [root]; 
        
        while (q.length > 0) {
            let sz = q.length;   
            for (let i = sz - 1; i >= 0; i--) { 
                let n = q.shift();
                if (n.left !== null) {
                    q.push(n.left);
                }
                if (n.right !== null) {
                    q.push(n.right);
                }
                if (i === 0) {
                    rightSide.push(n.val) // only with the last one in the queue
                }
            }
        }
        return rightSide;
    };
}
