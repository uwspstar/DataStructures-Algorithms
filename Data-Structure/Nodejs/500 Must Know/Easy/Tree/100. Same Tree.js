//100. Same Tree
// Given the roots of two binary trees p and q, write a function to check if they are the same or not.
// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
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
}

{
    //2 line sln
    var isSameTree = function (p, q) {
        if (!p && !q) return true; // both null, true
        return (p && q && p.val === q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right))
    };
}

//Verify Preorder Sequence in Binary Search Tree
//Longest Univalue Path
//Most Stones Removed with Same Row or Column