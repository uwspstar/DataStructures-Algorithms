//94. Binary Tree Inorder Traversal
/*
Given the root of a binary tree, return the inorder traversal of its nodes' values.
 
Input: root = [1,null,2,3] Output: [1,3,2]
Input: root = [] Output: []
Input: root = [1] Output: [1]
Input: root = [1,2] Output: [2,1]
Input: root = [1,null,2] Output: [1,2]
*/
//Inorder
{
    var inorderTraversal = function (root) {
        if (root === null) return root;
        let res = []

        const dfs_inorderTraversal = n => {

            if (n.left) {
                dfs_inorderTraversal(n.left);
            }

            res.push(n);

            if (n.right) {
                dfs_inorderTraversal(n.right);
            }
        }

        inorderTraversal(root);

        return res;
    }
}
{
    var inorderTraversal = function (root) {
        if (root === null) return root;
        let res = [];
        let s = [];
        let p = root;
        while (s.length || p) {
            while (p) {
                s.push(p);
                p = p.left;
            }
            let n = s.pop();
            res.push(n.val);
            p = n.right;
        }
        return res;
    }
}