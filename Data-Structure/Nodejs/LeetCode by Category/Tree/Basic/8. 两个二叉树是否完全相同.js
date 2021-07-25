//100. Same Tree
// Given the roots of two binary trees p and q, write a function to check if they are the same or not.
// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
//101. Symmetric Tree
{
    var isSameTree = function (p, q) {
        if (p === null && q === null) return true; //order is mater
        if (p === null || q === null) return false;
        if (p.val !== q.val) return false;
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    };
    //Binary Tree Tilt
    //Regions Cut By Slashes
    //Smallest Common Region
}
{
    var isSameTree = function (p, q) {
        if (!p && !q) return true; // both null, true
        // p && q  both not null;
        // p.val === q.val both has same value
        // isSameTree(p.left, q.left) left subtrees are same
        // isSameTree(p.right, q.right) right subtrees are same
        if (p && q && p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right)) {
            return true;
        } else return false;

    };
    //Verify Preorder Sequence in Binary Search Tree
    //Longest Univalue Path
    //Most Stones Removed with Same Row or Column
}

