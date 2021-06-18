//226. Invert Binary Tree
//Given the root of a binary tree, invert the tree, and return its root.
//Input: root = [4,2,7,1,3,6,9]
//Output: [4,7,2,9,6,3,1]
{
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
    var invertTree = function (root) {
        if (root == null) return root;
        let leftTree = invertTree(root.left);
        let rightTree = invertTree(root.right);
        root.left = rightTree;
        root.right = leftTree;
        return root;
    }
    //Sum of Nodes with Even-Valued Grandparent
    //Count Good Nodes in Binary Tree
    //Binary Search Tree Iterator II
}
{
    var invertTree = function (root) {
        if (root == null) return null;

        // swap
        [root.left, root.right] = [root.right, root.left];
        // call for left and right sides recursively
        invertTree(root.left);
        invertTree(root.right);

        return root;
    };

}
{

    var invertTree = function (root) {
        if (root == null) return null;
        let q = [root];
        while (q.length > 0) {
            let sz = q.length;
            for (let i = 0; i < sz; i++) {
                let n = q.shift();
                [n.left, n.right] = [n.right, n.left]; // swap
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