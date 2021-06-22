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
{
    // think about merge sort
    var countNodes = function (root) {
        if (root === null) return 0;
        let leftCount = countNodes(root.left);
        let rightCount = countNodes(root.right);
        return 1 + leftCount + rightCount;
    };
    /*
    Closest Binary Search Tree Value II
    H-Index II
    Depth of BST Given Insertion Order
    */
}
{
    // think about merge sort
    var countNodes = function (root, count = 0) {
        if (root === null) return 0;

        if (root.left === null && root.right === null) {
            return count;
        }
        let leftCount = countNodes(root.left, count = count + 1);
        let rightCount = countNodes(root.right, count = count + 1);

        return leftCount + rightCount;
    }

}
//root != null ? 1 + countNodes(root.right) + countNodes(root.left) : 0;