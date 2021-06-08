//226. Invert Binary Tree
//Given the root of a binary tree, invert the tree, and return its root.
//Input: root = [4,2,7,1,3,6,9]
//Output: [4,7,2,9,6,3,1]
{
    // recursive
    var invertTree = function (root) {
        if (root === null) return root;
        return {
            val: root.val,
            left: invertTree(root.right),
            right: invertTree(root.left),
        }
    };
}
{
    //BFS
    var invertTree = function (root) {
        if (root == null) return null;
        let q = [root];
        while (q.length > 0) {
            let sz = q.length;
            for (let i = 0; i < sz; i++) {
                let n = q.shift();
                // every level
                [n.left, n.right] = [n.right, n.left]; // swap logic
                n.left && q.push(n.left);
                n.right && q.push(n.right);
            }
        }
        return root;
    };

}
/*
Convert BST to Greater Tree
Encode N-ary Tree to Binary Tree
Lowest Common Ancestor of Deepest Leaves
*/