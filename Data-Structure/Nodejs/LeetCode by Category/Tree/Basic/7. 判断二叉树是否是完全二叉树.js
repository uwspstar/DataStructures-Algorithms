//958. Check Completeness of a Binary Tree

//Given the root of a binary tree, determine if it is a complete binary tree. In a complete binary tree, every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

//When level-order traversal in a complete tree, after the last node, all nodes in the queue should be null. Otherwise, the tree is not complete.
//一棵二叉树至多只有最下面的两层上的结点的度数可以小于2，并且最下层上的结点都集中在该层最左边的若干位置上，则此二叉树成为完全二叉树
{
    //BFS
    var isCompleteTree = function (root) {
        if (root === null) return true;
        let q = [root];
        while (q.length > 0) {
            let node = q.shift();
            if (node === null) break; // stop when the node is missing
            q.push(node.left);
            q.push(node.right); // cannot check node.left === null
        }
        while (q.length > 0) {
            let node = q.shift();
            if (node !== null) return false;
        }
        return true;
    };
    //Flip Binary Tree To Match Preorder Traversal
    //Sum of Nodes with Even-Valued Grandparent
    //Build Binary Expression Tree From Infix Expression
}
