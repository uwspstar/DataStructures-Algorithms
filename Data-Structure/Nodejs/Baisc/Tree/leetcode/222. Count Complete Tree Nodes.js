//222. Count Complete Tree Nodes
/*
Given the root of a complete binary tree, return the number of the nodes in the tree.

According to Wikipedia, every level, except possibly the last, is completely filled in a complete binary tree, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.
*/
{
    //BFS
    var countNodes = function (root) {
        if (root === null) return 0;
        let q = [root];
        let res = 0;
        while (q.length) {
            let sz = q.length;
            for (let i = 0; i < sz; i++) {
                let n = q.shift();
                n.left && q.push(n.left);
                n.right && q.push(n.right);
            }
            res += sz;
        }
        return res;
    }; 
}
/*
Kth Smallest Element in a Sorted Matrix
Maximum Width of Binary Tree
Path With Minimum Effort
*/