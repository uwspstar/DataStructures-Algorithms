//94. Binary Tree Inorder Traversal
{
    var inorderTraversal = function (root) {
        if (root === null) return [];

        let res = [];
        let stack = [];
        let p = root;

        while (stack.length > 0 || p) {
            while (p) {
                stack.push(p);
                p = p.left;
            }
            let n = stack.pop();
            res.push(n.val);
            p = n.right;
        }
        return res;
    };
}

{
    var inorderTraversal = function (root) {
        if (root === null) return [];

        let res = [];

        const dfs_inorderTraversal = n => {
            n.left && dfs_inorderTraversal(n.left);
            res.push(n.val);
            n.right && dfs_inorderTraversal(n.right);
        }

        dfs_inorderTraversal(root);

        return res;
    };
}

// 173. Binary Search Tree Iterator
// 230. Kth Smallest Element in a BST
// 272. Closest Binary Search Tree Value II
// 285. Inorder Successor in BST
// 783. Minimum Distance Between BST Nodes