//CHECK WHETHER A TREE IS A MIRROR OF ANOTHER TREE
/*
Here are three possible cases:
Their root node’s key must be the same.
The left subtree of root of a and the right subtree root of b are mirrors.
The right subtree of a and the left subtree of b are mirrors.
*/

//101. Symmetric Tree
//Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
//Input: root = [1,2,2,3,4,4,3] Output: true
// 判断对称二叉树要比较的是哪两个节点，要比较的可不是左右节点！
//对于二叉树是否对称，要比较的是根节点的左子树与右子树是不是相互翻转的，所以在递归遍历的过程中，也是要同时遍历两棵树。
// https://github.com/youngyangyang04/leetcode-master/blob/master/problems/0101.%E5%AF%B9%E7%A7%B0%E4%BA%8C%E5%8F%89%E6%A0%91.md

//101. Symmetric Tree
{
    const isMirror = (n1, n2) => {
        if (n1 === null && n2 === null) return true;

        //if (n1 === null && n2 !== null) return false;
        //if (n1 !== null && n2 === null) return false;
        if (n1 === null || n2 === null) return false;

        if (n1.val !== n2.val) return false;

        return isMirror(n1.left, n2.right) && isMirror(n2.left, n1.right)

    }

    var isSymmetric = function (root) {
        if (root === null) return true;
        return isMirror(root, root)
    };
}
{
    var isSymmetric = function (root) {
        if (root == null) return true;
        let q = [root, root];
        while (q.length > 0) {

            let n1 = q.shift();
            let n2 = q.shift();

            if (n1 === null && n2 == null) continue;
            if (!n1 || !n2) return false;
            if (n1.val !== n2.val) return false;
            q.push(n1.left, n2.right); // smart : so shift() twice work
            q.push(n1.right, n2.left);
        }
        return true;
    }
}
/*
The Maze II
Construct Binary Search Tree from Preorder Traversal
Frog Position After T Seconds
*/
//101. Symmetric Tree
{
    var isSameTree = function (p, q) {
        if (p === null && q === null) return true;
        if (p === null || q === null) return false;
        if (p.val !== q.val) return false;
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    };
    //Binary Tree Tilt
    //Regions Cut By Slashes
    //Smallest Common Region
}