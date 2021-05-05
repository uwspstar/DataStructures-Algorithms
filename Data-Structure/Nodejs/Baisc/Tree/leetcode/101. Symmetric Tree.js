//101. Symmetric Tree
//Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
//Input: root = [1,2,2,3,4,4,3] Output: true
{
    const isMirror = (n1, n2) => {
        if (n1 === null && n2 === null) return true;

        if (n1 === null && n2 !== null) return false;
        if (n1 !== null && n2 === null) return false;

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